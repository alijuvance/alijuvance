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
              Ali Juvance
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
              Étudiant en Licence Pro à l&apos;ENI, je fusionne <span className="text-accent">Web Moderne</span> et <span className="text-accent">Blockchain</span>.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-secondary dark:text-gray-400 leading-relaxed text-lg">
                  Passionné par l&apos;écosystème JavaScript (Next.js, NestJS) et les nouvelles technologies décentralisées (Web3). Je construis des solutions qui résolvent de vrais problèmes métier.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-secondary dark:text-gray-400 leading-relaxed text-lg">
                  Curieux et rigoureux, je maîtrise le cycle complet de développement, de la conception UML/Merise au déploiement. En dehors du code, je me ressource via la danse latine et les échecs.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
