'use client';

import { FloatingNav } from '@/components/FloatingNav';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { AnimatedTimelineSection } from '@/components/AnimatedTimeline';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AboutSection } from '@/components/AboutSection';
import { motion } from 'framer-motion';

/**
 * Home Page - Long Scroll Modern Structure
 * Combines Bento Grid Hero with detailed sections below.
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white font-sans pb-20">
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* HERO SECTION (Bento Grid) */}
        <section id="home">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[60vh] min-h-[500px]">
            
            {/* Main Hero Card */}
            <BentoCard colSpan={2} className="relative flex flex-col justify-between overflow-hidden min-h-[400px]">
              {/* Background Glow */}
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative bg-surface-hover flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary uppercase tracking-wider">
                    Disponible pour un partenariat
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl tracking-tight">
                  Je transforme des défis complexes en <span className="text-white/60">systèmes élégants.</span>
                </h1>
              </div>
            </BentoCard>

            {/* Tech Stack Card */}
            <BentoCard colSpan={1} className="flex flex-col justify-between min-h-[300px]">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Stack Technique Modernisée
              </h2>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {['Next.js 14', 'React Server Components', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-secondary hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Second Row Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <BentoCard colSpan={1} className="min-h-[300px] relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-2">Collaboration Mondiale</h2>
                <p className="text-sm text-secondary">Adaptabilité totale aux fuseaux horaires (UTC-8 à UTC+3).</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-black border border-white/10 text-xs text-secondary">PARIS</span>
                  <span className="px-2 py-1 rounded bg-accent/20 border border-accent/20 text-xs text-accent">UTC+1</span>
                </div>
              </div>
              <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-t from-accent to-transparent opacity-20 blur-md animate-pulse" />
            </BentoCard>

            <BentoCard colSpan={1} className="flex flex-col items-center justify-center text-center min-h-[300px]">
              <h2 className="text-2xl font-bold mb-2">Un Projet ?</h2>
              <p className="text-secondary mb-8 text-sm">Discutons de votre vision.</p>
              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full justify-center"
                onClick={() => window.location.href = 'mailto:contact@example.com'}
              >
                Me Contacter
              </button>
            </BentoCard>

            <BentoCard colSpan={1} className="relative group overflow-hidden bg-black min-h-[300px]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-4">Architecture Système</h3>
                <p className="text-sm text-secondary mb-4">Conception de solutions scalables et robustes.</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-3/4" />
                </div>
              </div>
            </BentoCard>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <AnimatedTimelineSection />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* ABOUT / FOOTER */}
        <section id="about" className="border-t border-white/10 pt-20">
          <AboutSection />
        </section>

      </main>
    </div>
  );
}
