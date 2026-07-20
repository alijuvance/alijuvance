'use client';

import dynamic from 'next/dynamic';
import { FloatingNav } from '@/components/FloatingNav';
import { HeroSplit } from '@/components/HeroSplit';
import { BrandStrip } from '@/components/BrandStrip';

const ServicesGrid = dynamic(() => import('@/components/ServicesGrid').then(m => ({ default: m.ServicesGrid })), { ssr: true });
const ProcessSteps = dynamic(() => import('@/components/ProcessSteps').then(m => ({ default: m.ProcessSteps })), { ssr: true });
const AnimatedTimelineSection = dynamic(() => import('@/components/AnimatedTimeline').then(m => ({ default: m.AnimatedTimelineSection })), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(m => ({ default: m.ProjectsSection })), { ssr: true });
const SkillsSection = dynamic(() => import('@/components/SkillsSection').then(m => ({ default: m.SkillsSection })), { ssr: true });
const EducationRecognition = dynamic(() => import('@/components/EducationRecognition').then(m => ({ default: m.EducationRecognition })), { ssr: true });
const ContactVision = dynamic(() => import('@/components/ContactVision').then(m => ({ default: m.ContactVision })), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer').then(m => ({ default: m.Footer })), { ssr: true });

/**
 * Home Page - Final 'Senior' Structure
 * 1. Hero (Bento)
 * 2. Featured (Editorial)
 * 3. Experience (Stacked)
 * 4. Projects (Grid)
 * 5. Skills
 * 6. Education & Recognition (New)
 * 7. Contact Vision (New)
 * 8. Footer (New)
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-primary dark:bg-black dark:text-white font-sans pb-0 transition-colors" role="document">
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className="pt-32 pb-32 space-y-32">
        
        {/* 1. HERO SECTION (Constrained) */}
        <header className="px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="hero-title">
          <HeroSplit />
        </header>
        
        {/* 2. BRAND STRIP (Full Width) */}
        <section aria-label="Marques">
          <BrandStrip />
        </section>

        {/* 3. SERVICES GRID (Full Width) */}
        <section aria-label="Services">
          <ServicesGrid />
        </section>

        {/* 4. PROCESS STEPS (Full Width - New) */}
        <section aria-label="Processus">
          <ProcessSteps />
        </section>

        {/* Main Constrained Content */}
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-32">

          {/* 3. EXPERIENCE SECTION */}
          <section id="experience" aria-label="Expérience">
            <AnimatedTimelineSection />
          </section>

          {/* 4. PROJECTS SECTION */}
          <section id="projects" aria-label="Projets">
            <ProjectsSection />
          </section>

          {/* 5. SKILLS SECTION */}
          <section id="skills" aria-label="Compétences">
            <SkillsSection />
          </section>

          {/* 6. EDUCATION & RECOGNITION */}
          <section id="education" aria-label="Éducation et Reconnaissances">
            <EducationRecognition />
          </section>

          {/* 7. CONTACT VISION */}
          <ContactVision />

        </div>
      </main>

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}
