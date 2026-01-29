'use client';

import { FloatingNav } from '@/components/FloatingNav';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { AnimatedTimelineSection } from '@/components/AnimatedTimeline';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
// New Components
import { HeroSplit } from '@/components/HeroSplit';
import { BrandStrip } from '@/components/BrandStrip';
import { ServicesGrid } from '@/components/ServicesGrid';
import { EducationRecognition } from '@/components/EducationRecognition';
import { ContactVision } from '@/components/ContactVision';
import { Footer } from '@/components/Footer';

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
    <div className="min-h-screen bg-background text-primary dark:bg-black dark:text-white font-sans pb-0 transition-colors">
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto space-y-32 pb-32">
        
        {/* 1. HERO SECTION (Split Layout) */}
        <HeroSplit />
        
        {/* 2. BRAND STRIP */}
        <BrandStrip />

        {/* 3. SERVICES GRID */}
        <ServicesGrid />

        {/* 3. EXPERIENCE SECTION */}
        <AnimatedTimelineSection />

        {/* 4. PROJECTS SECTION */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* 5. SKILLS SECTION */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* 6. EDUCATION & RECOGNITION */}
        <EducationRecognition />

        {/* 7. CONTACT VISION */}
        <ContactVision />

      </main>

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}
