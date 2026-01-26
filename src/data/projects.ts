/**
 * Project Type Definition
 * Structured data for case study projects
 */

export interface Project {
  id: string;
  title: string;
  role: string;
  challenge: string;
  solution: string;
  metrics: string[];
  stack: string[];
  category?: 'Fullstack' | 'Frontend' | 'Backend' | 'DevOps' | 'Blockchain';
}

/**
 * Sample Projects Data
 * Real-world case studies based on Ali Juvance's work
 */
export const projects: Project[] = [
  {
    id: 'diploma-auth',
    title: 'Authentification Diplômes Blockchain',
    role: 'Lead Developer',
    challenge:
      'La falsification de diplômes et la lenteur des vérifications manuelles posaient un problème de confiance majeur pour le Ministère et les recruteurs.',
    solution:
      'Développement d\'une plateforme décentralisée sur Ethereum (Testnet Sepolia). Chaque diplôme est un token/hash unique vérifiable instantanément via QR Code, garantissant une immutabilité totale.',
    metrics: [
      'Sécurité 100% inviolable (Blockchain)',
      'Vérification instantanée (< 2s)',
      'Digitalisation du processus complet',
    ],
    stack: ['Next.js', 'NestJS', 'Solidity', 'Ethereum', 'Web3.js', 'PostgreSQL'],
    category: 'Blockchain',
  },
  {
    id: 'hr-management',
    title: 'Digitalisation RH Computer Store',
    role: 'Fullstack Developer',
    challenge:
      'La gestion des employés reposait sur des processus papier et Excel dispersés, entraînant des erreurs de saisie et une perte de temps pour les managers.',
    solution:
      'Création d\'un portail employé/RH centralisé. Automatisation des congés, fiches de paie et suivi de carrière via une interface React fluide connectée à une API NestJS robuste.',
    metrics: [
      'Centralisation des données RH',
      'Réduction des tâches admin manuelles',
      'Interface temps réel',
    ],
    stack: ['React.js', 'NestJS', 'MySQL', 'TailwindCSS', 'TypeScript'],
    category: 'Fullstack',
  },
  {
    id: 'stock-management',
    title: 'Gestion Commerciale Desktop',
    role: 'Développeur C++',
    challenge:
      'Nécessité d\'une solution performante hors-ligne pour la gestion de vente d\'une épicerie avec un grand volume de transactions.',
    solution:
      'Logiciel desktop natif développé en C++ avec framework Qt. Base de données locale optimisée et interface ergonomique pour une saisie rapide en caisse.',
    metrics: [
      'Performance native (haute rapidité)',
      'Fonctionnement 100% hors-ligne',
      'Gestion de stock temps réel',
    ],
    stack: ['C++', 'Qt', 'SQL'],
    category: 'Backend', // Desktop but fits close to backend logic
  },
];
