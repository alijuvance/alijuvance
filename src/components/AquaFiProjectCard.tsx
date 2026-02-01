'use client';

import { Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  siReact, siNextdotjs, siNodedotjs, siTypescript, siTailwindcss, siPostgresql,
  siDocker, siKubernetes, siAmazonaws, siMongodb, siNestjs, siSpringboot, siSolidity, siEthereum
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
  'AWS': { icon: siAmazonaws, color: '#FF9900' },
  'MongoDB': { icon: siMongodb, color: '#47A248' }, 
  'NestJS': { icon: siNestjs, color: '#E0234E' },
  'Spring Boot': { icon: siSpringboot, color: '#6DB33F' },
  'Solidity': { icon: siSolidity, color: '#64748b', dim: true }, // Grey/Dim
  'Ethereum': { icon: siEthereum, color: '#64748b', dim: true }, // Grey/Dim
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
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
                   <div className="flex items-center gap-1.5 text-[10px] text-red-500 font-mono cursor-pointer hover:text-red-400 transition-colors tracking-widest uppercase">
                      Case Study 
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </div>
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
