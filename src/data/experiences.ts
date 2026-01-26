/**
 * Experience Type Definition
 * Timeline data for career history
 */

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

/**
 * Career Experience Data
 * Based on Ali Juvance's CV
 */
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    period: 'Sept 2025 - Présent',
    role: 'Développeur Web & Blockchain',
    company: 'Ministère du Travail (MTEFP)',
    description:
      'Conception d\'un système sécurisé d\'authentification des diplômes via Blockchain et QR Code. Stack: NestJS, Next.js, Ethereum (Sepolia).',
  },
  {
    id: 'exp-2',
    period: 'Sept 2024 - Nov 2024',
    role: 'Développeur Fullstack',
    company: 'Computer Store',
    description:
      'Développement d\'une application de gestion RH pour automatiser les tâches administratives et centraliser les données employés. Stack: React.js, NestJS, MySQL.',
  },
  {
    id: 'exp-3',
    period: 'Mai 2024 - Juin 2024',
    role: 'Développeur Polyvalent',
    company: 'Projets Académiques & Freelance',
    description:
      'Réalisation de solutions de gestion (Stock épicerie, Station-service) et sites web institutionnels. Technologies: Java, C#, HTML/CSS.',
  },
  {
    id: 'exp-4',
    period: 'Aout 2023 - Sept 2023',
    role: 'Développeur C++ / Qt',
    company: 'Projet Fin d\'Année',
    description:
      'Conception d\'un logiciel desktop optimisé pour la gestion de vente d\'une épicerie. Focus sur la performance et l\'interface utilisateur desktop.',
  },
];
