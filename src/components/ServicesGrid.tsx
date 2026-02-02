'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.brand'),
      description: t('services.brand.desc'),
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      ),
    },
    {
      title: t('services.web'),
      description: t('services.web.desc'),
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: t('services.ui'),
      description: t('services.ui.desc'),
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      title: t('services.video'),
      description: t('services.video.desc'),
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

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
            {t('services.pre')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            {t('services.title')}
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
