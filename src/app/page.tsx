import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnimatedTimelineSection } from '@/components/AnimatedTimeline';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { ConsoleEasterEgg } from '@/components/ConsoleEasterEgg';

/**
 * Home Page - Redesigned (Parth Sharma Style)
 * 
 * New Structure:
 * 1. Hero (Typing Effect)
 * 2. About (Stats & Bio)
 * 3. Skills (Visual Meters & Code)
 * 4. Portfolio (Filtered Projects)
 * 5. Experience (Timeline)
 * 6. Contact & Footer
 */

export default function HomePage() {
  return (
    <>
      <ConsoleEasterEgg />
      <CommandPalette />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AnimatedTimelineSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
