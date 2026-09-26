import { ChatSession, ChatResponse } from '../types/chat';

const DEFAULT_TIMEOUT_MS = 30000; // 30 seconds
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

const getBaseUrl = (): string => {
  const apiUrl = import.meta.env.VITE_DEVA_BACKEND_URL?.trim();
  if (!apiUrl) {
    throw new Error('Chatbot backend URL is not configured. Set VITE_DEVA_BACKEND_URL.');
  }
  return apiUrl.replace(/\/+$/, '');
};

/**
 * Custom fetch implementation supporting timeout, aborting, and retry logic.
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS,
  retries = MAX_RETRIES
): Promise<Response> {
  const { signal, ...customOptions } = options;
  
  let attempt = 0;
  
  while (attempt <= retries) {
    const controller = new AbortController();
    
    let isTimeout = false;
    // Set up timeout mechanism
    const timeoutId = setTimeout(() => {
      isTimeout = true;
      controller.abort();
    }, timeoutMs);

    // Link caller's signal with our controller
    let cleanupSignalListener: (() => void) | null = null;
    if (signal) {
      if (signal.aborted) {
        clearTimeout(timeoutId);
        throw new DOMException('Request aborted', 'AbortError');
      }
      const onAbort = () => {
        controller.abort();
      };
      signal.addEventListener('abort', onAbort);
      cleanupSignalListener = () => {
        signal.removeEventListener('abort', onAbort);
      };
    }

    try {
      const response = await fetch(url, {
        ...customOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (cleanupSignalListener) cleanupSignalListener();

      // Retry on specific transient error statuses (e.g. rate limit, gateway issues)
      if (!response.ok && [429, 502, 503, 504].includes(response.status) && attempt < retries) {
        attempt++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS * attempt));
        continue;
      }

      return response;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (cleanupSignalListener) cleanupSignalListener();

      const isManualAbort = signal?.aborted && !isTimeout;
      
      // If manually aborted by user/caller, do not retry
      if (isManualAbort) {
        throw new DOMException('Request aborted', 'AbortError');
      }

      if (isTimeout && attempt === retries) {
        throw new Error('Request timed out');
      }

      // Retry on network errors
      if (attempt < retries) {
        attempt++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS * attempt));
        continue;
      }
      
      throw new Error(error.message || 'Network error occurred');
    }
  }

  throw new Error('Request failed after retries');
}

export const chatbotApi = {
  /**
   * Creates a client-side thread ID; the backend has no separate session endpoint.
   */
  async createNewSession(signal?: AbortSignal): Promise<ChatSession> {
    if (signal?.aborted) {
      throw new DOMException('Request aborted', 'AbortError');
    }
    return {
      thread_id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    };
  },

  /**
   * Sends a user query to Deva and retrieves the response and sources.
   */
  async sendMessage(
    message: string,
    threadId: string,
    signal?: AbortSignal
  ): Promise<ChatResponse> {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/chat`;

    try {
      const response = await fetchWithTimeout(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            thread_id: threadId,
            message,
          }),
          signal,
        },
        DEFAULT_TIMEOUT_MS
      );

      if (!response.ok) {
        // Safe mapping to hide specific backend exceptions, as required by security guidelines
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a bit before sending another message.');
        }
        throw new Error('The assistant is currently busy. Please try again.');
      }

      const data = await response.json();
      return {
        thread_id: data.thread_id,
        answer: data.answer,
        sources: data.sources || [],
        model_used: data.model_used,
      };
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw error;
      }
      console.error('Error in chatbot communication:', error);
      throw new Error(error.message || 'Failed to connect to assistant. Please verify your internet connection.');
    }
  },
};
