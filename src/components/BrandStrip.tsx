'use client';

import { motion } from 'framer-motion';

const brands = [
  { 
    name: 'TALK & ACTION', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    )
  },
  { 
    name: 'RUBY', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l-9.87 6.42L12 22l9.87-13.58L12 2z"/>
      </svg>
    ) 
  },
  { 
    name: 'Sky Cloud', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ) 
  },
  { 
    name: 'WALK AWAY', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>
      </svg>
    ) 
  },
  { 
    name: 'deepPay', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
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
              viewport={{ once: true }}
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
