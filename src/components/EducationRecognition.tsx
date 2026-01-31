'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

/**
 * Education & Recognition Section
 * Replicates the "Education and Professional Recognition" layout from reference.
 * Left Col: Education Cards (ENI, Bac)
 * Right Col: Recognition Block + Stats
 */

export function EducationRecognition() {
  const { t } = useLanguage();

  return (
    <section className="section-padding py-20 bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="container-section max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('edu.title')}</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            {t('edu.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-white/90">{t('edu.col1')}</h3>
            
            {/* Card 1: ENI */}
            <EducationCard 
              title={t('edu.eni.title')}
              subtitle={t('edu.eni.sub')}
              description={t('edu.eni.desc')}
              badges={['Génie Logiciel', 'Web', 'Mobile']}
            />

            {/* Card 2: Bac */}
            <EducationCard 
              title={t('edu.bac.title')}
              subtitle={t('edu.bac.sub')}
              description={t('edu.bac.desc')}
              badges={['Sciences', 'Mathématiques']}
            />
          </div>

          {/* RIGHT COLUMN: Recognition */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold mb-6 text-white/90">{t('edu.col2')}</h3>

             {/* Main Featured Card */}
             <div className="p-8 rounded-2xl bg-[#0f0f10] border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-50">
                 <svg className="w-12 h-12 text-accent/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
               </div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent border border-accent/20">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>
                 </div>
                 
                 <h4 className="text-xl font-bold mb-2 text-white">{t('edu.rec.title')}</h4>
                 <p className="text-sm text-secondary mb-4">{t('edu.rec.sub')}</p>
                 <p className="text-secondary/80 text-sm leading-relaxed mb-6">
                   {t('edu.rec.desc')}
                 </p>
                 
                 <div className="flex items-center gap-2 text-accent text-sm font-medium">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                   <span>Excellence Technique</span>
                 </div>
               </div>
             </div>

             {/* Stats Rows */}
             <div className="grid grid-cols-1 gap-4">
               <StatCard 
                 title={t('edu.stat.projects')}
                 value="15+" 
                 icon={<svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>}
               />
               <StatCard 
                 title={t('edu.stat.satisfaction')}
                 value="4.9/5" 
                 icon={<svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function EducationCard({ title, subtitle, description, badges }: any) {
  return (
    <div className="p-8 rounded-2xl bg-[#0f0f10] border border-white/5 hover:border-white/10 transition-colors group">
      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
      </div>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-secondary/60 mb-4 font-mono">{subtitle}</p>
      <p className="text-secondary/80 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {badges.map((b: string) => (
          <span key={b} className="px-2 py-1 bg-white/5 rounded text-xs text-secondary border border-white/5">{b}</span>
        ))}
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[#0f0f10] border border-white/5">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h5 className="font-bold text-white">{title}</h5>
          <p className="text-xs text-secondary/50">Statistiques cumulées</p>
        </div>
      </div>
      <span className="text-xl font-bold text-white">{value}</span>
    </div>
  )
}
