import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
}

export function FadeInView({ children, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
