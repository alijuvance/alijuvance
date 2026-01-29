'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';
import { Spotlight } from './Spotlight';

/**
 * Stacked Experiences Section (Laza Style)
 * Large cards stacked vertically with rich detail.
 */

export function AnimatedTimelineSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />
      <div className="container-section">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight">
            Expérience <span className="text-secondary/40">Professionnelle</span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        {/* Stacked List */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative pl-6 md:pl-10 py-4">
        {/* Top Row: Role & Company & Date */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-sans group-hover:text-accent transition-colors">
              {experience.role}
            </h3>
            <p className="text-lg text-secondary font-medium mt-1">
              {experience.company}
            </p>
          </div>
          
          <div className="font-mono text-sm text-secondary/60 bg-surface dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5">
            {experience.period}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
          {experience.description}
        </p>

        {/* Tech Stack (Mockup if not in data) */}
        <div className="flex flex-wrap gap-2 mt-6">
           {['React', 'TypeScript', 'System Design'].map((tag, i) => (
             <span key={i} className="text-xs font-mono text-secondary/60 border border-gray-200 dark:border-white/5 px-2 py-1 rounded hover:bg-surface dark:hover:bg-white/5 transition-colors">
               {tag}
             </span>
           ))}
        </div>
      </div>
      
      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
    </motion.div>
  );
}
