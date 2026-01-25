'use client';

import { Project } from '@/data/projects';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Project Card Component - Minimalist
 * Simple, vertically stacked content. No 3D, no heavy borders.
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
          {/* Challenge & Solution combined for flow */}
          <div className="prose prose-sm dark:prose-invert max-w-none text-secondary dark:text-secondary-dark">
            <p>
              <strong className="text-primary dark:text-primary-dark font-semibold">Challenge:</strong> {project.challenge}
            </p>
            <p>
              <strong className="text-primary dark:text-primary-dark font-semibold">Solution:</strong> {project.solution}
            </p>
          </div>

          {/* Metrics - Simple List */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary dark:text-primary-dark">
            {project.metrics.map((metric, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark/50" />
                {metric}
              </li>
            ))}
          </ul>

          {/* Tech Stack - Simple Text */}
          <div className="flex flex-wrap gap-2 text-xs font-mono text-secondary dark:text-secondary-dark pt-2">
            {project.stack.map((tech, i) => (
              <span key={tech}>
                {tech}{i < project.stack.length - 1 ? ' /' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

