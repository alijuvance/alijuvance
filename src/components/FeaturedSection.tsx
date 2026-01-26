'use client';

import { motion } from 'framer-motion';

/**
 * Featured Section
 * A large, editorial style section focusing on the developer's core philosophy.
 * Acts as a bridge between Hero and Experience.
 */

export function FeaturedSection() {
  return (
    <section className="section-padding py-32 border-b border-gray-100 dark:border-white/5">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Label */}
          <div className="md:col-span-3">
            <span className="inline-block px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 text-xs font-mono text-secondary uppercase tracking-widest">
              À Propos
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold leading-tight mb-8 font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Je conçois des architectures numériques qui allient <span className="text-accent">performance brute</span> et expérience utilisateur fluide.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-secondary dark:text-gray-400 leading-relaxed text-lg">
                  Mon approche est simple : chaque ligne de code doit avoir une raison d'être. Je privilégie la maintenabilité et la scalabilité sur la complexité inutile.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-secondary dark:text-gray-400 leading-relaxed text-lg">
                  Spécialisé dans les écosystèmes React et Node.js, j'accompagne les startups et entreprises dans la construction de leurs produits, de l'idée au déploiement.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
