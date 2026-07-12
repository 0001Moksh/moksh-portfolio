import React, { useRef, useEffect, useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
  autoFocus: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled, autoFocus }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto focus input on load or when chat window opens
  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus, disabled]);

  // Handle textarea height adjustment dynamically
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [text]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = text.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setText('');
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If Enter (without Shift), submit the form
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 p-3 bg-slate-950 border-t border-slate-800 rounded-b-2xl relative"
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={disabled ? 'Moksh Bot is typing...' : 'Type here...'}
        disabled={disabled}
        className="flex-grow bg-slate-900 border border-slate-800 text-white rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-primary/60 transition-colors duration-200 scrollbar-none leading-relaxed placeholder-slate-500 max-h-[120px] disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white hover:bg-primary-dark active:scale-95 disabled:scale-100 disabled:opacity-30 disabled:bg-primary transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-[0_0_12px_rgba(168,85,247,0.3)]"
      >
        <Send size={16} />
      </button>
    </form>
  );
};
