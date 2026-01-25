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
 * Key milestones and responsibilities
 */
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    period: '2020 - Présent',
    role: 'Lead Developer & Architecte',
    company: 'Consultant Indépendant',
    description:
      'Accompagnement de startups et ETI dans la conception et la modernisation de leurs systèmes. Architecture microservices, migrations cloud, et mise en place de bonnes pratiques engineering.',
  },
  {
    id: 'exp-2',
    period: '2017 - 2020',
    role: 'Senior Fullstack Developer',
    company: 'Scale-up FinTech',
    description:
      'Responsable technique d\'une équipe de 5 développeurs. Conception du système de paiement traitant 2M€ de transactions mensuelles. Mise en conformité PCI-DSS.',
  },
  {
    id: 'exp-3',
    period: '2014 - 2017',
    role: 'Développeur Backend Senior',
    company: 'Agence Digitale Premium',
    description:
      'Développement d\'applications web complexes pour des clients grands comptes. Spécialisation progressive en architecture logicielle et optimisation SQL.',
  },
  {
    id: 'exp-4',
    period: '2011 - 2014',
    role: 'Développeur Web Fullstack',
    company: 'Startup E-commerce',
    description:
      'Première expérience en startup : développement complet (PHP/MySQL, JavaScript) d\'une plateforme e-commerce de A à Z. Apprentissage de l\'agilité et du delivery rapide.',
  },
];
