'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { 
  siReact, siNextdotjs, siTypescript, siTailwindcss, 
  siPostgresql, siDocker, siGraphql, siFigma,
  siNestjs, siSpringboot, siEthereum, siStreamlit, siHeroku
} from 'simple-icons';

/**
 * TechBeam Component
 * A "Neural Network" style visualization where skills feed into a central core.
 * Replaces the TechGlobe with a more structured, "Gyanaguru 2.0" aesthetic.
 */

// Icon mapping with specific colors for the "Beam" effect
const skills = [
  { name: 'React', icon: siReact, color: '#61DAFB', y: 0 },
  { name: 'Next.js', icon: siNextdotjs, color: '#FFFFFF', y: 1 },
  { name: 'TypeScript', icon: siTypescript, color: '#3178C6', y: 2 },
  { name: 'NestJS', icon: siNestjs, color: '#E0234E', y: 3 },
  { name: 'Spring Boot', icon: siSpringboot, color: '#6DB33F', y: 4 },
  { name: 'Tailwind', icon: siTailwindcss, color: '#06B6D4', y: 5 },
  { name: 'Ethereum', icon: siEthereum, color: '#627EEA', y: 6 },
  { name: 'Streamlit', icon: siStreamlit, color: '#FF4B4B', y: 7 }, // Added Streamlit
  { name: 'PostgreSQL', icon: siPostgresql, color: '#4169E1', y: 8 },
  { name: 'Docker', icon: siDocker, color: '#2496ED', y: 9 },
  { name: 'Heroku', icon: siHeroku, color: '#430098', y: 10 }, // Added Heroku
  { name: 'GraphQL', icon: siGraphql, color: '#E10098', y: 11 },
];

