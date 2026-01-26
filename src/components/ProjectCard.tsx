'use client';

import { Project } from '@/data/projects';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Project Card Component - Data Dense
 * Detailed metrics, badges, and action links.
 */

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article 
      className="group pt-8 pb-8 border-t border-gray-100 dark:border-gray-800 first:border-t-0"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-4 gap-6">
        {/* Title & Role */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-primary dark:text-primary-dark mb-1 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-secondary dark:text-secondary-dark uppercase tracking-wider">
            {project.role}
          </p>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          {/* Challenge & Solution */}
          <div className="prose prose-sm dark:prose-invert max-w-none text-secondary dark:text-secondary-dark">
            <p>
              <strong className="text-primary dark:text-primary-dark font-semibold">Challenge:</strong> {project.challenge}
            </p>
            <p>
              <strong className="text-primary dark:text-primary-dark font-semibold">Solution:</strong> {project.solution}
            </p>
          </div>

          {/* Metrics - Data Density (Principle 10) */}
          <div className="grid grid-cols-2 gap-4 my-6">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold font-mono text-primary dark:text-white">{metric.split(' ')[0]}</span>
                <span className="text-xs text-secondary uppercase tracking-wider">{metric.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack & Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-zinc-800 text-secondary dark:text-zinc-400 border border-gray-200 dark:border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline decoration-accent/30 underline-offset-4 transition-all group/link">
              Voir le cas
              <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
