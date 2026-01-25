'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { experiences } from '@/data/experiences';

/**
 * Animated Timeline Section Component
 * Features:
 * - SVG line that draws as user scrolls (pathLength animation)
 * - Timeline items fade in with y transform
 * - Respects prefers-reduced-motion
 */

export function AnimatedTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-padding relative"
      aria-labelledby="experience-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="experience-title" className="section-title text-left">
            Parcours
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated SVG Line - Left Aligned */}
          <svg
            className="absolute left-0 md:left-8 top-0 h-full w-px"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Background line (dark gray) */}
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/5"
            />
            {/* Animated line (accent color) */}
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              style={{
                pathLength: prefersReducedMotion ? 1 : pathLength,
              }}
            />
          </svg>

          {/* Timeline items */}
          <div className="space-y-16 pl-8 md:pl-20">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                prefersReducedMotion={prefersReducedMotion || false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: {
    id: string;
    period: string;
    role: string;
    company: string;
    description: string;
  };
  index: number;
  prefersReducedMotion: boolean;
}

function TimelineItem({ experience, index, prefersReducedMotion }: TimelineItemProps) {
  return (
    <motion.div
      className="relative"
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
    >
      {/* Dot on Line */}
      <div 
        className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-accent shadow-[0_0_10px_rgba(239,68,68,0.5)] z-10"
      />

      {/* Content - Ghost Style */}
      <div>
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {experience.role}
          </h3>
          <span className="text-accent font-medium">@ {experience.company}</span>
        </div>
        
        <div className="mb-4">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest">
            {experience.period}
          </span>
        </div>

        <p className="text-secondary/80 leading-relaxed max-w-2xl">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