export function TechBeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Container Dimensions (Fixed reasoning for precise SVG paths)
  // We assume a responsive container, but the SVG viewBox will coordinate content.
  const containerWidth = 600;
  const containerHeight = 600; // Increased height to accommodate more skills
  const centerX = 500;
  const centerY = containerHeight / 2;
  
  // Left side spacing
  const startX = 60;
  const spacingY = 50; // Slightly reduced spacing
  const totalHeight = (skills.length - 1) * spacingY;
  const startY = (containerHeight - totalHeight) / 2;

  return (
    <div className="relative w-full max-w-3xl mx-auto min-h-[600px] flex items-center justify-center select-none pb-20 md:pb-0">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl pointer-events-none" />

      {/* --- DESKTOP VIEW (SVG Beam) --- */}
      <div className="hidden md:flex relative w-full h-[600px] items-center justify-center">
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${containerWidth} ${containerHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connection Beams */}
          {skills.map((skill, index) => {
            if (!skill.icon) return null; // Safety check for missing icons

            const itemY = startY + index * spacingY;
            const sx = startX + 40;
            const sy = itemY + 20;
            const ex = centerX - 50;
            const ey = centerY;

            const controlPoint1X = sx + 150;
            const controlPoint1Y = sy;
            const controlPoint2X = ex - 150;
            const controlPoint2Y = ey;

            const path = `M ${sx} ${sy} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${ex} ${ey}`;

            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <g key={skill.name}>
                <path 
                  d={path} 
                  className={`transition-all duration-500 ease-out`}
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeOpacity={isHovered ? 0.8 : (isAnyHovered ? 0.05 : 0.1)}
                />
                <motion.path
                  d={path}
                  fill="none"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: isHovered ? 1 : 0.3,
                    strokeDashoffset: [0, -100]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.1
                  }}
                />
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={skill.color} stopOpacity="0" />
                    <stop offset="50%" stopColor={skill.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={skill.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </g>
            );
          })}
        </svg>

        {/* Desktop Icons Column */}
        <div className="absolute left-0 top-0 w-20 flex flex-col items-center gap-[15px]" style={{ top: `${startY}px`, gap: '15px' }}> 
          {skills.map((skill, index) => {
            if (!skill.icon) return null;
            
            return (
            <motion.div
              key={skill.name}
              className="relative group cursor-pointer"
              style={{ position: 'absolute', top: index * 55, left: 10 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.1, x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.05 }}
            >
              <div 
                className="w-12 h-12 rounded-xl bg-[#0f0f10] border border-white/10 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                style={{ borderColor: hoveredIndex === index ? skill.color : '' }}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-all duration-300 grayscale group-hover:grayscale-0"
                  fill={hoveredIndex === index ? skill.color : 'currentColor'}
                  style={{ color: hoveredIndex === index ? skill.color : '#a1a1aa' }}
                >
                   <path d={skill.icon.path} />
                </svg>
              </div>
              <span className="absolute left-14 top-1/2 -translate-y-1/2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded-md border border-white/10 pointer-events-none shadow-xl z-20">
                {skill.name}
              </span>
            </motion.div>
            );
          })}
        </div>

        {/* Desktop Center Node */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4"
          style={{ right: '40px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
        >
           <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
             <div className="relative p-6 rounded-2xl bg-[#0f0f10] border border-white/10 shadow-2xl flex flex-col items-start gap-1">
                <span className="text-xs font-mono text-blue-400 mb-1">core.system</span>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                   {t('tech.title')}
                </h3>
                <div className="flex gap-2 mt-2">
                   <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">FULLSTACK</span>
                   <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">ARCHITECT</span>
                </div>
             </div>
           </div>
        </motion.div>
      </div>

      {/* --- MOBILE VIEW (High-End "Tech Wheel") --- */}
      <div className="md:hidden w-full h-[500px] flex flex-col items-center justify-center relative overflow-hidden perspective-[1000px]">
        
        {/* Title / Core System */}
        <div className="absolute top-10 z-20 text-center pointer-events-none">
           <span className="text-xs font-mono text-blue-400 mb-1 tracking-widest uppercase">{t('tech.select')}</span>
           <h3 className="text-2xl font-bold text-white drop-shadow-md">{t('tech.title')}</h3>
        </div>

        {/* The Wheel */}
        <TechWheel skills={skills} />
        
        {/* Swipe Indicator */}
        <div className="absolute bottom-10 flex items-center gap-2 text-white/30 text-xs font-mono animate-pulse pointer-events-none">
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
           <span>{t('tech.swipe')}</span>
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>

      </div>

    </div>
  );
}

// Sub-component for the Mobile Wheel Logic ("Planets around Sun" / Arch Style)
function TechWheel({ skills }: { skills: any[] }) {
  const [rotation, setRotation] = useState(0);
  
  // Configuration
  const radius = 260; // Large radius for the "Arch" effect
  const angleStep = 30; // Degrees between items
  
  const handleDrag = (_: any, info: any) => {
    // 1px drag = 0.4 deg rotation
    const rotateDelta = info.delta.x * 0.4;
    setRotation(prev => prev + rotateDelta);
  };

  return (
    <div className="relative w-full h-[500px] flex justify-center overflow-hidden bg-[#030303]">
      
      {/* 1. THE DRAG CONTROLLER (Invisible Layer on Top) */}
      {/* This ensures the user drags the 'screen' but the elements only ROTATE, never slide. */}
      <motion.div 
         className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
         drag="x"
         dragConstraints={{ left: 0, right: 0 }} // Lock movement, only detect delta
         dragElastic={0}
         dragMomentum={false}
         onDrag={handleDrag}
         style={{ touchAction: "none" }} 
      />

      {/* 2. THE SUN (Pivot Point) */}
      {/* Positioned at bottom center, acting as the axis anchor */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center justify-center">
         {/* Glows */}
         <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-t from-orange-600 via-red-600 to-transparent blur-[80px] opacity-60" />
         {/* Core Orb */}
         <div className="relative w-[140px] h-[140px] rounded-full bg-[#0a0000] border border-red-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.4)]">
             <div className="absolute inset-2 rounded-full border border-red-500/20 w-full h-full animate-pulse" />
             <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest pt-4">CORE</span>
         </div>
      </div>

      {/* 3. THE PLANETARY SYSTEM (Rotating Layer) */}
      {/* Pivot is correctly set to the center of the Sun */}
      <div className="absolute bottom-[-30px] left-1/2 w-0 h-0 z-20 pointer-events-none">
         <motion.div
           className="relative flex items-center justify-center"
           animate={{ rotate: rotation }}
           transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1 }}
           style={{ 
             width: 0, 
             height: 0,
             // The pivot is the div center (0,0), which corresponds to the "Sun" center
           }} 
         >
            {skills.map((skill, index) => {
              if (!skill.icon) return null; // Safety check for missing icons
              const angle = index * angleStep; 
              
              return (
                <div
                  key={skill.name}
                  className="absolute"
                  style={{
                    // Position items on the orbit radius
                    // Rotate to angle -> Translate Out
                    transform: `rotate(${angle}deg) translate(0, -${radius}px)`,
                  }}
                >
                  {/* Planet / Card */}
                  {/* Counter-rotate card if we wanted them upright, but tangental is requested/sketched */}
                  <div 
                    className="flex flex-col items-center justify-center gap-2 p-3 w-24 h-32 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 shadow-xl"
                    style={{
                      boxShadow: `0 0 20px -5px ${skill.color}30`,
                      border: `1px solid ${skill.color}40`,
                    }}
                  >
                     <svg
                        className="w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        style={{ color: skill.color }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                         <path d={skill.icon.path} />
                      </svg>
                      
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider" style={{ color: skill.color }}>
                        {skill.name}
                      </span>
                  </div>
                </div>
              );
            })}
         </motion.div>
      </div>

      {/* 4. Ground Overlay (Atmosphere) */}
      <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-30" />
      
    </div>
  );
}
