

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AquaFiProjectCard } from './AquaFiProjectCard';
import { useLanguage } from './LanguageContext';
// import { projects as staticProjects } from '@/data/projects'; // We'll assume the structure but use translations

// Define ID type to match what we have in translation keys
type ProjectId = 'diploma-auth' | 'hr-management' | 'stock-management';

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  // Reconstruct projects using translations
  // Images/Layout data we might need, but text is dynamic.
  // We'll mimic the Project interface structure expected by AquaFiProjectCard
  const projects: any[] = [
    {
      id: 'diploma-auth',
      title: t('proj.diploma.title'),
      role: t('proj.diploma.role'),
      challenge: t('proj.diploma.challenge'),
      solution: t('proj.diploma.solution'),
      metrics: [t('proj.diploma.m1'), t('proj.diploma.m2'), t('proj.diploma.m3')],
      stack: ['Next.js', 'NestJS', 'Solidity', 'Ethereum', 'Web3.js', 'PostgreSQL'],
      category: 'Blockchain',
    },
    {
      id: 'hr-management',
      title: t('proj.hr.title'),
      role: t('proj.hr.role'),
      challenge: t('proj.hr.challenge'),
      solution: t('proj.hr.solution'),
      metrics: [t('proj.hr.m1'), t('proj.hr.m2'), t('proj.hr.m3')],
      stack: ['React.js', 'NestJS', 'MySQL', 'TailwindCSS', 'TypeScript'],
      category: 'Fullstack',
    },
    {
      id: 'stock-management',
      title: t('proj.stock.title'),
      role: t('proj.stock.role'),
      challenge: t('proj.stock.challenge'),
      solution: t('proj.stock.solution'),
      metrics: [t('proj.stock.m1'), t('proj.stock.m2'), t('proj.stock.m3')],
      stack: ['C++', 'Qt', 'SQL'],
      category: 'Backend',
    },
  ];

  // Circular navigation helpers
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get visible projects (Previous, Current, Next)
  // We need safe wrapping indices
  const getProject = (offset: number) => {
    const index = (activeIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#030303]" aria-labelledby="projects-title">
      
      {/* Background Atmosphere (Stars & Glows) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Red Glow Top Center */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-900/20 blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Full Width Dot Pattern (Modern Grid) */}
         <div 
           className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
           }}
         ></div>
      </div>

      <div className="container-section relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
           <h2 id="projects-title" className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
             {t('projects.header')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">{t('projects.header.highlight')}</span>
           </h2>
           <p className="text-gray-400 text-lg">
             {t('projects.desc')}
           </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
           
           {/* Previous Card (Left, Tilted) - Hidden on Mobile for Focus */}
           <motion.div 
             className="absolute left-[5%] md:left-[15%] opacity-40 hover:opacity-60 transition-opacity z-0 hidden md:block"
             animate={{ 
               scale: 0.8, 
               rotateY: 25, 
               x: -50,
               filter: 'blur(2px)'
             }}
             transition={{ duration: 0.5 }}
           >
              <AquaFiProjectCard 
                project={getProject(-1)} 
                isActive={false} 
                onClick={prevProject} 
              />
           </motion.div>

           {/* Active Card (Center, Forward) - Swipe Enabled */}
           <motion.div 
             className="relative z-20 touch-pan-y"
             key={activeIndex}
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1, rotateY: 0, x: 0 }}
             transition={{ type: "spring", stiffness: 200, damping: 20 }}
             drag="x"
             dragConstraints={{ left: 0, right: 0 }}
             dragElastic={0.2}
             onDragEnd={(e, { offset, velocity }) => {
               const swipe = offset.x; // detected swipe distance
               
               if (swipe < -100) {
                 nextProject();
               } else if (swipe > 100) {
                 prevProject();
               }
             }}
           >
              <AquaFiProjectCard 
                project={getProject(0)} 
                isActive={true} 
                onClick={() => {}} 
              />
           </motion.div>

           {/* Next Card (Right, Tilted) - Hidden on Mobile */}
           <motion.div 
             className="absolute right-[5%] md:right-[15%] opacity-40 hover:opacity-60 transition-opacity z-0 hidden md:block"
             animate={{ 
               scale: 0.8, 
               rotateY: -25, 
               x: 50,
               filter: 'blur(2px)'
             }}
             transition={{ duration: 0.5 }}
           >
              <AquaFiProjectCard 
                project={getProject(1)} 
                isActive={false} 
                onClick={nextProject} 
              />
           </motion.div>
           
           {/* Mobile Navigation Indicators (Dots) */}
           <div className="absolute bottom-10 flex md:hidden gap-2">
              {projects.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-red-500 w-6' : 'bg-white/20'}`}
                />
              ))}
           </div>

           {/* Navigation Arrows (Desktop) */}
           <button 
             onClick={prevProject} 
             className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-colors z-30"
           >
             ←
           </button>
           <button 
             onClick={nextProject}
             className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-colors z-30"
           >
             →
           </button>

        </div>

        {/* Bottom Stats / Indicators */}
        <div className="mt-12 flex items-center gap-8 text-gray-500 font-mono text-xs uppercase tracking-widest">
           <div>
             <span className="text-white block text-xl font-bold mb-1">1.3b</span>
             Market Size
           </div>
           <div className="w-[1px] h-8 bg-white/10" />
           <div>
             <span className="text-white block text-xl font-bold mb-1">321k</span>
             Transfers
           </div>
           <div className="w-[1px] h-8 bg-white/10" />
           <div>
              <span className="text-white block text-xl font-bold mb-1">{activeIndex + 1} / {projects.length}</span>
              Project
           </div>
        </div>

      </div>
    </section>
  );
}
