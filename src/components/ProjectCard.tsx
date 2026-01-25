'use client';

import { Project } from '@/data/projects';
import { Card3D } from './Card3D';

/**
 * Project Card Component with 3D Hover Effect
 * Narrative-focused case study card with 3D tilt on hover
 * Structure: Challenge → Solution → Metrics (storytelling approach)
 */

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card3D className="w-full" intensity={8}>
      <article className="card border-l-4 border-l-accent dark:border-l-accent-dark bg-surface dark:bg-surface-dark">
        {/* Header */}
        <header className="mb-6">
          <h3 className="text-2xl font-bold text-primary dark:text-primary-dark mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-accent dark:text-accent-dark uppercase tracking-wide">
            {project.role}
          </p>
        </header>

        {/* Challenge Section */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-secondary-dark uppercase tracking-wider mb-3">
            <ChallengeIcon className="w-4 h-4" />
            Le Défi
          </h4>
          <p className="text-primary dark:text-primary-dark leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-secondary-dark uppercase tracking-wider mb-3">
            <SolutionIcon className="w-4 h-4" />
            La Stratégie Technique
          </h4>
          <p className="text-primary dark:text-primary-dark leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Metrics Section */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-secondary dark:text-secondary-dark uppercase tracking-wider mb-3">
            <MetricsIcon className="w-4 h-4" />
            L&apos;Impact Business
          </h4>
          <ul className="space-y-2">
            {project.metrics.map((metric, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-primary dark:text-primary-dark"
              >
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                </span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <footer className="pt-6 border-t border-gray-100 dark:border-gray-800">
          <h4 className="text-xs font-semibold text-secondary dark:text-secondary-dark uppercase tracking-wider mb-3">
            Stack Technique
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </Card3D>
  );
}

// Icon Components
function ChallengeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

function SolutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function MetricsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
