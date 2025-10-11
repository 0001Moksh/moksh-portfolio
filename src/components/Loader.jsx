// src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Loader({ size = 18, color = '#e78924ff', speed = 1.2 }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/95 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Halo */}
        <motion.div
          className="absolute rounded-full w-64 h-40 border-[3px]"
          style={{
            borderColor: `${color}40`,
            boxShadow: `0 0 40px ${color}60`,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />

        {/* Inner Glow Ring */}
        <motion.div
          className="absolute rounded-full w-40 h-40 border-[3px]"
          style={{
            borderColor: `${color}80`,
            boxShadow: `0 0 30px ${color}`,
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />

        {/* Central Pulsing Core */}
        <motion.div
          className="rounded-full"
          style={{
            width: size * 3,
            height: size * 3,
            background: `radial-gradient(circle, ${color}, transparent)`,
            boxShadow: `0 0 60px ${color}`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: speed * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orbiting Dots */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              boxShadow: `0 0 25px ${color}`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: speed * 4,
              ease: 'linear',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Loader;
