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
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="experience-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="experience-title" className="section-title">
            Parcours & Expérience
          </h2>
          <p className="section-subtitle">
            +10 années d&apos;évolution technique, des premières lignes de code
            aux responsabilités d&apos;architecture système.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated SVG Line */}
          <svg
            className="absolute left-0 md:left-1/2 top-0 h-full w-px md:-translate-x-1/2"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Background line (gray) */}
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Animated line (accent color) */}
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent dark:text-accent-dark"
              style={{
                pathLength: prefersReducedMotion ? 1 : pathLength,
              }}
            />
          </svg>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                isEven={index % 2 === 0}
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
  isEven: boolean;
  index: number;
  prefersReducedMotion: boolean;
}

function TimelineItem({ experience, isEven, index, prefersReducedMotion }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex items-center md:justify-center"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
    >
      {/* Dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent dark:bg-accent-dark rounded-full transform md:-translate-x-1/2 border-4 border-background dark:border-background-dark z-10"
        initial={prefersReducedMotion ? {} : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: prefersReducedMotion ? 0 : index * 0.1 + 0.2,
        }}
      />

      {/* Content Card */}
      <div
        className={`ml-8 md:ml-0 md:w-5/12 ${
          isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
        }`}
      >
        <div className="card">
          {/* Period badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 rounded-full mb-3">
            {experience.period}
          </span>

          {/* Role & Company */}
          <h3 className="text-lg font-bold text-primary dark:text-primary-dark mb-1">
            {experience.role}
          </h3>
          <p className="text-sm font-medium text-secondary dark:text-secondary-dark mb-3">
            {experience.company}
          </p>

          {/* Description */}
          <p className="text-sm text-secondary dark:text-secondary-dark leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
