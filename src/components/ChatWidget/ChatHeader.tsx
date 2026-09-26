import React from 'react';
import {
  X,
  Trash2,
  MessageSquarePlus,
  Maximize2,
  Minimize2,
  Bot,
} from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onNewChat: () => void;
  onClearChat: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onClose,
  onNewChat,
  onClearChat,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <div className="relative flex flex-col items-center pt-5 pb-4 px-4 bg-slate-950/95 border-b border-slate-800/80 rounded-t-2xl select-none backdrop-blur-md">
      {/* Top action row */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <button
            onClick={onNewChat}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors duration-150"
            title="New chat"
          >
            <MessageSquarePlus size={15} />
          </button>
          <button
            onClick={onClearChat}
            className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition-colors duration-150"
            title="Clear conversation"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <div className="flex items-center gap-0.5">
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors duration-150"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors duration-150"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Center identity */}
      <div className="flex flex-col items-center gap-2.5 mt-1">
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/40 ring-2 ring-slate-900">
          <Bot size={26} className="text-white" strokeWidth={1.75} />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
        </div>

        <div className="text-center">
          <h2 className="text-[13px] font-semibold text-white tracking-wide">
            Moksh Bot
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-emerald-400/90 font-medium tracking-wider uppercase">
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};