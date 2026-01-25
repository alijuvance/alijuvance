'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Animated Skill Meter Component
 * Displays skills with animated progress bars
 * Progress animates when the component comes into view
 */

interface Skill {
  name: string;
  level: number; // 0-100
  category?: string;
}

interface SkillMeterProps {
  skills: Skill[];
  title?: string;
}

export function SkillMeter({ skills, title }: SkillMeterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={containerRef} className="space-y-6">
      {title && (
        <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-4">
          {title}
        </h3>
      )}
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            isInView={isInView}
            prefersReducedMotion={prefersReducedMotion || false}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillBarProps {
  skill: Skill;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean;
}

function SkillBar({ skill, index, isInView, prefersReducedMotion }: SkillBarProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-primary dark:text-primary-dark">
          {skill.name}
        </span>
        <span className="text-xs text-secondary dark:text-secondary-dark">
          {skill.level}%
        </span>
      </div>
      
      {/* Progress bar container */}
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        {/* Animated fill */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-500 dark:from-accent-dark dark:to-blue-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            delay: prefersReducedMotion ? 0 : index * 0.1 + 0.3,
            ease: 'easeOut',
          }}
        />
      </div>
    </motion.div>
  );
}

// Pre-configured skill data for the portfolio
export const technicalSkills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / Express', level: 90 },
  { name: 'PHP / Laravel', level: 88 },
  { name: 'Python', level: 75 },
  { name: 'SQL / PostgreSQL', level: 92 },
  { name: 'Docker / Kubernetes', level: 80 },
  { name: 'AWS / Cloud', level: 78 },
];

export const softSkills: Skill[] = [
  { name: 'Architecture Logicielle', level: 95 },
  { name: 'Leadership Technique', level: 90 },
  { name: 'Communication', level: 88 },
  { name: 'Problem Solving', level: 95 },
];
