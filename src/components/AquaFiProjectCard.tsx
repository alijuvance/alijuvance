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
      className={`relative w-[350px] md:w-[400px] h-[500px] cursor-pointer transition-all duration-500 rounded-[30px] ${isActive ? 'z-20 scale-100' : 'z-10 scale-90 opacity-60 hover:opacity-100'}`}
      onClick={onClick}
    >
      {/* Glow Effect behind Active Card */}
      {isActive && (
        <div className="absolute -inset-1 bg-gradient-to-b from-red-600/30 to-rose-600/30 rounded-[35px] blur-2xl animate-pulse" />
      )}

      {/* Main Glass Card */}
      <div className={`relative h-full w-full rounded-[30px] overflow-hidden border transition-colors duration-500 flex flex-col justify-between p-8
        ${isActive ? 'bg-[#0b0b0f]/90 border-red-500/40 shadow-[0_0_50px_-10px_rgba(220,38,38,0.3)] backdrop-blur-xl' : 'bg-[#08080a]/80 border-white/5'}
      `}>
        
        {/* Top Section: Title & Badge */}
        <div className="relative z-10">
           <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-3xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-red-400 font-mono tracking-wider uppercase">{project.category || 'Development'}</p>
              </div>
              
              {/* "Get Started" Circle Button */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center shadow-lg shadow-red-600/30"
                  >
                    <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
           
           <p className="mt-6 text-gray-400 text-sm leading-relaxed line-clamp-3">
             {project.challenge}
           </p>
        </div>

        {/* Center Visual/Graphic Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className={`w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-red-600 to-transparent blur-[90px] transition-opacity duration-1000 ${isActive ? 'opacity-50' : 'opacity-10'}`} />
        </div>

        {/* Bottom Section: Dynamic Tech Stack */}
        <div className="relative z-10 mt-auto">
           {isActive ? (
             <motion.div 
               layoutId="activeCardModal"
               className="bg-transparent"
             >
               <div className="mb-2">
                 <p className="text-[10px] text-red-400/60 uppercase tracking-widest mb-4 pl-1 font-semibold">Technologies</p>
                 
                 <div className="flex items-center pl-2 perspective-[1000px]">
                    {project.stack.slice(0, 5).map((tech, i) => {
                       const techData = techIcons[tech] || { icon: null, color: '#f00' };
                       const { icon: Icon, color, dim } = techData;
                       
                       return (
                         <div 
                           key={i} 
                           className="group relative flex-shrink-0 w-16 h-20 md:w-20 md:h-24 rounded-2xl bg-[#0a0000]/90 backdrop-blur-md flex items-center justify-center -ml-4 first:ml-0 transition-all duration-300 hover:-translate-y-2 hover:ml-2 hover:mr-4 hover:z-20 z-0"
                           style={{
                             zIndex: i,
                             boxShadow: dim 
                               ? '0 5px 20px -5px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.05)' // Dim shadow
                               : `0 10px 30px -5px ${color}40, inset 0 0 20px ${color}10`, // Active shadow
                             border: `1px solid ${dim ? 'rgba(255,255,255,0.1)' : color + '30'}`
                           }}
                           title={tech}
                         >
                           {/* Top Highlight (Glass Edge) */}
                           <div className="absolute inset-x-0 top-0 h-[1px] opacity-70" style={{ background: `linear-gradient(90deg, transparent, ${dim ? '#ffffff20' : color + '80'}, transparent)` }} />
                           
                           {/* Icon with Dynamic Color */}
                           {Icon ? (
                             <svg 
                               className="w-8 h-8 md:w-10 md:h-10 transition-all" 
                               style={{ 
                                 color: color, 
                                 filter: dim ? 'none' : `drop-shadow(0 0 5px ${color})`,
                                 opacity: dim ? 0.5 : 1
                               }}
                               viewBox="0 0 24 24" 
                               fill="currentColor"
                             >
                               <path d={Icon.path} />
                             </svg>
                           ) : (
                             <span className="text-[10px] font-mono font-bold" style={{ color: color }}>{tech.slice(0, 3)}</span>
                           )}

                           {/* Bottom Reflection */}
                           <div className="absolute inset-x-0 bottom-0 h-[1px] opacity-30" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                         </div>
                       );
                    })}
                 </div>
               </div>
               
               {/* Footer Info */}
               <div className="flex items-center justify-between pt-4 pl-1">
                 <div className="flex flex-col">
                    <p className="text-[10px] text-red-500/40 uppercase">Role</p>
                    <p className="text-sm text-red-50 font-medium tracking-wide">{project.role}</p>
                 </div>
                 <div className="flex items-center gap-1.5 text-xs text-[#FF2222] font-mono cursor-pointer hover:text-red-400 transition-colors tracking-widest uppercase">
                    Case Study 
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </div>
               </div>
             </motion.div>
           ) : (
             <div className="h-[140px] flex items-end">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-red-600/50 w-1/3" />
                </div>
             </div>
           )}
        </div>
        
      </div>
    </div>
  );
}
