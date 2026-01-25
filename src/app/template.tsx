'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Page Transition Template
 * Provides smooth fade-in/fade-out transitions between pages
 * Uses Framer Motion with reduced motion support
 */

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
