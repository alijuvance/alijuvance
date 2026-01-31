'use client';

import { motion } from 'framer-motion';

import { siFigma, siNextdotjs, siVercel, siOpenai } from 'simple-icons';

const brands = [
  { 
    name: 'Design', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d={siFigma.path}/>
      </svg>
    )
  },
  { 
    name: 'Fullstack', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d={siNextdotjs.path}/>
      </svg>
    ) 
  },
  { 
    name: 'Cloud Platform', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d={siVercel.path}/>
      </svg>
    ) 
  },
  { 
    name: 'AI', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d={siOpenai.path}/>
      </svg>
    ) 
  },
];

export function BrandStrip() {
  return (
    <div className="w-full relative py-12 overflow-hidden border-y border-white/5 backdrop-blur-md">
      {/* Background with Red Atmosphere - Reference Style */}
      <div className="absolute inset-0 bg-black" /> {/* Deep Base */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/40 to-black z-0" /> {/* Horizontal Fade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent blur-3xl z-0" /> {/* Central Glow */}

      {/* Subtle Top/Bottom lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <div className="container-section relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-16 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 group cursor-default"
            >
              {/* Icon */}
              <div className="text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                {brand.icon}
              </div>
              
              {/* Text */}
              <span className="text-lg font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 uppercase font-mono">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
