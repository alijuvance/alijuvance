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
}

/**
 * Sample Projects Data
 * Real-world case studies demonstrating business impact
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Refonte Plateforme E-commerce',
    role: 'Lead Developer Backend',
    challenge:
      'La plateforme existante (Legacy PHP 5.6) ne supportait plus la charge lors des pics de trafic (Black Friday). Temps de réponse moyens supérieurs à 5 secondes, taux d\'abandon de panier à 45%.',
    solution:
      'Migration progressive vers une architecture microservices Node.js/Go. Mise en place de Redis pour le caching intelligent et Elasticsearch pour la recherche produit. Implémentation d\'une stratégie de load balancing avec failover automatique.',
    metrics: [
      'Temps de chargement réduit de 80% (de 5s à 0.8s)',
      '+25% de taux de conversion',
      'Zéro downtime lors du dernier Black Friday (2M de visites)',
      'Coûts d\'infrastructure réduits de 35%',
    ],
    stack: ['Node.js', 'Go', 'Redis', 'Elasticsearch', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    id: 'fintech-security',
    title: 'Système de Détection de Fraude',
    role: 'Architecte Logiciel',
    challenge:
      'Une fintech traitant 500K transactions/jour avait un taux de faux positifs de 12% sur la détection de fraude, bloquant des clients légitimes et générant un volume d\'appels support insoutenable.',
    solution:
      'Conception d\'un pipeline de scoring en temps réel combinant règles métier et modèles ML. Architecture event-driven avec Kafka pour le traitement asynchrone. Dashboard temps réel pour l\'équipe anti-fraude.',
    metrics: [
      'Taux de faux positifs réduit à 2.3% (-80%)',
      'Détection en temps réel (<100ms)',
      'Économie de 400K€/an en support client',
      'Conformité PCI-DSS maintenue',
    ],
    stack: ['Java', 'Spring Boot', 'Apache Kafka', 'Python', 'TensorFlow', 'TimescaleDB'],
  },
  {
    id: 'saas-migration',
    title: 'Migration Cloud & Modernisation SaaS',
    role: 'Lead Dev Fullstack & DevOps',
    challenge:
      'Application SaaS B2B vieillissante (C# .NET Framework) hébergée on-premise. Coûts de maintenance élevés, impossibilité de scaler, et chaque déploiement nécessitait 4h de downtime.',
    solution:
      'Réécriture progressive vers .NET Core conteneurisé. Migration vers Azure avec infrastructure as code (Terraform). Pipeline CI/CD complet avec tests automatisés et déploiement blue-green.',
    metrics: [
      'Déploiements de 4h à 5 min (zero-downtime)',
      'Scalabilité horizontale automatique',
      'Time-to-market réduit de 60%',
      'SLA passé de 99.5% à 99.95%',
    ],
    stack: ['.NET Core', 'Azure', 'Terraform', 'GitHub Actions', 'React', 'SQL Server'],
  },
];
