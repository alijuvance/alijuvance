'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SkillMeter, technicalSkills, softSkills } from './SkillMeter';
import { Terminal } from './Terminal';
import { TechGlobe } from './TechGlobe';

/**
 * Skills Section Component
 * Displays animated skill meters and a terminal code snippet
 */

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  const codeSnippet = `// Mon approche du développement
const developer = {
  name: "Senior Fullstack Developer",
  experience: "10+ years",
  
  principles: [
    "Clean Code",
    "SOLID",
    "DRY",
    "KISS"
  ],
  
  solve: (problem) => {
    const solution = analyze(problem)
      .then(design)
      .then(implement)
      .then(test)
      .then(deploy);
    
    return solution;
  }
};`;

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
          viewport={{ once: true }}
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
          {/* Left: Tech Globe */}
          <div className="flex justify-center items-center relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-[100px] rounded-full opacity-50" />
            <TechGlobe />
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Terminal title="developer.ts" language="typescript">
              {codeSnippet}
            </Terminal>

            {/* Additional info */}
            <div className="mt-6 p-4 rounded-xl bg-surface dark:bg-surface-dark border border-gray-100 dark:border-white/5">
              <p className="text-sm text-secondary dark:text-secondary-dark">
                💡 <span className="font-medium text-primary dark:text-primary-dark">Product-Minded Engineer</span> - 
                Je ne code pas juste des fonctionnalités, je résous des problèmes business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
