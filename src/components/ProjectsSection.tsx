'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

/**
 * Filterable Projects Section - Parth Sharma Style
 * Features:
 * - Category filters (All, Web, App, etc.)
 * - Animated grid layout
 * - Updated section styling
 */

const categories = ['Tous', 'Fullstack', 'Frontend', 'Backend', 'DevOps'];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => {
        // Simple logic to simulate categorization based on stack
        // In a real app, projects would have a 'category' field
        if (activeCategory === 'Fullstack') return project.stack.includes('Node.js') && project.stack.includes('React');
        if (activeCategory === 'Backend') return project.stack.includes('Node.js') || project.stack.includes('Go') || project.stack.includes('Java');
        if (activeCategory === 'Frontend') return project.stack.includes('React') && !project.stack.includes('Go');
        if (activeCategory === 'DevOps') return project.stack.includes('Docker') || project.stack.includes('Kubernetes');
        return true;
      });

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="mb-16">
          <h2 id="projects-title" className="text-3xl font-bold text-primary dark:text-primary-dark mb-6">
            Projets Sélectionnés
          </h2>
        </div>

        {/* Filter Tabs - Minimalist Text */}
        <div className="flex flex-wrap gap-8 mb-16 border-b border-gray-100 dark:border-gray-800 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium transition-colors relative pb-4 -mb-4 ${
                activeCategory === category
                  ? 'text-primary dark:text-primary-dark border-b-2 border-primary dark:border-primary-dark'
                  : 'text-secondary dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animation */}
        <motion.div 
          layout
          className="grid gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a href="https://github.com/Alijuvance" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
