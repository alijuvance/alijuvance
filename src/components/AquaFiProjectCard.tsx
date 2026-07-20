'use client';

import { Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  siReact, siNextdotjs, siNodedotjs, siTypescript, siTailwindcss, siPostgresql,
  siDocker, siKubernetes, siMongodb, siNestjs, siSpringboot, siSolidity, siEthereum, siMysql,
  siTensorflow, siRust, siWebassembly, siThreedotjs
} from 'simple-icons/icons';

interface AquaFiProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

// Mapping project stack strings to Icons & Colors
const techIcons: Record<string, { icon: any; color: string; dim?: boolean }> = {
  'React': { icon: siReact, color: '#61DAFB' },
  'React.js': { icon: siReact, color: '#61DAFB' },
  'Next.js': { icon: siNextdotjs, color: '#FFFFFF' }, // White neon
  'Node.js': { icon: siNodedotjs, color: '#339933' },
  'TypeScript': { icon: siTypescript, color: '#3178C6' },
  'TailwindCSS': { icon: siTailwindcss, color: '#06B6D4' },
  'PostgreSQL': { icon: siPostgresql, color: '#4169E1' },
  'Docker': { icon: siDocker, color: '#2496ED' },
  'Kubernetes': { icon: siKubernetes, color: '#326CE5' },
  'AWS': { icon: { path: "M11.16 9.42c-1.4.95-2.19 2.11-1.95 3.74.2 1.35 1.16 2.11 2.51 2.11 1.35 0 2.27-.8 2.47-2.15.2-1.35-.64-2.71-3.03-3.7zM18.3 7.79c-1.16-.8-3.34-1.27-5.02-1.27-2.83 0-5.18 1.11-5.69 4.62-.48 3.26 1.55 5.33 5.25 5.33 2.95 0 5.5-1.91 5.97-5.14l.96-6.53h-2.19l-.52 3.5c-.36-.4-.84-.52-1.28-.52zM6.86 17.5h2.35l-1.47 5.5h2.35l.44-2.59h2.83l.44 2.59h2.35l-4.66-5.5zm-1.08 4.38l.8-2.83h.04l.95 2.83H5.78zM24 13.9c0 3.82-6.17 4.94-9.16 4.94-3.59 0-5.89-1.08-5.89-3.66 0-2.35 2.51-4.14 6.61-4.14 1.24 0 2.63.2 3.03.32l.72-4.82c-1.48-.44-3.39-.6-4.98-.6-3.9 0-7.01 1.4-7.01 4.98 0 3.7 4.02 4.82 6.85 5.41 2.51.52 3.58.84 3.58 1.95 0 1.23-1.24 1.91-3.67 1.91-1.63 0-3.62-.52-5.06-1.31l-.8 2.83c1.55.88 4.02 1.35 6.1 1.35 4.1 0 7.2-1.55 7.2-5.18 0-3.74-4.22-4.9-7.09-5.49-2.19-.48-3.15-.84-3.15-1.83 0-1.04 1.08-1.59 3.11-1.59 1.39 0 2.91.28 4.1.64l.64-4.26c-.16 0 .44 4.5 .44 4.5s2.27 4.54 4.62 9.08h-2.43l-1.79-4.14-1.95 4.14h-2.15l3.15-5.93 1.63-3.26-.48 3.26z" }, color: '#FF9900' },
  'MongoDB': { icon: siMongodb, color: '#47A248' }, 
  'MySQL': { icon: siMysql, color: '#4479A1' }, 
  'NestJS': { icon: siNestjs, color: '#E0234E' },
  'Spring Boot': { icon: siSpringboot, color: '#6DB33F' },
  'Solidity': { icon: siSolidity, color: '#64748b', dim: true }, // Grey/Dim
  'Ethereum': { icon: siEthereum, color: '#64748b', dim: true }, // Grey/Dim
  'Web3.js': { 
    icon: { path: "M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 8.91v7.19l6 3.38v-7.22L5 8.91zm8 10.57 6-3.38V8.91l-6 3.35v7.22z" }, 
    color: '#3B82F6' 
  },
  'TensorFlow.js': { icon: siTensorflow, color: '#FF6F00' },
  'Rust': { icon: siRust, color: '#DEA584' },
  'WebAssembly': { icon: siWebassembly, color: '#654FF0' },
  'Three.js': { icon: siThreedotjs, color: '#FFFFFF' },
  'WebGPU': { 
    icon: { path: "M4 6h16v12H4zm2 2v8h12V8H6zm3 2h6v4H9z" }, 
    color: '#01C8A6' 
  }, 
  'SolidJS': { 
    icon: { path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }, 
    color: '#446b9e' 
  },
};

