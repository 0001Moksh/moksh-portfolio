import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff } from 'lucide-react';
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    feedEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(messages.length <= 1 ? 'auto' : 'smooth');
    }
  }, [messages.length, status, isOpen]);

  // Escape closes chat (or exits fullscreen first)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  // Reset fullscreen when closed
  useEffect(() => {
    if (!isOpen) setIsFullscreen(false);
  }, [isOpen]);

  const windowClasses = isFullscreen
    ? 'fixed inset-0 z-[95] w-full h-[100dvh] rounded-none'
    : 'fixed z-[90] w-full h-[100dvh] bottom-0 left-0 sm:w-[390px] sm:h-[600px] sm:bottom-24 sm:left-6 sm:rounded-2xl';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          className={`flex flex-col bg-slate-950/95 border border-slate-800/80 shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden ${windowClasses}`}
        >
          <ChatHeader
            onClose={onClose}
            onNewChat={startNewChat}
            onClearChat={clearChat}
            isFullscreen={isFullscreen}
            onToggleFullscreen={() => setIsFullscreen((v) => !v)}
          />

          {!isOnline && (
            <div className="flex items-center gap-2 px-4 py-2 bg-rose-950/50 border-b border-rose-900/40 text-xs text-rose-300">
              <WifiOff size={13} className="text-rose-400 shrink-0" />
              <span>You’re offline. Messages can’t be sent right now.</span>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800/80">
            {messages.map((msg, index) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                isLast={index === messages.length - 1}
                onRetry={retryLastMessage}
              />
            ))}

            {status === 'loading' && <ChatLoading />}

            <div ref={feedEndRef} />
          </div>

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