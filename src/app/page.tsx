import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

/**
 * Home Page - One-Page Portfolio
 * 
 * Architecture:
 * - Server Component (default) for optimal performance
 * - Client components only where interactivity is needed (Header, ContactForm)
 * - Semantic HTML5 structure for accessibility and SEO
 * - Smooth scroll navigation between sections
 * 
 * Sections:
 * 1. Hero - Above the fold, first impression
 * 2. Expertise - Core competencies and philosophy
 * 3. Projects - Case studies with business impact
 * 4. Experience - Career timeline
 * 5. Testimonials - Social proof
 * 6. Footer - Contact form and social links
 */

export default function HomePage() {
  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - First Impression */}
        <Hero />

        {/* Expertise & Philosophy */}
        <ExpertiseSection />

        {/* Case Studies - The Core */}
        <ProjectsSection />

        {/* Career Timeline */}
        <TimelineSection />

        {/* Social Proof */}
        <TestimonialsSection />
      </main>

      {/* Footer with Contact */}
      <Footer />
    </>
  );
}
