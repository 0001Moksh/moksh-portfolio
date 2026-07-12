import React from 'react';
import { X, Trash2, MessageSquarePlus, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onNewChat: () => void;
  onClearChat: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onClose,
  onNewChat,
  onClearChat,
}) => {
  return (
    <div className="relative flex flex-col items-center pt-6 pb-4 px-4 bg-gradient-to-b from-slate-900/90 to-slate-950 border-b border-slate-800 rounded-t-2xl select-none">
      
      {/* Top action row */}
      <div className="absolute top-2 left-3 right-3 flex items-center justify-between w-[94%]">
        {/* Left actions: New Chat and Clear History */}
        <div className="flex items-center gap-1">
          <button
            onClick={onNewChat}
            className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-900 rounded-lg transition-all duration-200 cursor-pointer"
            title="New Session"
          >
            <MessageSquarePlus size={15} />
          </button>
          <button
            onClick={onClearChat}
            className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition-all duration-200 cursor-pointer"
            title="Clear Chat Screen"
          >
            <Trash2 size={15} />
          </button>
        </div>

        {/* Right action: Close */}
        <button
          onClick={onClose}
          className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-900 rounded-lg transition-all duration-200 cursor-pointer"
          title="Close Chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Robot avatar container in center */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-primary to-indigo-600 border-2 border-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.35)]">
          <Bot size={30} className="text-white" />
        </div>
        
        {/* Centered Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-sm font-bold text-white tracking-wide">Moksh Bot: AI Assistant</h2>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Active</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};
