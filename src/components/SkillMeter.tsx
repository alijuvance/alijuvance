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
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: index * 0.05 }}
      className="inline-block mr-4 mb-2"
    >
      <span className="text-sm text-secondary dark:text-secondary-dark font-medium hover:text-primary dark:hover:text-primary-dark transition-colors cursor-default">
        {skill.name}
      </span>
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
