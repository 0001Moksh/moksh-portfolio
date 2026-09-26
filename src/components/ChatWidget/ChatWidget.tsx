import React, { useState, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../../hooks/useChat';
import { ChatWindow } from './ChatWindow';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const chat = useChat();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (hasNewNotification) setHasNewNotification(false);
  };

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.button
        onClick={handleToggle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 16, stiffness: 200, delay: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/40 hover:shadow-violet-800/50 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -40, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 40, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 40, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -40, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <Bot size={22} />
              {hasNewNotification && (
                <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950" />
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isOnline={chat.isOnline}
        messages={chat.messages}
        status={chat.status}
        sendMessage={chat.sendMessage}
        retryLastMessage={chat.retryLastMessage}
        startNewChat={chat.startNewChat}
        clearChat={chat.clearChat}
      />
    </>
  );
};