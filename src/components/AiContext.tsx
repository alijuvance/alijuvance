'use client';

import { createContext, useContext, ReactNode } from 'react';
import { translations } from '@/components/LanguageContext';

export interface KnowledgeChunk {
  id: string;
  keywords: string[];
  content: string;
}

interface AiContextType {
  getStructuredKnowledge: (lang: 'fr' | 'en') => KnowledgeChunk[];
}

const AiContext = createContext<AiContextType | undefined>(undefined);

export function AiProvider({ children }: { children: ReactNode }) {
  
  const getStructuredKnowledge = (lang: 'fr' | 'en'): KnowledgeChunk[] => {
    const t = translations[lang];
    
    // Knowledge Base Definitions
    return [
      {
        id: 'identity',
        keywords: ['who', 'qui', 'ali', 'développeur', 'developer', 'role', 'profil', 'bio', 'toi', 'yourself', 'tu es', 'you are'],
        content: `${t['hero.greeting']} ${t['hero.role']}. ${t['hero.desc']} ${t['hero.based']}.`
      },
      {
        id: 'skills',
        keywords: ['stack', 'techno', 'compétence', 'skill', 'langage', 'framework', 'react', 'node', 'blockchain', 'cloud', 'ai'],
        content: lang === 'fr' 
          ? "Mes compétences principales incluent : Fullstack (React, Next.js, Node.js), Blockchain (Solidity, Ethereum), Cloud (AWS, Vercel) et IA. Je maîtrise aussi le Design UI/UX."
          : "My core skills include: Fullstack (React, Next.js, Node.js), Blockchain (Solidity, Ethereum), Cloud (AWS, Vercel), and AI. I am also proficient in UI/UX Design."
      },
      {
        id: 'services',
        keywords: ['service', 'offre', 'propose', 'mission', 'freelance', 'work', 'travail', 'faire', 'do'],
        content: lang === 'fr'
          ? `Je propose des services en : 1. ${t['services.web']} (Sites performants), 2. ${t['services.ui']} (Design moderne), 3. Blockchain & DApps, 4. Architecture Système.`
          : `I offer services in: 1. ${t['services.web']} (High-performance sites), 2. ${t['services.ui']} (Modern Design), 3. Blockchain & DApps, 4. System Architecture.`
      },
      {
        id: 'experience',
        keywords: ['expérience', 'experience', 'parcours', 'background', 'ancien', 'boeny', 'computer', 'stage'],
        content: lang === 'fr'
          ? `J'ai travaillé comme ${t['exp.freelance.role']}, et effectué des missions clés à la ${t['exp.stage24.comp']} (Application de gestion) et chez ${t['exp.stage23.comp']}.`
          : `I have worked as a ${t['exp.freelance.role']}, and completed key missions at ${t['exp.stage24.comp']} (Management App) and ${t['exp.stage23.comp']}.`
      },
      {
        id: 'projects',
        keywords: ['projet', 'project', 'portfolio', 'réalisations', 'work', 'création', 'app', 'diploma', 'hr'],
        content: lang === 'fr'
          ? `Quelques projets phares : 1. ${t['proj.diploma.title']} (Une solution Blockchain anti-falsification), 2. ${t['proj.hr.title']} (Portail RH complet). Consultez la section Projets pour les voir en action !`
          : `Some flagship projects: 1. ${t['proj.diploma.title']} (Blockchain anti-forgery solution), 2. ${t['proj.hr.title']} (Full HR Portal). Check the Projects section to see them in action!`
      },
      {
        id: 'contact',
        keywords: ['contact', 'mail', 'email', 'joindre', 'message', 'disponible', 'hire', 'recruter'],
        content: lang === 'fr'
          ? `Vous pouvez me contacter directement à alijuvance@gmail.com. Je suis actuellement : ${t['contact.availability.val']}.`
          : `You can contact me directly at alijuvance@gmail.com. I am currently: ${t['contact.availability.val']}.`
      },
      {
        id: 'price',
        keywords: ['prix', 'tarif', 'coût', 'rate', 'combien', 'price', 'cost', 'quote', 'devis'],
        content: lang === 'fr'
          ? "Chaque projet est unique. Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé adapté à votre budget."
          : "Every project is unique. Contact me to discuss your needs and get a personalized quote tailored to your budget."
      }
    ];
  };

  return (
    <AiContext.Provider value={{ getStructuredKnowledge }}>
      {children}
    </AiContext.Provider>
  );
}

export function useAiKnowledge() {
  const context = useContext(AiContext);
  if (context === undefined) {
    throw new Error('useAiKnowledge must be used within an AiProvider');
  }
  return context;
}
