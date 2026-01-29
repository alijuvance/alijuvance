'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  siReact, siNextdotjs, siTypescript, siTailwindcss, 
  siPostgresql, siDocker, siGraphql, siFigma,
  siNestjs, siSpringboot, siEthereum
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
  { name: 'PostgreSQL', icon: siPostgresql, color: '#4169E1', y: 7 },
  { name: 'Docker', icon: siDocker, color: '#2496ED', y: 8 },
  { name: 'GraphQL', icon: siGraphql, color: '#E10098', y: 9 },
];

export function TechBeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="relative w-full max-w-3xl mx-auto h-[600px] flex items-center justify-center select-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl pointer-events-none" />

      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${containerWidth} ${containerHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection Beams */}
        {skills.map((skill, index) => {
          const itemY = startY + index * spacingY;
          
          // Bezier Curve Logic
          // Start: Icon Position (plus offset for icon size)
          // End: Center Node Position (minus offset for node size)
          const sx = startX + 40; // Icon is ~40px wide
          const sy = itemY + 20; // Icon center
          const ex = centerX - 50; // Text starts around here
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
              {/* Base Path (Dimmed) */}
              <path 
                d={path} 
                className={`transition-all duration-500 ease-out`}
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeOpacity={isHovered ? 0.8 : (isAnyHovered ? 0.05 : 0.1)}
              />

              {/* Glowing Pulse - Active on animations or hover */}
              <motion.path
                d={path}
                fill="none"
                stroke={`url(#gradient-${index})`}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isHovered ? 1 : 0.3, // Always visible but dim, bright on hover
                  strokeDashoffset: [0, -100] // Flowing effect
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: index * 0.1
                }}
              />
              
              {/* Gradients Definition */}
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

      {/* HTML Layout for Icons and Center Node */}
      {/* We overlay divs on top of the SVG using the same relative positioning logic roughly */}
      <div className="relative w-full h-full max-w-[600px]">
        {/* Left Column: Icons */}
        <div className="absolute left-0 top-0 w-20 flex flex-col items-center gap-[15px]" style={{ top: `${startY}px`, gap: '15px' }}> 
          {/* Note: Gap logic in CSS vs absolute calc above might differ slightly, using absolute top for perfection */}
          {skills.map((skill, index) => (
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
              
              {/* Tooltip Label */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded-md border border-white/10 pointer-events-none shadow-xl z-20">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Center Node */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4"
          style={{ right: '40px' }} // Approx where centerX=500 is in 600px width
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
        >
           {/* Connection Point (The "Socket") - Removed as per request */}
           {/* <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_20px_white]" /> */}
           
           {/* Center Card */}
           <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
             <div className="relative p-6 rounded-2xl bg-[#0f0f10] border border-white/10 shadow-2xl flex flex-col items-start gap-1">
                <span className="text-xs font-mono text-blue-400 mb-1">core.system</span>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                   Ali Juvance
                </h3>
                <div className="flex gap-2 mt-2">
                   <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                     FULLSTACK
                   </span>
                   <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                     ARCHITECT
                   </span>
                </div>
             </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
