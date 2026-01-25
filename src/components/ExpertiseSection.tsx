import { ExpertiseCard, ServerIcon, LayoutIcon, CogIcon } from './ExpertiseCard';

/**
 * Expertise Section Component
 * 3-column grid showcasing core competencies
 * Focus on value proposition, not just tech stack logos
 */

const expertiseAreas = [
  {
    icon: <ServerIcon className="w-full h-full" />,
    title: 'Backend & Architecture Solide',
    description:
      'Conception de systèmes résilients, optimisation SQL avancée, architecture microservices vs monolithe. Gestion stratégique de la dette technique pour assurer la pérennité des projets.',
  },
  {
    icon: <LayoutIcon className="w-full h-full" />,
    title: 'Frontend & Expérience Utilisateur',
    description:
      'Interfaces performantes et accessibles (a11y). Code JS/TS propre et maintenable. Maîtrise du state management complexe et des patterns de design modern.',
  },
  {
    icon: <CogIcon className="w-full h-full" />,
    title: 'DevOps & Leadership Technique',
    description:
      'Pipelines CI/CD robustes, conteneurisation Docker/Kubernetes. Mentorat de développeurs juniors et code reviews rigoureuses pour maintenir la qualité du code.',
  },
];

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="expertise-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="expertise-title" className="section-title">
            Expertise & Philosophie
          </h2>
          <p className="section-subtitle">
            Plus qu&apos;un simple développeur : une approche{' '}
            <span className="font-medium text-primary dark:text-primary-dark">Product-Minded</span>{' '}
            qui résout des problèmes business par la technologie.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ExpertiseCard
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
