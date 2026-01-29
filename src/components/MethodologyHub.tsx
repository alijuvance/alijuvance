'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MethodologyHub Component
 * A "Circuit Board" style visualization of engineering principles.
 * Features rounded orthogonal connectors with "optical fiber" plushing effects.
 */

const nodes = [
  { 
    id: 1, 
    title: "Bold Visuals", 
    desc: "Impactful Design", 
    color: "#a855f7", // Purple
    icon: <CubeIcon />,
    position: { x: 5, y: 15 },
    anchor: 'bottom'
  },
  { 
    id: 2, 
    title: "System Thinking", 
    desc: "Holistic Approach", 
    color: "#d946ef", // Magenta
    icon: <AbstractIcon />,
    position: { x: 50, y: 5 },
    anchor: 'bottom'
  },
  { 
    id: 3, 
    title: "AI-Driven", 
    desc: "Smart Logic", 
    color: "#3b82f6", // Blue
    icon: <CpuIcon />,
    position: { x: 95, y: 15 },
    anchor: 'bottom' 
  },
  { 
    id: 4, 
    title: "Ultra-Fast", 
    desc: "Next.js & Edge", 
    color: "#0ea5e9", // Sky
    icon: <SpeedIcon />,
    position: { x: 5, y: 75 },
    anchor: 'top'
  },
  { 
    id: 5, 
    title: "Clean UI", 
    desc: "Dark Mode First", 
    color: "#6366f1", // Indigo
    icon: <MoonIcon />,
    position: { x: 50, y: 85 },
    anchor: 'top'
  },
  { 
    id: 6, 
    title: "Micro-Motion", 
    desc: "Framer Magic", 
    color: "#ec4899", // Pink
    icon: <PlayIcon />,
    position: { x: 95, y: 75 },
    anchor: 'top'
  }
];

export function MethodologyHub() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      
      {/* Central Hub */}
      <motion.div 
        className="relative z-20 w-[280px] h-[150px] rounded-2xl bg-[#080808] border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-[0_0_50px_-10px_rgba(100,50,255,0.15)]"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
        <div className="absolute -right-1 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
          ENGINEERING<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">VISION 2026</span>
        </h3>
        <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2">The Future of Digital</p>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const isCenter = i === 1 || i === 4;
        const isLeft = i === 0 || i === 3;
        
        let style: any = { 
            position: 'absolute',
            left: `${node.position.x}%`, 
            top: `${node.position.y}%`,
            transform: 'translate(-50%, -50%)'
        };
        // Manual tweaks for exact centering based on the 95% / 5% logic
        if (i === 0 || i === 3) style.transform = 'translate(0, -50%)'; // Left align
        if (i === 2 || i === 5) style.transform = 'translate(-100%, -50%)'; // Right align

        return (
          <motion.div
            key={node.id}
            style={style}
            className="z-10"
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 * i }}
          >
             <div className={`
                relative w-[200px] p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 
                group hover:border-white/20 transition-all duration-300
                flex flex-col gap-3 overflow-hidden
             `}>
                {/* Hover Glow */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${node.color}, transparent 70%)` }} 
                />
                
                <div className="flex items-center gap-3">
                   <div 
                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300"
                     style={{ color: node.color }}
                   >
                     {node.icon}
                   </div>
                   <div className="flex flex-col">
                      <h4 className="font-bold text-white text-sm">{node.title}</h4>
                      <p className="text-[10px] text-gray-500">{node.desc}</p>
                   </div>
                </div>
             </div>
          </motion.div>
        );
      })}

    </div>
  );
}

// Icons
function CubeIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
}
function AbstractIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
}
function CpuIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
}
function SpeedIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
}
function MoonIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
}
function PlayIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
}


