import React from 'react';
import pic from '../../assets/image.jpg'; // Moksh's picture as Deva avatar base

export const ChatLoading: React.FC = () => {
  return (
    <div className="flex items-start gap-3 select-none animate-pulse">
      {/* Bot Avatar */}
      <div className="relative flex-shrink-0 w-8 h-8 rounded-full border border-primary/30 overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.2)]">
        <img
          src={pic}
          alt="Deva Avatar"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-950"></div>
      </div>

      {/* Loading Bubble */}
      <div className="flex flex-col gap-1 max-w-[70%]">
        <span className="text-[11px] font-semibold text-slate-400 pl-1 tracking-wider">DEVA</span>
        
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-md flex items-center justify-center gap-1.5 min-w-[70px]">
          <div 
            className="w-2 h-2 rounded-full bg-primary/80 animate-bounce" 
            style={{ animationDelay: '0ms', animationDuration: '0.8s' }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full bg-primary/80 animate-bounce" 
            style={{ animationDelay: '150ms', animationDuration: '0.8s' }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full bg-primary/80 animate-bounce" 
            style={{ animationDelay: '300ms', animationDuration: '0.8s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};
