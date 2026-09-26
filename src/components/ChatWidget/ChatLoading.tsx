import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatLoading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex items-start gap-3 select-none"
    >
      <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-900/30">
        <Bot size={16} className="text-white" strokeWidth={2} />
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
      </div>

      <div className="flex flex-col gap-1 max-w-[75%]">
        <span className="text-[11px] font-medium text-slate-500 pl-1 tracking-wide">
          Moksh
        </span>
        <div className="bg-slate-900/90 border border-slate-800/70 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5 min-w-[64px]">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 0.55,
                repeat: Infinity,
                delay: i * 0.12,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};