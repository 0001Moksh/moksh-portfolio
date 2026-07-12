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
    if (hasNewNotification) {
      setHasNewNotification(false);
    }
  };

  // Prevent background body scroll on mobile when chat is open
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
      {/* Floating Chat Trigger Button */}
      <motion.button
        onClick={handleToggle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          damping: 15, 
          stiffness: 180,
          delay: 0.8 // Load after basic portfolio entrance animations
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-700 via-primary to-indigo-600 text-white shadow-[0_4px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.6)] cursor-pointer transition-shadow duration-300 focus:outline-none group border border-primary-light/10"
        aria-label="Toggle assistant chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot size={24} className="text-white group-hover:scale-105 transition-transform" />
              
              {/* Pulsing notification badge */}
              {hasNewNotification && (
                <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3 select-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950"></span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
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
