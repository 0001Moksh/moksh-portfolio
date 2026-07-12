import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, AlertTriangle } from 'lucide-react';
import { Message, ChatStatus } from '../../types/chat';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatLoading } from './ChatLoading';
import { ChatInput } from './ChatInput';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  status: ChatStatus;
  isOnline: boolean;
  sendMessage: (msg: string) => void;
  retryLastMessage: () => void;
  startNewChat: () => void;
  clearChat: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  messages,
  status,
  isOnline,
  sendMessage,
  retryLastMessage,
  startNewChat,
  clearChat,
}) => {
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages or when bot is typing
  const scrollToBottom = (behavior: 'smooth' | 'auto' = 'smooth') => {
    feedEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      // Auto-scroll instantly on open, smoothly on additions
      scrollToBottom(messages.length <= 1 ? 'auto' : 'smooth');
    }
  }, [messages.length, status, isOpen]);

  // Handle Escape key to close chat window
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed z-[90] flex flex-col bg-slate-950/95 border border-slate-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-full h-[100dvh] bottom-0 left-0 sm:w-[380px] sm:h-[580px] sm:bottom-24 sm:left-6 sm:rounded-2xl"
        >
          {/* Header */}
          <ChatHeader
            onClose={onClose}
            onNewChat={startNewChat}
            onClearChat={clearChat}
          />

          {/* Network Offline Banner */}
          {!isOnline && (
            <div className="flex items-center gap-2 px-4 py-2 bg-rose-950/40 border-b border-rose-900/40 text-xs text-rose-300 select-none">
              <WifiOff size={13} className="text-rose-400" />
              <span>Offline mode. API requests will fail.</span>
            </div>
          )}

          {/* Messages Board */}
          <div className="flex-grow overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-800">
            {messages.map((msg, index) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                isLast={index === messages.length - 1}
                onRetry={retryLastMessage}
              />
            ))}
            
            {/* Loading / Typing indicator */}
            {status === 'loading' && <ChatLoading />}

            {/* Scroll anchor */}
            <div ref={feedEndRef} />
          </div>

          {/* Message Input Panel */}
          <ChatInput
            onSend={sendMessage}
            disabled={status === 'loading' || !isOnline}
            autoFocus={isOpen}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
