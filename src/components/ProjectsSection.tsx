import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

/**
 * Projects Section Component
 * Showcases case studies with business impact focus
 * The core of the portfolio - demonstrates real value delivered
 */

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="projects-title" className="section-title">
            Projets Sélectionnés & Impact Business
          </h2>
          <p className="section-subtitle">
            Des études de cas détaillées qui démontrent ma capacité à résoudre
            des problèmes complexes et à générer un ROI mesurable.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-secondary dark:text-secondary-dark mb-4">
            Vous avez un défi technique similaire ?
          </p>
          <a href="#contact" className="btn-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
