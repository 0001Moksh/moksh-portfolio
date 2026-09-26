import React, { useRef, useEffect, useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
  autoFocus: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled,
  autoFocus,
}) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  }, [autoFocus, disabled]);

  const adjustHeight = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
  };

  useEffect(() => {
    adjustHeight();
  }, [text]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2.5 p-3 bg-slate-950/90 border-t border-slate-800/80 rounded-b-2xl"
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={disabled ? 'Moksh is thinking…' : 'Message Moksh Bot…'}
        disabled={disabled}
        className="flex-1 bg-slate-900/80 border border-slate-800 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm resize-none focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all duration-200 placeholder:text-slate-500 max-h-32 leading-relaxed disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600 text-white hover:bg-violet-500 active:scale-95 disabled:opacity-30 disabled:hover:bg-violet-600 disabled:active:scale-100 transition-all duration-150 shadow-md shadow-violet-900/30"
        title="Send"
      >
        <Send size={16} />
      </button>
    </form>
  );
};