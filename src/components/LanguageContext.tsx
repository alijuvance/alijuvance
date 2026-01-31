'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.pre': 'Profil Professionnel',
    'hero.greeting': "Bonjour, je suis",
    'hero.role': "Architecte & Développeur Fullstack",
    'hero.desc': "Développeur Senior transformant des défis techniques complexes en solutions élégantes et performantes. Spécialisé en scalabilité, code propre et expérience utilisateur premium.",
    'hero.cta': "Télécharger CV",
    'hero.based': "Basé à Madagascar",

    // Services (About)
    'services.pre': 'Nos Services',
    'services.title': 'Ce que nous faisons.',
    'services.brand': 'Identité de Marque',
    'services.brand.desc': 'Nous rassemblons les bonnes personnes pour remettre en question les idées reçues et conduire la transformation.',
    'services.web': 'Design Site Web',
    'services.web.desc': 'Création d\'interfaces modernes et réactives qui captivent votre audience dès le premier regard.',
    'services.ui': 'Design UI & UX',
    'services.ui.desc': 'Conception centrée utilisateur pour des expériences fluides, intuitives et mémorables.',
    'services.video': 'Marketing Vidéo',
    'services.video.desc': 'Stratégies vidéo percutantes pour amplifier votre message et engager votre communauté.',

    // Tech
    'tech.title': 'Système Central',
    'tech.select': 'Sélectionner Technologie',
    'tech.swipe': 'GLISSER POUR TOURNER',

    // Contact
    'contact.title': 'Donnons vie à votre vision',
    'contact.subtitle': 'Prêt à transformer votre présence en ligne ? Parlons de votre projet et voyons comment nous pouvons collaborer.',
    'contact.start': 'Démarrez votre projet',
    'contact.name': 'Votre nom *',
    'contact.name.ph': 'Veuillez saisir votre nom complet',
    'contact.email': 'Adresse courriel *',
    'contact.type': 'Type de projet',
    'contact.type.ph': 'Sélectionnez le type de votre projet',
    'contact.details': 'Détails du projet *',
    'contact.details.ph': 'Parlez-moi des objectifs de votre projet, de son calendrier...',
    'contact.send': 'Envoyer un message',
    'contact.connect': 'Entrer en contact',
    'contact.location': 'Emplacement',
    'contact.location.val': 'Disponible dans le monde entier',
    'contact.location.sub': 'Disponible pour le télétravail',
    'contact.availability': 'Disponibilité',
    'contact.availability.val': 'Assistance 24/7',
    'contact.availability.sub': 'Horaires flexibles pour l\'international',
    
    // Global
    'common.contact': "Contactez-moi",
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.pre': 'About Personal',
    'hero.greeting': "Hello, I'm",
    'hero.role': "Fullstack Architect & Developer",
    'hero.desc': "A Senior Fullstack Developer transforming complex challenges into elegant, high-performance digital systems. Focused on scalability, clean code, and premium user experiences.",
    'hero.cta': "Download CV",
    'hero.based': "Based in Madagascar",

    // Services (About)
    'services.pre': 'Our Services',
    'services.title': 'What We Do.',
    'services.brand': 'Brand Identity',
    'services.brand.desc': 'We bring the right people together to challenge established thinking and drive transformation.',
    'services.web': 'Website Design',
    'services.web.desc': 'Creating modern and responsive interfaces that captivate your audience from the first glance.',
    'services.ui': 'UI & UX Design',
    'services.ui.desc': 'User-centered design for fluid, intuitive, and memorable experiences.',
    'services.video': 'Video Marketing',
    'services.video.desc': 'Impactful video strategies to amplify your message and engage your community.',

    // Tech
    'tech.title': 'Core System',
    'tech.select': 'Select Technology',
    'tech.swipe': 'SWIPE TO ROTATE',

    // Contact
    'contact.title': 'Let\'s bring your vision to life',
    'contact.subtitle': 'Ready to transform your online presence? Let\'s discuss your project and see how we can collaborate.',
    'contact.start': 'Start your project',
    'contact.name': 'Your name *',
    'contact.name.ph': 'Please enter your full name',
    'contact.email': 'Email address *',
    'contact.type': 'Project type',
    'contact.type.ph': 'Select your project type',
    'contact.details': 'Project details *',
    'contact.details.ph': 'Tell me about your project goals, timeline...',
    'contact.send': 'Send Message',
    'contact.connect': 'Get in touch',
    'contact.location': 'Location',
    'contact.location.val': 'Available Worldwide',
    'contact.location.sub': 'Available for remote work',
    'contact.availability': 'Availability',
    'contact.availability.val': '24/7 Support',
    'contact.availability.sub': 'Flexible hours for international work',
    
    // Global
    'common.contact': "Get in touch",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  // FIX: Always render Provider to avoid "useContextMenu" error during SSR/Hydration
  // The 'mounted' check was removing the context from the tree!
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
