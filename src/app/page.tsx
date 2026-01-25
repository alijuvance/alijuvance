import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnimatedTimelineSection } from '@/components/AnimatedTimeline';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { ConsoleEasterEgg } from '@/components/ConsoleEasterEgg';

/**
 * Home Page - One-Page Portfolio
 * 
 * Architecture:
 * - Server Component (default) for optimal performance
 * - Client components for animations (Framer Motion)
 * - Semantic HTML5 structure for accessibility and SEO
 * - Smooth scroll navigation between sections
 * 
 * Features:
 * - 3D hover effect on project cards
 * - Scroll-based timeline animation
 * - Animated skill meters with progress bars
 * - Terminal-style code snippets
 * - Sticky navigation with scroll spy
 * - Command Palette (Ctrl+K)
 * - Page transitions
 * - Console Easter Egg
 */

export default function HomePage() {
  return (
    <>
      {/* Console Easter Egg for developers */}
      <ConsoleEasterEgg />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette />

      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      {/* Fixed Navigation Header with Scroll Spy */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - First Impression */}
        <Hero />

        {/* Expertise & Philosophy */}
        <ExpertiseSection />

        {/* Case Studies with 3D Cards */}
        <ProjectsSection />

        {/* Career Timeline with Scroll Animation */}
        <AnimatedTimelineSection />

        {/* Skills with Animated Meters */}
        <SkillsSection />

        {/* Social Proof */}
        <TestimonialsSection />
      </main>

      {/* Footer with Contact */}
      <Footer />
    </>
  );
}