export function AquaFiProjectCard({ project, isActive, onClick }: AquaFiProjectCardProps) {
  return (
    <div 
      className={`relative w-[85vw] max-w-[400px] h-[600px] cursor-pointer transition-all duration-500 rounded-[30px] ${isActive ? 'z-20 scale-100' : 'z-10 scale-90 opacity-60 hover:opacity-100'}`}
      onClick={onClick}
    >
      {/* Glow Effect behind Active Card */}
      {isActive && (
        <div className="absolute -inset-1 bg-gradient-to-b from-red-600/30 to-rose-600/30 rounded-[35px] blur-2xl animate-pulse" />
      )}

      {/* Main Glass Card */}
      <div className={`relative h-full w-full rounded-[30px] overflow-hidden border transition-colors duration-500 flex flex-col
        ${isActive ? 'bg-[#0b0b0f]/95 border-red-500/40 shadow-[0_0_50px_-10px_rgba(220,38,38,0.3)] backdrop-blur-xl' : 'bg-[#08080a]/90 border-white/5'}
      `}>
        
        {/* Top: Project Image */}
        <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
           {project.image ? (
             <Image 
               src={project.image} 
               alt={project.title} 
               fill
               sizes="(max-width: 768px) 85vw, 400px"
               className="object-cover transition-transform duration-700 hover:scale-110"
               loading="lazy"
               quality={75}
             />
           ) : (
             <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-white/5">
                <span className="text-white/20 font-mono text-xs uppercase tracking-widest">Project Preview</span>
             </div>
           )}
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent pointer-events-none" />
           
           {/* Floating Badge (Top Right) */}
           <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-red-400 uppercase tracking-wider">
             {project.category || 'Dev'}
           </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between p-6 pt-0">
          
          {/* Title & Desc */}
          <div>
             <h3 className={`text-2xl font-bold mb-3 leading-tight transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
               {project.title}
             </h3>
             <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
               {project.challenge}
             </p>
          </div>

          {/* Bottom Section: Premium Tech Stack */}
          <div className="relative mt-auto">
             {isActive ? (
               <motion.div 
                 layoutId="activeCardModal"
                 className="bg-transparent"
               >
                 <div className="mb-4">
                   <p className="text-[10px] text-red-400/60 uppercase tracking-widest mb-4 pl-1 font-semibold">Stack Technique</p>
                   
                   <div 
                     className="flex items-center pl-8 pb-8 pt-6 overflow-x-visible perspective-[600px]"
                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                   >
                      {project.stack.map((tech, i) => {
                         const techData = techIcons[tech] || { icon: null, color: '#f00' };
                         const { icon: Icon, color } = techData;
                         
                         return (
                           <div 
                             key={i} 
                             className="group relative flex-shrink-0 w-16 h-16 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-black/90 backdrop-blur-md flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -ml-6 shadow-2xl transform rotate-y-[25deg] hover:rotate-0 hover:scale-125 hover:z-50 hover:mx-4 hover:border-red-500/50 hover:bg-black"
                             style={{
                                boxShadow: `-10px 0 20px -5px rgba(0,0,0,0.8), 0 0 15px -3px ${color}20`,
                                transformStyle: 'preserve-3d',
                             }}
                             title={tech}
                           >
                             {/* Top Spotlight / Glow Source */}
                             <div 
                               className="absolute top-0 inset-x-0 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl"
                               style={{ background: `radial-gradient(circle at top, ${color}, transparent 70%)` }}
                             />
                             {/* Top Edge Highlight - Crisp Glass */}
                             <div 
                               className="absolute top-0 inset-x-0 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                               style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                             />
                             
                             {/* Icon */}
                             <div className="relative z-10 p-1 transition-transform duration-500 drop-shadow-lg transform group-hover:translate-z-10 group-hover:scale-110">
                               {Icon ? (
                                 <svg 
                                   className="w-7 h-7 transition-all duration-500" 
                                   style={{ 
                                     color: color, 
                                     filter: `drop-shadow(0 0 12px ${color}60) brightness(1.3)`
                                   }}
                                   viewBox="0 0 24 24" 
                                   fill="currentColor"
                                 >
                                   <path d={Icon.path} />
                                 </svg>
                               ) : (
                                 <span className="text-[10px] font-mono font-bold brightness-150" style={{ color: color }}>{tech.slice(0, 2)}</span>
                               )}
                             </div>
                             
                             {/* Bottom Gloss */}
                             <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none" />
                           </div>
                         );
                      })}
                   </div>
                 </div>
                 
                 {/* Footer Info */}
                 <div className="flex items-center justify-between pt-3 border-t border-white/5">
                   <div className="flex flex-col">
                      <p className="text-[9px] text-red-500/40 uppercase">Role</p>
                      <p className="text-xs text-red-50 font-medium tracking-wide">{project.role}</p>
                   </div>
                   <a href="https://github.com/alijuvance" target="_blank" rel="noopener noreferrer" aria-label="Voir le code source sur GitHub" className="group/github p-2 rounded-full border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-5px_rgba(239,68,68,0.2)] cursor-pointer">
                      <svg className="w-5 h-5 text-red-500/80 group-hover/github:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                 </div>
               </motion.div>
             ) : (
               <div className="h-[100px] flex items-end">
                  <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-red-600/50 w-1/3" />
                  </div>
               </div>
             )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
