import { experiences } from '@/data/experiences';

/**
 * Timeline Section Component
 * Vertical career timeline with clean, minimalist design
 * Focus on roles and responsibilities, not diplomas
 */

export function TimelineSection() {
  return (
    <section
      id="experience"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="experience-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="experience-title" className="section-title">
            Parcours & Expérience
          </h2>
          <p className="section-subtitle">
            +10 années d&apos;évolution technique, des premières lignes de code
            aux responsabilités d&apos;architecture système.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                isEven={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: {
    id: string;
    period: string;
    role: string;
    company: string;
    description: string;
  };
  isEven: boolean;
  index: number;
}

function TimelineItem({ experience, isEven, index }: TimelineItemProps) {
  return (
    <div
      className={`relative flex items-center md:justify-center animate-slide-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Dot */}
      <div
        className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent dark:bg-accent-dark rounded-full transform md:-translate-x-1/2 border-4 border-background dark:border-background-dark z-10"
        aria-hidden="true"
      />

      {/* Content Card */}
      <div
        className={`ml-8 md:ml-0 md:w-5/12 ${
          isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
        }`}
      >
        <div className="card">
          {/* Period badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 rounded-full mb-3">
            {experience.period}
          </span>

          {/* Role & Company */}
          <h3 className="text-lg font-bold text-primary dark:text-primary-dark mb-1">
            {experience.role}
          </h3>
          <p className="text-sm font-medium text-secondary dark:text-secondary-dark mb-3">
            {experience.company}
          </p>

          {/* Description */}
          <p className="text-sm text-secondary dark:text-secondary-dark leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
