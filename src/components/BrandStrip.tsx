'use client';

import { motion } from 'framer-motion';

const brands = [
  { 
    name: 'Design', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.33333 0C6.49146 0 5 1.49147 5 3.33333C5 5.1752 6.49146 6.66667 8.33333 6.66667H11.6667V3.33333C11.6667 1.49147 10.1752 0 8.33333 0ZM5 10C5 8.15814 6.49146 6.66667 8.33333 6.66667H11.6667V13.3333H8.33333C6.49146 13.3333 5 11.8419 5 10ZM11.6667 13.3333V16.6667C11.6667 18.5085 10.1752 20 8.33333 20C6.49146 20 5 18.5085 5 16.6667C5 14.8248 6.49146 13.3333 8.33333 13.3333H11.6667ZM15.6667 0C17.5085 0 19 1.49147 19 3.33333C19 5.1752 17.5085 6.66667 15.6667 6.66667H11.6667V0H15.6667ZM15.6667 6.66667C17.5085 6.66667 19 8.15814 19 10C19 11.8419 17.5085 13.3333 15.6667 13.3333H11.6667V6.66667H15.6667Z"/>
      </svg>
    )
  },
  { 
    name: 'Fullstack', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.465-.745 4.758-2.022 6.665l-1.313-1.313zM12 22c4.896 0 8.966-3.496 9.873-8.136l-8.775-8.775-6.664 16.66c1.673.161 3.397.251 5.166.251h.4zM2 12c0 4.896 3.496 8.966 8.136 9.873L8.644 6.664 2 12zm0-10l6.664 16.66L18.136 5.864 12 2C7.104 2 3.034 5.496 2.127 10.136L8.775 18.91l8.775 8.775C16.911 22 12 22 12 22 6.477 22 2 17.523 2 12z" />
      </svg>
    ) 
  },
  { 
    name: 'Cloud Platform', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ) 
  },
  { 
    name: 'AI', 
    icon: (
      <svg 
        className="w-8 h-8" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M16 8V5a2 2 0 0 1 2-2" />
        <circle cx="16" cy="13" r=".5" />
        <circle cx="18" cy="3" r=".5" />
        <circle cx="20" cy="21" r=".5" />
        <circle cx="20" cy="8" r=".5" />
      </svg>
    ) 
  },
  { 
    name: 'Blockchain', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
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
