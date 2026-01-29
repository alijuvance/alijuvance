'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SkillMeter, technicalSkills, softSkills } from './SkillMeter';
import { MethodologyHub } from './MethodologyHub';
import { TechBeam } from './TechBeam';

/**
 * Skills Section Component
 * Displays animated skill meters and a terminal code snippet
 */

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();



  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="skills-title" className="section-title">
            Compétences Techniques
          </h2>
          <p className="section-subtitle">
            Des bases solides acquises sur plus d&apos;une décennie de développement professionnel.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Tech Beam (New AI Network Implementation) */}
          <div className="flex justify-center items-center relative min-h-[400px]">
             <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 blur-[100px] rounded-full opacity-50" />
             <TechBeam />
          </div>

          {/* Right: Methodology Hub (New "Mind Map" Style) */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <MethodologyHub />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
