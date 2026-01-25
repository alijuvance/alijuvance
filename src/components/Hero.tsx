'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero Section Component - Ultra Minimalist
 * Static, strong typography, excessive whitespace.
 */

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-20"
      aria-label="Introduction"
    >
      <div className="container-section">
        <motion.div
          className="max-w-4xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Greeting - subtle */}
          <p className="text-secondary dark:text-secondary-dark mb-6 tracking-wide text-sm uppercase">
            Senior Fullstack Developer
          </p>

          {/* Name/Title - Impactful but clean */}
          <h1 className="text-6xl md:text-8xl font-bold text-primary dark:text-primary-dark mb-8 tracking-tight leading-none">
            Ali<span className="text-accent dark:text-accent-dark">.</span>
          </h1>

          {/* Description - Readable measure */}
          <p className="text-xl md:text-2xl text-secondary dark:text-secondary-dark max-w-2xl leading-relaxed font-light">
            Architecting digital solutions with precision and clarity.
            Passionate about clean code, performance, and user experience.
          </p>

          {/* Minimalist Actions */}
          <div className="flex flex-wrap gap-8 mt-12">
            <a 
              href="#projects" 
              className="text-primary dark:text-primary-dark border-b border-primary dark:border-primary-dark pb-1 hover:text-accent dark:hover:text-accent-dark hover:border-accent dark:hover:border-accent-dark transition-all"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="text-secondary dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

