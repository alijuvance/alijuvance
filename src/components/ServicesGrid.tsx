'use client';

import { motion } from 'framer-motion';
import { Spotlight } from './Spotlight';

const services = [
  {
    title: 'Brand Identity',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Website Design',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'UI & UX Design',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: 'Video Marketing',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">
             Our Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            What We Do.
          </h2>
          <p className="mt-4 text-secondary dark:text-gray-400 max-w-2xl mx-auto">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {services.map((service, index) => (
             <Spotlight key={index} className="group relative h-full bg-surface dark:bg-zinc-900/50 border border-gray-100 dark:border-white/5 rounded-2xl p-8 hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-white/5 text-primary dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-primary dark:text-white mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-secondary dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                </div>
             </Spotlight>
           ))}
        </div>
      </div>
    </section>
  );
}
