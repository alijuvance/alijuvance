'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform } from 'framer-motion';
import { Spotlight } from './Spotlight';

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

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl transition-colors shadow-sm dark:shadow-none ${getSpanClass()} ${className}`}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 rounded-3xl"
        style={{ rotateX: prefersReducedMotion ? 0 : rotateX, rotateY: prefersReducedMotion ? 0 : rotateY }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Spotlight className="h-full w-full rounded-3xl" fill="rgba(255, 255, 255, 0.03)">
          {/* Glossy Gradient Overlay (Dark Mode) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden dark:block rounded-3xl" />
          
          {/* Red Glow Effect from Bottom (Dark Mode) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none hidden dark:block" />

          {/* Content */}
          <div className="relative z-10 w-full h-full p-6 md:p-8">
            {children}
          </div>
        </Spotlight>
      </motion.div>
    </motion.div>
  );
}
