import React from 'react';
import { motion } from 'framer-motion';

/**
 * RevealSection Component
 * Provides smooth reveal animations with staggered children support
 */
const RevealSection = ({
  children,
  className = '',
  variant = 'default',
  delay = 0,
  staggerChildren = false,
  containerDelay = 0,
}) => {
  const variants = {
    default: {
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    slideInLeft: {
      hidden: {
        opacity: 0,
        x: -50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    slideInRight: {
      hidden: {
        opacity: 0,
        x: 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    },
    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: containerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={staggerChildren ? containerVariants : variants[variant] || variants.default}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {staggerChildren ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={variants[variant] || variants.default}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default RevealSection;
