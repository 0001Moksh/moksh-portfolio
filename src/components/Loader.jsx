// src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Loader({ size = 40, color = '#000000ff', speed = 1.5 }) {
  const dots = [0, 1, 2,3,4,5,6,7,8,9];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center">
        {/* Rotating Neon Rings */}
        <motion.div
  className="absolute rounded-full w-60 h-60 border-[6px] border-transparent"
  style={{
    borderImage: 'linear-gradient(45deg, #ffffffff, #000000ff, #ffffffff) 1',
    boxShadow: '0 0 25px #53d5fdff, 0 0 50px #7917baff',
  }}
  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
/>

<motion.div
  className="absolute rounded-full w-48 h-48 border-[6px] border-transparent"
  style={{
    borderImage: 'linear-gradient(135deg, #ffffffff, #000000ff, #ffffffff) 1',
    boxShadow: '0 0 20px #3517baff, 0 0 40px #53b0fdff',
  }}
  animate={{ rotate: -360, scale: [1, 1.08, 1] }}
  transition={{ repeat: Infinity, duration: 3.2, ease: 'linear' }}
/>


        {/* Pulsating Dots */}
        <div className="flex space-x-4 relative z-10">
          {dots.map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 100px ${color}, 0 0 30px ${color}`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;
