'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Brand Identity',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Website Design',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'UI & UX Design',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Video Marketing',
    description: 'We bring the right people together to challenge established thinking and drive transformation.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background with Red Atmosphere - Requested by user */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-red-950/30 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container-section relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-mono tracking-[0.3em] text-red-500 uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            What We Do.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors duration-500"
            >
              <div className="mb-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect - Corner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
