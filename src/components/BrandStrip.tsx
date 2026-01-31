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
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0743a4.4992 4.4992 0 0 1 7.3757-3.453l-.142.0805L8.704 5.4596a.7948.7948 0 0 0-.3927.6813zm1.0916-2.3243l3.4827 2.0057 3.4732-2.0057-3.4732-2.0104z"/>
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
