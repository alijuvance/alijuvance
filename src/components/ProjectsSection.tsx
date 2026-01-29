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
    <section id="projects" className="section-padding relative overflow-hidden" aria-labelledby="projects-title">
      {/* Decorative Wave Line - High Visibility Fix */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
         <svg className="w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {/* Solid White Stroke to ensure visibility */}
            <path 
              d="M-100 600 C 400 600, 800 100, 1600 200" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
         </svg>
      </div>

      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN - Sticky Title & Filters */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h2 id="projects-title" className="text-5xl md:text-6xl font-title font-bold text-white mb-8 tracking-tight uppercase leading-none">
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-500 dark:to-gray-800">
                  Projects
                </span>
              </h2>

              <div className="w-24 h-1 bg-white mb-8" /> {/* The White Line */}

              <p className="text-secondary text-lg mb-10 max-w-sm">
                A curated selection of technical challenges and digital products extracted from my professional journey.
              </p>

              {/* Filters - Vertical List in Sidebar */}
              <div className="flex flex-col items-start gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-4 ${
                      activeCategory === category
                        ? 'text-white pl-4'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {/* Active White Line Indicator */}
                    {activeCategory === category && (
                      <motion.div 
                        layoutId="activeCategoryLine"
                        className="w-12 h-[1px] bg-white absolute left-0"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Project Cards */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div layout className="flex flex-col gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More Link */}
            <div className="pt-8 border-t border-white/5 flex justify-end">
               <a href="https://github.com/Alijuvance" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <span className="font-mono text-xs tracking-widest uppercase">View all archives</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
               </a>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
