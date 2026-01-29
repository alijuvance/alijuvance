'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    number: '1',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and technical requirements to build a solid foundation.',
  },
  {
    id: '02',
    number: '2',
    title: 'Strategy',
    description: 'We craft a comprehensive roadmap and technical architecture that ensures scalability, performance, and security.',
  },
  {
    id: '03',
    number: '3',
    title: 'Development',
    description: 'We bring designs to life with clean, efficient code, using cutting-edge technologies and best practices.',
  },
];

export function ProcessSteps() {
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Our Methodology</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white tracking-tight"
          >
            How It Works
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative p-8 lg:p-10 rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:border-red-500/20 transition-colors duration-500 h-full">
                
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[180px] font-bold font-title text-white/[0.03] group-hover:text-red-500/[0.05] transition-colors duration-500 select-none leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="text-sm font-mono text-red-500 tracking-widest uppercase">Step-{step.id}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
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
