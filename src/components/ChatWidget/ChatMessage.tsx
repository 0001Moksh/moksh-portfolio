import React from 'react';
import { Bot, RefreshCw, FileText, ExternalLink } from 'lucide-react';
import { Message } from '../../types/chat';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ChatMessageProps {
  message: Message;
  isLast: boolean;
  onRetry?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLast, onRetry }) => {
  const isBot = message.sender === 'bot';
  const isError = message.isError;

  return (
    <div className={`flex items-start gap-2.5 w-full ${isBot ? 'justify-start' : 'justify-end'}`}>
      
      {/* Bot Avatar Left */}
      {isBot && (
        <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-primary to-indigo-600 border border-purple-400/20 flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.15)] select-none">
          <Bot size={16} className="text-white" />
        </div>
      )}

      {/* Message Bubble Container */}
      <div className={`flex flex-col gap-1 max-w-[82%] ${isBot ? 'items-start' : 'items-end'}`}>
        
        {/* The message bubble */}
        <div
          className={`px-4 py-3 rounded-2xl text-sm border transition-all duration-300 ${
            isError
              ? 'bg-rose-950/30 border-rose-900/50 text-rose-200 rounded-tl-none'
              : isBot
              ? 'bg-slate-900 border-slate-800/80 text-slate-100 rounded-tl-none'
              : 'bg-primary border-primary-dark/20 text-white rounded-tr-none shadow-[0_3px_10px_rgba(168,85,247,0.12)]'
          }`}
        >
          {/* Content rendering */}
          {isError ? (
            <div className="flex flex-col gap-2">
              <p className="text-rose-200">{message.content}</p>
              {isLast && onRetry && (
                <button
                  onClick={onRetry}
                  className="flex items-center gap-1.5 self-start text-xs font-semibold bg-rose-900/50 hover:bg-rose-900 border border-rose-800 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer mt-1"
                >
                  <RefreshCw size={12} className="animate-spin-hover" />
                  <span>Retry Message</span>
                </button>
              )}
            </div>
          ) : (
            <MarkdownRenderer content={message.content} />
          )}

          {/* Source Document References */}
          {isBot && message.sources && message.sources.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-slate-850 flex flex-wrap gap-1.5">
              {message.sources.map((source, idx) => {
                const isUrl = source.startsWith('http://') || source.startsWith('https://');
                const cleanName = isUrl
                  ? new URL(source).hostname.replace('www.', '')
                  : source.substring(source.lastIndexOf('/') + 1);

                return isUrl ? (
                  <a
                    key={idx}
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-slate-950/60 hover:bg-slate-950/95 text-primary-light border border-primary/20 hover:border-primary/50 text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all duration-200"
                    title={source}
                  >
                    <ExternalLink size={10} />
                    <span>{cleanName}</span>
                  </a>
                ) : (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1 bg-slate-950/40 text-slate-350 border border-slate-800 text-[11px] font-medium px-2.5 py-1 rounded-lg"
                    title={`Retrieved from ${source}`}
                  >
                    <FileText size={10} className="text-slate-400" />
                    <span>{cleanName}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Timestamp */}
        <span className="text-[9px] text-slate-500 pl-1 tracking-wider mt-0.5 select-none">
          {message.timestamp}
        </span>
      </div>

    </div>
  );
};
