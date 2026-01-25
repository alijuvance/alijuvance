import { FloatingNav } from '@/components/FloatingNav';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { motion } from 'framer-motion';

/**
 * Home Page - Modern Bento Grid Style
 * Features:
 * - Asymmetric grid layout
 * - Dark mode primary aesthetic
 * - 3D Globe integration
 * - Tech stack badges
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-accent font-sans pb-20">
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto space-y-4">
        
        {/* Hero Section (Top of Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[50vh] md:h-[60vh] min-h-[500px]">
          
          {/* Main Hero Card */}
          <BentoCard colSpan={2} className="relative flex flex-col justify-between overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 mt-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative bg-surface-hover flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary">
                  PARTENARIAT
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
                Je privilégie la réussite de mes clients et encourage une communication ouverte.
              </h1>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard colSpan={1} className="flex flex-col justify-between">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Axé sur les dernières innovations numériques
            </h2>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'AWS', 'Docker', 'Framer'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-secondary hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Globe/Timezone Card */}
          <BentoCard colSpan={1} className="min-h-[400px] relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">
                Je m&apos;adapte très facilement aux différents fuseaux horaires.
              </h2>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 rounded bg-black border border-white/10 text-xs text-secondary">PARIS FR</span>
                <span className="px-2 py-1 rounded bg-accent/20 border border-accent/20 text-xs text-accent">UTC+1</span>
              </div>
            </div>
            
            {/* Globe Placeholder (CSS Sphere) */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-t from-accent to-transparent opacity-20 blur-md animate-pulse" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          </BentoCard>

          {/* Contact CTA Card */}
          <BentoCard colSpan={1} className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 p-4 rounded-full bg-accent/10 text-accent">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Innovons ensemble</h2>
            <p className="text-secondary mb-8 text-sm">Prêt à donner vie à votre vision ?</p>
            <button 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full justify-center"
              onClick={() => window.location.href = 'mailto:contact@example.com'}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copier l&apos;email
            </button>
          </BentoCard>

          {/* Featured Project "Quelque chose qui se démarque" */}
          <BentoCard colSpan={1} className="relative group overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-4">Quelque chose qui se démarque.</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors">
                  Commencer
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                  Détails
                </button>
              </div>
            </div>
          </BentoCard>

        </div>

      </main>
    </div>
  );
}
