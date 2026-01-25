'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * BentoGrid Layout Component
 * Asymmetric grid layout for modern portfolio design
 */

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * BentoCard Component
 * Base card for the grid with subtle border and hover glow
 */

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export function BentoCard({ children, className = '', colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Helper for grid span classes
  const getSpanClass = () => {
    let classes = '';
    if (colSpan === 2) classes += ' md:col-span-2';
    if (colSpan === 3) classes += ' md:col-span-3';
    if (colSpan === 4) classes += ' md:col-span-4'; // Full width
    if (rowSpan === 2) classes += ' row-span-2';
    return classes;
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl bg-surface dark:bg-surface border border-border/50 hover:border-border transition-colors ${getSpanClass()} ${className}`}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}
