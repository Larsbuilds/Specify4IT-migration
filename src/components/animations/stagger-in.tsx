'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerInProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function StaggerIn({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = ''
}: StaggerInProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
