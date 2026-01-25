import Image from 'next/image';

/**
 * Hero Section Component
 * Above the fold content with professional presentation
 * Swiss Design: Clean, lots of whitespace, strong typography
 */

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
      aria-label="Introduction"
    >
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo / Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              {/* Placeholder avatar - replace with actual photo */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-blue-600 dark:from-accent-dark dark:to-blue-400 opacity-20"
                aria-hidden="true"
              />
              <div className="absolute inset-2 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                {/* Professional Avatar Icon */}
                <svg
                  className="w-24 h-24 md:w-32 md:h-32 text-secondary/50 dark:text-secondary-dark/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -inset-2 rounded-full border-2 border-dashed border-accent/20 dark:border-accent-dark/20 animate-spin"
                style={{ animationDuration: '30s' }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl animate-slide-up">
            {/* Tagline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-primary-dark mb-6 leading-tight">
              Senior Fullstack Developer
              <span className="block text-accent dark:text-accent-dark">
                & Architecte Système
              </span>
            </h1>

            {/* Subtitle - Business oriented */}
            <p className="text-xl md:text-2xl text-secondary dark:text-secondary-dark mb-8 leading-relaxed">
              Je transforme des défis techniques complexes en{' '}
              <span className="text-primary dark:text-primary-dark font-medium">
                solutions business scalables
              </span>{' '}
              et performantes.
            </p>

            {/* Experience badge */}
            <p className="text-sm text-secondary dark:text-secondary-dark mb-8 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              +10 ans d&apos;expérience • Disponible pour de nouveaux projets
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                <span>Voir mes Études de Cas</span>
                <ArrowDownIcon className="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Me Contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-20 animate-bounce">
          <a
            href="#expertise"
            className="p-2 text-secondary dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            aria-label="Défiler vers la section Expertise"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
