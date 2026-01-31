'use client';

import { createContext, useContext, ReactNode } from 'react';
import { translations } from '@/components/LanguageContext';

/**
 * AiContext
 * Aggregates portfolio data into a consumable format for the AI Assistant.
 * Currently uses the translation files as the "Knowledge Base".
 */

interface AiContextType {
  getKnowledgeBase: (lang: 'fr' | 'en') => string;
}

const AiContext = createContext<AiContextType | undefined>(undefined);

export function AiProvider({ children }: { children: ReactNode }) {
  
  const getKnowledgeBase = (lang: 'fr' | 'en') => {
    const t = translations[lang];
    // Flatten the knowledge into a readable text format for the "AI" to parse (or for our mock logic)
    return `
      Identity: ${t['hero.greeting']} ${t['hero.role']}. ${t['hero.desc']}
      Location: ${t['hero.based']}
      
      Services:
      - ${t['services.web']}: ${t['services.web.desc']}
      - ${t['services.ui']}: ${t['services.ui.desc']}
      - Brand: ${t['services.brand.desc']}
      
      Skills:
      Fullstack, Blockchain, Cloud Platform, AI, Design.
      
      Experience:
      - ${t['exp.freelance.role']}: ${t['exp.freelance.desc']}
      - ${t['exp.stage24.role']} at ${t['exp.stage24.comp']}: ${t['exp.stage24.desc']}
      
      Projects:
      - ${t['proj.diploma.title']}: ${t['proj.diploma.solution']}
      - ${t['proj.hr.title']}: ${t['proj.hr.solution']}
      
      Contact:
      Email: alijuvance@gmail.com
      Available: ${t['contact.availability.val']}
    `;
  };

  return (
    <AiContext.Provider value={{ getKnowledgeBase }}>
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
