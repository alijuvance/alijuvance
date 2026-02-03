'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CinematicTextProps {
  text: string;
  className?: string;
  subtitle?: string;
}

export function CinematicText({ text, className, subtitle }: CinematicTextProps) {
  return (
    <div className={cn("relative inline-block py-2", className)}>
      
      {/* 1. Volumetric Light Cone (Warm/Orange) */}
      <div 
        className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-[200%] bg-gradient-to-r from-orange-100/10 via-orange-900/5 to-transparent blur-[30px] opacity-80 pointer-events-none mix-blend-screen" 
        aria-hidden="true"
      />
      
      {/* 2. The Vertical Light Source (The "Stick") */}
      <div 
        className="absolute -left-6 top-1/2 -translate-y-1/2 h-[80%] w-[3px] bg-indigo-50 rounded-full shadow-[0_0_15px_2px_rgba(255,200,150,0.5)] opacity-90"
        aria-hidden="true"
      />

      {/* 3. Floating Dust Particles (Simulated) */}
      <Particle delay={0} top="30%" left="-15px" />
      <Particle delay={1.2} top="60%" left="-5px" />
      <Particle delay={2.5} top="40%" left="5px" />

      {/* 4. Main Text with Dramatic Mask */}
      <motion.h3 
        initial={{ opacity: 0, filter: 'blur(10px)', x: -10 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold tracking-[-0.02em] font-sans relative z-10"
        style={{
          color: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.05) 100%)',
          textShadow: '0 0 30px rgba(255,150,100,0.15)' // Warm glow shadow
        }}
      >
        {text}
      </motion.h3>

      {/* Subtitle emerging from the light */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 text-lg text-orange-200/50 font-medium tracking-widest uppercase pl-1"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function Particle({ delay, top, left }: { delay: number, top: string, left: string }) {
  return (
    <motion.div 
      className="absolute w-1 h-1 bg-white/60 rounded-full blur-[0.5px]"
      style={{ top, left }}
      animate={{ 
        y: [-5, -15, -5], 
        opacity: [0, 0.6, 0],
        scale: [0, 1.2, 0]
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
    />
  )
}
