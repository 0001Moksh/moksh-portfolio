import { useState, useEffect, useRef, useCallback } from 'react';
import { Message, ChatStatus } from '../types/chat';
import { chatbotApi } from '../services/chatbotApi';

const THREAD_ID_KEY = 'deva_chat_thread_id';

const WELCOME_MESSAGE = {
  id: 'welcome',
  sender: 'bot' as const,
  content: "Hello! Ask me about Moksh's work...",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  sources: [],
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [threadId, setThreadId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  
  // Track active API requests to cancel them if needed (e.g. on new chat or clear)
  const abortControllerRef = useRef<AbortController | null>(null);

  // Monitor network offline/online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => {
      setIsOnline(false);
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Retrieve or initialize session thread ID
  useEffect(() => {
    const savedThreadId = localStorage.getItem(THREAD_ID_KEY);
    if (savedThreadId) {
      setThreadId(savedThreadId);
    } else {
      // Lazy fetch thread ID in background on mount
      const initSession = async () => {
        try {
          const session = await chatbotApi.createNewSession();
          localStorage.setItem(THREAD_ID_KEY, session.thread_id);
          setThreadId(session.thread_id);
        } catch (err) {
          console.error('Failed to initialize session thread ID on mount:', err);
          // Thread ID will be re-attempted on first message send
        }
      };
      initSession();
    }
  }, []);

  // Helper to cancel any ongoing request
  const cancelActiveRequest = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);

  // Wipes conversations, requests a new thread_id, and clears local state
  const startNewChat = useCallback(async () => {
    cancelActiveRequest();
    setStatus('loading');
    setError(null);
    try {
      const session = await chatbotApi.createNewSession();
      localStorage.setItem(THREAD_ID_KEY, session.thread_id);
      setThreadId(session.thread_id);
      setMessages([
        {
          ...WELCOME_MESSAGE,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setStatus('idle');
    } catch (err: any) {
      console.error('Failed to start new chat session:', err);
      setError('Failed to create a new session. Please check your internet connection.');
      setStatus('error');
    }
  }, [cancelActiveRequest]);

  // Clears visual messages but retains current session thread_id
  const clearChat = useCallback(() => {
    cancelActiveRequest();
    setMessages([
      {
        ...WELCOME_MESSAGE,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setError(null);
    setStatus('idle');
  }, [cancelActiveRequest]);

  // Main message sender logic
  const sendMessage = useCallback(
    async (textContent: string) => {
      const trimmedText = textContent.trim();
      if (!trimmedText) return;

      // Handle offline case before sending
      if (!navigator.onLine) {
        setIsOnline(false);
        setStatus('offline');
        setError('You are currently offline. Please check your internet connection and try again.');
        return;
      }

      cancelActiveRequest();
      setError(null);
      setStatus('loading');

      const userMessage: Message = {
        id: crypto.randomUUID(),
        sender: 'user',
        content: trimmedText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Append user message to state
      setMessages((prev) => [...prev, userMessage]);

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      try {
        let activeThreadId = threadId;
        
        // If thread ID was not initialized successfully, fetch it now
        if (!activeThreadId) {
          const session = await chatbotApi.createNewSession(abortController.signal);
          localStorage.setItem(THREAD_ID_KEY, session.thread_id);
          setThreadId(session.thread_id);
          activeThreadId = session.thread_id;
        }

        const response = await chatbotApi.sendMessage(
          trimmedText,
          activeThreadId,
          abortController.signal
        );

        const botMessage: Message = {
          id: crypto.randomUUID(),
          sender: 'bot',
          content: response.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: response.sources,
        };

        setMessages((prev) => [...prev, botMessage]);
        setStatus('idle');
      } catch (err: any) {
        // If aborted, do not update UI with error state
        if (err.name === 'AbortError') {
          return;
        }

        console.error('Error sending message:', err);
        
        const errorMessage: Message = {
          id: crypto.randomUUID(),
          sender: 'bot',
          content: err.message || 'An error occurred while contacting Deva. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
        };

        setMessages((prev) => [...prev, errorMessage]);
        setError(err.message || 'Communication error');
        setStatus('error');
      } finally {
        if (abortControllerRef.current === abortController) {
          abortControllerRef.current = null;
        }
      }
    },
    [threadId, cancelActiveRequest]
  );

  // Retries the last user query if it failed
  const retryLastMessage = useCallback(async () => {
    // Find last user message in the list
    const userMessages = messages.filter((m) => m.sender === 'user');
    if (userMessages.length === 0) return;
    
    const lastUserMessage = userMessages[userMessages.length - 1];
    
    // Remove the trailing error messages from display
    setMessages((prev) => {
      const lastIndex = prev.findLastIndex((m) => m.sender === 'user');
      return prev.slice(0, lastIndex + 1);
    });

    await sendMessage(lastUserMessage.content);
  }, [messages, sendMessage]);

  // Clean up controller on unmount
  useEffect(() => {
    return () => {
      cancelActiveRequest();
    };
  }, [cancelActiveRequest]);

  return {
    messages,
    status,
    error,
    isOnline,
    sendMessage,
    retryLastMessage,
    startNewChat,
    clearChat,
    threadId,
  };
};
