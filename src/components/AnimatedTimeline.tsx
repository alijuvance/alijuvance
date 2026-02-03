'use client';

import { motion } from 'framer-motion';
// import { experiences } from '@/data/experiences'; // Using dynamic now
import { Spotlight } from './Spotlight';
import { useLanguage } from './LanguageContext';
import { CinematicText } from './CinematicText';

/**
 * Stacked Experiences Section (Laza Style)
 * Large cards stacked vertically with rich detail.
 */

export function AnimatedTimelineSection() {
  const { t } = useLanguage();

  // Reconstruct experiences with translation
  const experiences = [
    {
      id: 'stage-mtefop',
      period: '2025',
      role: t('exp.freelance.role'),
      company: t('exp.freelance.comp'),
      description: t('exp.freelance.desc'),
      tags: ['Next.js', 'NestJS', 'Solidity', 'Ethereum', 'PostgreSQL']
    },
    {
      id: 'stage-2024',
      period: '2025',
      role: t('exp.stage24.role'),
      company: t('exp.stage24.comp'),
      description: t('exp.stage24.desc'),
      tags: ['React', 'TypeScript', 'Git', 'Agile', 'Docker']
    },
    {
      id: 'stage-2023',
      period: 'Sept. 2024 - Nov. 2024',
      role: t('exp.stage23.role'),
      company: t('exp.stage23.comp'),
      description: t('exp.stage23.desc'),
      tags: ['React', 'NestJS', 'MySQL', 'Tailwind CSS', 'TypeScript']
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* ... keeping background ... */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />
      <div className="container-section">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight">
            {t('exp.title')} <span className="text-secondary/40">{t('exp.subtitle')}</span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6" />
          <p className="text-secondary/80 max-w-2xl text-lg">
            {t('exp.desc')}
          </p>
        </div>

        {/* Stacked List */}
        <div className="flex flex-col gap-2">
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
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative isolate"
    >
      {/* 1. Vertical Line Container - Full Height Impact */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10 overflow-visible">
        {/* A. Base Track (Dim) */}
        <div className="absolute inset-0 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-500" />

        {/* B. The "Red-White-Red" Plasma Core (Ignites on Hover) */}
        <motion.div
            className="absolute inset-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
                background: 'linear-gradient(to bottom, #d60000 0%, #ff0033 40%, #ffffff 50%, #ff0033 60%, #d60000 100%)',
                backgroundSize: '100% 200%',
                boxShadow: '0 0 20px 4px rgba(255, 0, 50, 0.6), 0 0 40px 8px rgba(255, 0, 50, 0.2)' // Double layered neon glow
            }}
            whileHover={{
                backgroundPosition: ['0% 0%', '0% 200%'], // Flowing plasma effect
                transition: { duration: 1.5, ease: "linear", repeat: Infinity }
            }}
        />
        
        {/* C. The Hyper-Speed Shooting Star (Overlay) */}
        <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[6px] h-[30%] bg-gradient-to-b from-transparent via-white to-transparent mix-blend-overlay"
            initial={{ top: "-100%", opacity: 0 }}
            whileHover={{ 
                top: "120%", 
                opacity: [0, 1, 1, 0], 
                transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.1 } 
            }}
        >
             {/* The "God Particle" Spark */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-white rounded-full blur-[1px] shadow-[0_0_20px_5px_white]" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative pl-8 md:pl-16 py-4 transition-colors duration-500">
        
        {/* Top Row: Cinematic Title */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 gap-4">
          <CinematicText 
            text={experience.role} 
            subtitle={experience.company} 
            className="group-hover:translate-x-2 transition-transform duration-700"
          />
          
          <div className="font-mono text-xs md:text-sm text-white/40 bg-zinc-900/50 border border-white/10 px-4 py-2 rounded shadow-2xl backdrop-blur-md">
            {experience.period}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary/80 dark:text-gray-400/90 leading-relaxed max-w-4xl text-lg whitespace-pre-line mb-4 font-light tracking-wide group-hover:text-white transition-colors duration-500">
          {experience.description}
        </p>

        {/* Tech Stack - Modern Chips */}
        <div className="flex flex-wrap gap-3">
           {(experience.tags || []).map((tag: string, i: number) => (
             <span key={i} className="text-xs font-mono text-white/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-sm hover:bg-[#FF0033]/20 hover:text-white hover:border-[#FF0033]/50 transition-all duration-300 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
               {tag}
             </span>
           ))}
        </div>
        
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-8 right-0 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
    </motion.div>
  );
}
