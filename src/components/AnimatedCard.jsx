import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCard Component
 * Professional card with hover effects and reveal animation
 */
const AnimatedCard = ({
  children,
  className = '',
  hoverScale = 1.05,
  hoverShadow = true,
  hover3D = false,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {hover3D ? (
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateY: 5, rotateX: -5 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedCard;
