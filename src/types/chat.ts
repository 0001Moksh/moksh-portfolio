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
  model?: string;
}

export interface ChatResponse {
  thread_id: string;
  answer: string;
  sources: string[];
  model_used?: string | null;
}

export type ChatStatus = 'idle' | 'loading' | 'error' | 'offline';
