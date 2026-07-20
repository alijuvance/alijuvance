'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * About Section Component - Parth Sharma Style
 * Clean, centered layout with personal description
 */

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { value: '10+', label: 'Années d\'Expérience' },
    { value: '50+', label: 'Projets Livrés' },
    { value: '30+', label: 'Clients Satisfaits' },
    { value: '15+', label: 'Technologies' },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="about-title"
    >
      <div className="container-section">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">
              À Propos
            </h2>
            <div className="w-20 h-1 bg-accent dark:bg-accent-dark mx-auto rounded-full" />
          </div>

          {/* About Text */}
          <div className="prose prose-lg dark:prose-invert mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-secondary dark:text-secondary-dark leading-relaxed">
              Développeur passionné avec plus de 10 ans d&apos;expérience dans la création 
              d&apos;applications web et mobiles. Je suis spécialisé dans les technologies 
              modernes comme <span className="text-accent dark:text-accent-dark font-medium">React</span>,{' '}
              <span className="text-accent dark:text-accent-dark font-medium">Node.js</span>,{' '}
              et <span className="text-accent dark:text-accent-dark font-medium">TypeScript</span>.
            </p>
            <p className="text-lg md:text-xl text-secondary dark:text-secondary-dark leading-relaxed">
              Mon approche combine expertise technique et vision business pour créer 
              des solutions qui génèrent un réel impact. J&apos;aime relever des défis 
              complexes et transformer des idées en produits performants.
            </p>
          </div>

          {/* Stats Grid - Minimalist Text Only */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-secondary dark:text-secondary-dark">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
