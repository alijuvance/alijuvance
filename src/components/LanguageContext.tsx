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
    'hero.desc': "Passionné par le développement Full Stack, je fusionne ingénierie moderne et conception intelligente. Fort d'une solide expérience des technologies actuelles et d'un sens aigu de l'expérience utilisateur, je poursuis actuellement un Master en Informatique Générale à l’École Nationale d’Informatique (ENI) de l’Université de Fianarantsoa.",
    'hero.cta': "Télécharger CV",
    'hero.based': "Basé à Madagascar",

    // Services (About)
    'services.pre': 'Nos Services',
    'services.title': 'Ce que nous faisons.',
    'services.brand': 'Solutions Blockchain',
    'services.brand.desc': 'Architecture d\'applications décentralisées (DApps), Smart Contracts et intégration Web3 sécurisée.',
    'services.web': 'Développement Web & Mobile',
    'services.web.desc': 'Applications performantes et scalables sur mesure, utilisant React, Next.js et des architectures modernes.',
    'services.ui': 'Design UI & UX',
    'services.ui.desc': 'Interfaces intuitives et centrées utilisateur. Maquettage précis et expériences fluides sur tous les supports.',
    'services.video': 'API & Backend Robuste',
    'services.video.desc': 'Conception d\'APIs REST/GraphQL performantes, gestion de bases de données et optimisation serveur.',

    // Tech
    'tech.title': 'Système Central',
    'tech.select': 'Sélectionner Technologie',
    'tech.swipe': 'GLISSER POUR TOURNER',

    // Contact
    'contact.title': 'Entrer en contact',
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
    
    // Experience Section
    'exp.title': 'Expérience',
    'exp.subtitle': 'Professionnelle',
    'exp.desc': "Mon parcours professionnel et les entreprises exceptionnelles avec lesquelles j'ai eu le privilège de travailler.",
    
    // Exp: Freelance
    // Exp: Stage MTEFoP
    'exp.freelance.role': 'Stagiaire en développement Web',
    'exp.freelance.comp': 'MTEFoP (Tananarive 67ha)',
    'exp.freelance.desc': 'Conception et réalisation d’un système web sécurisé d’authentification des diplômes en utilisant la technologie Blockchain et Code QR',
    
    // Exp: Stage 2024
    'exp.stage24.role': 'Stagiaire Développeur web',
    'exp.stage24.comp': 'Nexia Systems',
    'exp.stage24.desc': 'Développement, maintenance d\'applications avec collaboration active au sein d\'équipes multidisciplinaires, conception et implémentation des solutions logicielles',

    // Exp: Stage 2023 (Computer Store)
    'exp.stage23.role': 'Stagiaire en développement Web',
    'exp.stage23.comp': 'Computer Store',
    'exp.stage23.desc': 'Conception et réalisation d\'une application Web de gestion d\'employés. qui automatisent les tâches administratives, centralisent les données et simplifient le quotidien des équipes RH et des managers. Remplacer les processus papier par des outils digitaux',

    // Education & Recognition
    'edu.title': 'Éducation et reconnaissance professionnelle',
    'edu.subtitle': 'Apprentissage continu et excellence académique reconnue dans le développement logiciel.',
    'edu.col1': 'Éducation et formation',
    'edu.eni.title': 'Licence Professionnelle Informatique',
    'edu.eni.sub': 'Ecole Nationale d\'Informatique (ENI) • 2022 - 2025',
    'edu.eni.desc': 'Parcours Informatique Générale. Formation intensive en algorithmique, génie logiciel, et développement web/mobile avancée. Major de promotion sur les modules techniques.',
    'edu.bac.title': 'Baccalauréat Série D',
    'edu.bac.sub': 'Lycée Privé Adventiste Mahajanga • 2021 - 2022',
    'edu.bac.desc': 'Obtention du baccalauréat avec mention. Bases solides en mathématiques et sciences.',
    'edu.col2': 'Reconnaissance professionnelle',
    'edu.rec.title': 'Développeur Engagé',
    'edu.rec.sub': 'Projets Académiques & Stages • 2023 - Aujourd\'hui',
    'edu.rec.desc': 'Participation active à des projets d\'envergure nationale (Ministère du Travail) et création de solutions d\'entreprise formelles dès le cursus universitaire.',
    'edu.stat.projects': 'Projets Livrés',
    'edu.stat.satisfaction': 'Satisfaction Tuteur/Client',

    // Projects Section
    'projects.header': 'Sélection de',
    'projects.header.highlight': 'Projets',
    'projects.desc': "Découvrez mes derniers travaux.",
    'projects.metrics': 'Métrique',
    'projects.role': 'Rôle',
    
    // Project: Diploma Auth
    'proj.diploma.title': 'Authentification Diplômes Blockchain',
    'proj.diploma.role': 'Développement web',
    'proj.diploma.challenge': 'La falsification de diplômes et la lenteur des vérifications manuelles posaient un problème de confiance majeur pour le Ministère et les recruteurs.',
    'proj.diploma.solution': 'Développement d\'une plateforme décentralisée sur Ethereum (Testnet Sepolia). Chaque diplôme est un token/hash unique vérifiable instantanément via QR Code, garantissant une immutabilité totale.',
    'proj.diploma.m1': 'Sécurité 100% inviolable (Blockchain)',
    'proj.diploma.m2': 'Vérification instantanée (< 2s)',
    'proj.diploma.m3': 'Digitalisation du processus complet',
    
    // Project: HR Management
    'proj.hr.title': 'Digitalisation RH Computer Store',
    'proj.hr.role': 'Développement web',
    'proj.hr.challenge': 'La gestion des employés reposait sur des processus papier et Excel dispersés, entraînant des erreurs de saisie et une perte de temps pour les managers.',
    'proj.hr.solution': 'Création d\'un portail employé/RH centralisé. Automatisation des congés, fiches de paie et suivi de carrière via une interface React fluide connectée à une API NestJS robuste.',
    'proj.hr.m1': 'Centralisation des données RH',
    'proj.hr.m2': 'Réduction des tâches admin manuelles',
    'proj.hr.m3': 'Interface temps réel',
    
    // Project: Stock Management
    // Project: EcoSphere Analytics
    'proj.stock.title': 'EcoSphere Analytics',
    'proj.stock.role': 'Fullstack Architect',
    'proj.stock.challenge': 'La surveillance écologique traditionnelle manquait de données centralisées pour analyser l\'impact environnemental en temps réel.',
    'proj.stock.solution': 'Plateforme SaaS de monitoring écologique. Visualisation de données IoT complexes via Next.js, API NestJS haute performance et stockage séries temporelles PostgreSQL.',
    'proj.stock.m1': 'Analytics Temps Réel',
    'proj.stock.m2': 'Architecture Scalable (Docker)',
    'proj.stock.m3': 'Interface "Nature-Tech"',
    
    // Project: Nexus AI (Sentient UI)
    'proj.nexus.title': 'Sentient UI Engine',
    'proj.nexus.role': 'AI UX Architect',
    'proj.nexus.challenge': 'Interfaces statiques incapables de s\'adapter au contexte émotionnel et contextuel de l\'utilisateur.',
    'proj.nexus.solution': 'Moteur de génération d\'interface en temps réel. Analyse biométrique locale (Edge AI) pilotant une UI générative fluide et instantanée.',
    'proj.nexus.m1': 'Adaptation Émotionnelle',
    'proj.nexus.m2': 'Rendering WebGPU (<1ms)',
    'proj.nexus.m3': 'Confidentialité Totale (Local)',

    // Project: Vortex (Decentralized)
    'proj.vortex.title': 'Vortex Mesh Network',
    'proj.vortex.role': 'Systems Engineer',
    'proj.vortex.challenge': 'La dépendance aux clouds centralisés crée des vulnérabilités de sécurité et des coûts d\'infrastructure élevés.',
    'proj.vortex.solution': 'Réseau de calcul distribué pair-à-pair nouvelle génération. Exploitation de la puissance inactive via WebAssembly et sécurisé par ZK-Proofs.',
    'proj.vortex.m1': 'Infrastructure Décentralisée',
    'proj.vortex.m2': 'Vérification ZK-Snark',
    'proj.vortex.m3': 'Performance Native WASM',

    // Footer
    'footer.bio': 'Développeur Fullstack & Blockchain spécialisé dans la conception de solutions web scalables et sécurisées. Transformant des idées complexes en interfaces élégantes et performantes.',
    'footer.services': 'Services',
    'footer.links': 'Liens rapides',
    'footer.why': 'Pourquoi moi ?',
    'footer.copyright': '© 2025 Ali Juvance - Développeur Fullstack. Tous droits réservés.',
    'footer.backtop': 'Retour en haut de page',
    'footer.why.1': 'Expertise Fullstack (Front+Back)',
    'footer.why.2': 'Code propre & maintenable',
    'footer.why.3': 'Communication transparente',
    'footer.why.4': 'Respect des délais',

    // Process Steps (How It Works)
    'process.pre': 'Flux de travail',
    'process.title': 'Comment ça marche',
    'process.desc': 'Une approche structurée et agile pour garantir la qualité et la rapidité, de la conception au déploiement final.',
    'process.s1.title': 'Découverte',
    'process.s1.desc': 'Compréhension approfondie de vos besoins, objectifs business et contraintes techniques.',
    'process.s2.title': 'Architecture',
    'process.s2.desc': 'Design de la solution technique, choix de la stack et planification détaillée.',
    'process.s3.title': 'Développement',
    'process.s3.desc': 'Codage itératif avec des points de contrôle réguliers et des standards de qualité élevés.',
    'process.s4.title': 'Déploiement',
    'process.s4.desc': 'Mise en production sécurisée, tests finaux et formation si nécessaire.',

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
    'hero.desc': "Passionate about Full Stack development, I merge modern engineering with intelligent design. With strong experience in current technologies and a keen sense of user experience, I am currently pursuing a Master's in General Computer Science at the National School of Computer Science (ENI) of the University of Fianarantsoa.",
    'hero.cta': "Download CV",
    'hero.based': "Based in Madagascar",

    // Services (About)
    'services.pre': 'Our Services',
    'services.title': 'What We Do.',
    'services.brand': 'Blockchain Solutions',
    'services.brand.desc': 'Decentralized application (DApp) architecture, specialized Smart Contracts, and secure Web3 integration.',
    'services.web': 'Web & Mobile Development',
    'services.web.desc': 'High-performance, scalable custom applications built with React, Next.js, and modern architectures.',
    'services.ui': 'UI & UX Design',
    'services.ui.desc': 'Intuitive, user-centered interfaces. Precise prototyping and fluid experiences across all devices.',
    'services.video': 'Robust API & Backend',
    'services.video.desc': 'High-performance REST/GraphQL API design, database management, and server optimization.',

    // Tech
    'tech.title': 'Core System',
    'tech.select': 'Select Technology',
    'tech.swipe': 'SWIPE TO ROTATE',

    // Contact
    'contact.title': 'Get in touch',
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
    
    // Experience Section
    'exp.title': 'Experience',
    'exp.subtitle': 'Professional',
    'exp.desc': "My professional journey and the exceptional companies I've had the privilege to work with.",
    
    // Exp: Freelance
    // Exp: MTEFoP Intern
    'exp.freelance.role': 'Web Development Intern',
    'exp.freelance.comp': 'MTEFoP (Antananarivo 67ha)',
    'exp.freelance.desc': 'Design and implementation of a secure web system for diploma authentication using Blockchain technology and QR Code',
    
    // Exp: Stage 2024
    'exp.stage24.role': 'Web Developer Intern',
    'exp.stage24.comp': 'Nexia Systems',
    'exp.stage24.desc': 'Development and maintenance of applications with active collaboration within multidisciplinary teams, design and implementation of software solutions',

    // Exp: Stage 2023
    'exp.stage23.role': 'Web Development Intern',
    'exp.stage23.comp': 'Computer Store',
    'exp.stage23.desc': 'Design and implementation of a Web employee management application. Automating administrative tasks, centralizing data, and simplifying the daily operations of HR teams and managers. Replacing paper processes with digital tools.',

    // Education & Recognition
    'edu.title': 'Education and Professional Recognition',
    'edu.subtitle': 'Continuous learning and recognized academic excellence in software development.',
    'edu.col1': 'Education and Training',
    'edu.eni.title': 'Professional Bachelor in Computer Science',
    'edu.eni.sub': 'National School of Computer Science (ENI) • 2022 - 2025',
    'edu.eni.desc': 'General Computer Science track. Intensive training in algorithms, software engineering, and advanced web/mobile development. Valedictorian in technical modules.',
    'edu.bac.title': 'Baccalaureate Series D',
    'edu.bac.sub': 'Adventist Private High School Mahajanga • 2021 - 2022',
    'edu.bac.desc': 'Obtained Baccalaureate with honors. Strong foundation in mathematics and sciences.',
    'edu.col2': 'Professional Recognition',
    'edu.rec.title': 'Committed Developer',
    'edu.rec.sub': 'Academic Projects & Internships • 2023 - Present',
    'edu.rec.desc': 'Active participation in national-scale projects (Ministry of Labor) and creation of formal enterprise solutions during university studies.',
    'edu.stat.projects': 'Projects Delivered',
    'edu.stat.satisfaction': 'Tutor/Client Satisfaction',

    // Projects Section
    'projects.header': 'Selected',
    'projects.header.highlight': 'Works',
    'projects.desc': "Discover my latest work.",
    'projects.metrics': 'Metrics',
    'projects.role': 'Role',

    // Project: Diploma Auth
    'proj.diploma.title': 'Blockchain Diploma Auth',
    'proj.diploma.role': 'Web Development',
    'proj.diploma.challenge': 'Diploma forgery and slow manual verifications posed a major trust issue for the Ministry and recruiters.',
    'proj.diploma.solution': 'Development of a decentralized platform on Ethereum (Sepolia Testnet). Each diploma is a unique, instantly verifiable token/hash via QR Code, ensuring total immutability.',
    'proj.diploma.m1': '100% Tamper-proof Security',
    'proj.diploma.m2': 'Instant Verification (< 2s)',
    'proj.diploma.m3': 'Full Process Digitalization',
    
    // Project: HR Management
    'proj.hr.title': 'Computer Store HR Digitalization',
    'proj.hr.role': 'Web Development',
    'proj.hr.challenge': 'Employee management relied on scattered paper and Excel processes, leading to entry errors and lost time for managers.',
    'proj.hr.solution': 'Creation of a centralized Employee/HR portal. Automation of leave, payroll, and career tracking via a fluid React interface connected to a robust NestJS API.',
    'proj.hr.m1': 'Centralized HR Data',
    'proj.hr.m2': 'Reduced Manual Admin Tasks',
    'proj.hr.m3': 'Real-time Interface',
    
    // Project: Stock Management
    // Project: EcoSphere Analytics
    'proj.stock.title': 'EcoSphere Analytics',
    'proj.stock.role': 'Fullstack Architect',
    'proj.stock.challenge': 'Traditional ecological monitoring lacked centralized data to analyze environmental impact in real-time.',
    'proj.stock.solution': 'SaaS ecological monitoring platform. Complex IoT data visualization via Next.js, high-performance NestJS API, and PostgreSQL time-series storage.',
    'proj.stock.m1': 'Real-time Analytics',
    'proj.stock.m2': 'Scalable Architecture (Docker)',
    'proj.stock.m3': '"Nature-Tech" Interface',

    // Project: Nexus AI (Sentient UI)
    'proj.nexus.title': 'Sentient UI Engine',
    'proj.nexus.role': 'AI UX Architect',
    'proj.nexus.challenge': 'Static interfaces unable to adapt to user emotional and situational context.',
    'proj.nexus.solution': 'Real-time interface generation engine. Local biometric analysis (Edge AI) driving a fluid, instant generative UI.',
    'proj.nexus.m1': 'Emotional Adaptation',
    'proj.nexus.m2': 'WebGPU Rendering (<1ms)',
    'proj.nexus.m3': 'Total Privacy (Local)',

    // Project: Vortex (Decentralized)
    'proj.vortex.title': 'Vortex Mesh Network',
    'proj.vortex.role': 'Systems Engineer',
    'proj.vortex.challenge': 'Reliance on centralized clouds creates security vulnerabilities and high infrastructure costs.',
    'proj.vortex.solution': 'Next-gen peer-to-peer distributed compute network. Harnessing idle power via WebAssembly and secured by ZK-Proofs.',
    'proj.vortex.m1': 'Decentralized Infrastructure',
    'proj.vortex.m2': 'ZK-Snark Verification',
    'proj.vortex.m3': 'WASM Native Performance',

    // Footer
    'footer.bio': 'Fullstack & Blockchain Developer specializing in designing scalable and secure web solutions. Transforming complex ideas into elegant and high-performance interfaces.',
    'footer.services': 'Services',
    'footer.links': 'Quick Links',
    'footer.why': 'Why Me?',
    'footer.copyright': '© 2025 Ali Juvance - Fullstack Developer. All rights reserved.',
    'footer.backtop': 'Back to Top',
    'footer.why.1': 'Fullstack Expertise (Front+Back)',
    'footer.why.2': 'Clean & Maintainable Code',
    'footer.why.3': 'Transparent Communication',
    'footer.why.4': 'Deadlines Respected',

    // Process Steps (How It Works)
    'process.pre': 'Workflow',
    'process.title': 'How It Works',
    'process.desc': 'A structured and agile approach to ensure high quality and speed, from concept to final deployment.',
    'process.s1.title': 'Discovery',
    'process.s1.desc': 'Deep understanding of your needs, business goals, and technical constraints.',
    'process.s2.title': 'Architecture',
    'process.s2.desc': 'Designing the technical solution, selecting the stack, and detailed planning.',
    'process.s3.title': 'Development',
    'process.s3.desc': 'Iterative coding with regular checkpoints and high quality standards.',
    'process.s4.title': 'Deployment',
    'process.s4.desc': 'Secure production rollout, final testing, and training if needed.',

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
