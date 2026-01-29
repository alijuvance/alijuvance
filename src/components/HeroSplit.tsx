'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { ButtonBorderBeam } from './ButtonBorderBeam';
import profileImage from './image/image.jpeg'; // Importing correctly from the subfolder

export function HeroSplit() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="container-section grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Image Portrait with Fade - Seamless Blend */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-[370px] mx-auto lg:ml-auto lg:mr-0"
        >
            {/* Red glow removed as requested */}
            
            <div className="relative w-full h-full overflow-hidden z-10">
                {/* Minimal Blending - Only Bottom Fade for Clean Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
                
                <Image
                  src={profileImage}
                  alt="Ali Juvance"
                  fill
                  className="object-cover object-top transition-all duration-700 ease-in-out"
                  priority
                  quality={100}
                  unoptimized
                />
                
                {/* Overlay Text/Signature */}
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black to-transparent">
                    <p className="text-white/60 text-xs font-mono tracking-widest uppercase mb-1">Based in Madagascar</p>
                    <div className="w-12 h-0.5 bg-accent" />
                </div>
            </div>
        </motion.div>

        {/* Right: Typography & Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left relative z-20"
        >
          {/* Subtle Red Ambient Glow behind text */}
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

          <h2 className="text-sm font-mono font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            About Personal
          </h2>
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-title font-bold text-white leading-[1.1] tracking-tight">
              Hello, I&apos;m Ali <br />
              <span className="text-red-600 dark:text-red-500">
                Juvance
              </span>
            </h1>
            
            {/* The Line */}
            <div className="w-24 h-1.5 bg-red-600 mt-6 mb-8 rounded-full" />
          </div>

          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            A Senior Fullstack Developer transforming complex challenges into elegant, high-performance digital systems. Focused on scalability, clean code, and premium user experiences.
          </p>
          
          {/* Signature */}
          <div className="mb-10">
            <p className="font-serif italic text-3xl text-gray-300 opacity-80" style={{ fontFamily: 'Times New Roman, serif' }}>
                Ali Juvance
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start">
             <ButtonBorderBeam>
                <span className="flex items-center gap-2">
                    Download CV
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </span>
             </ButtonBorderBeam>
             
             {/* Social Links Minimal - Icons */}
             <div className="flex items-center gap-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
