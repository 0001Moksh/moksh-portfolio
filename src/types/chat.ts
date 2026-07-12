export interface Message {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: string;
  sources?: string[];
  isError?: boolean;
}

export interface ChatSession {
  thread_id: string;
  created_at: string;
}

export interface ChatRequest {
  thread_id?: string;
  message: string;
}

export interface ChatResponse {
  thread_id: string;
  response: string;
  sources: string[];
}

export type ChatStatus = 'idle' | 'loading' | 'error' | 'offline';
