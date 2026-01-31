'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export function ProcessSteps() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t('process.s1.title'),
      description: t('process.s1.desc'),
    },
    {
      id: 2,
      title: t('process.s2.title'),
      description: t('process.s2.desc'),
    },
    {
      id: 3,
      title: t('process.s3.title'),
      description: t('process.s3.desc'),
    },
    {
      id: 4,
      title: t('process.s4.title'),
      description: t('process.s4.desc'),
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background Atmosphere - Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-red-800/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-section relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-sm font-mono font-bold tracking-[0.3em] text-red-600 uppercase">
              {t('process.pre')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white tracking-tight"
          >
            {t('process.title')}
          </motion.h2>
          <p className="mt-4 text-secondary/60 max-w-2xl mx-auto text-lg">
             {t('process.desc')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:border-red-500/20 transition-colors duration-500 h-full flex flex-col justify-between">
                
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[120px] font-bold font-title text-white/[0.03] group-hover:text-red-500/[0.05] transition-colors duration-500 select-none leading-none">
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <span className="text-sm font-mono text-red-500 tracking-widest uppercase">Step-0{step.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
