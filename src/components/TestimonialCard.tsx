import { Testimonial } from '@/data/testimonials';

/**
 * Testimonial Card Component
 * Quote card with author info and company
 */

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="card h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <QuoteIcon className="w-8 h-8 text-accent/30 dark:text-accent-dark/30" />
      </div>

      {/* Quote Text */}
      <blockquote className="flex-1 mb-6">
        <p className="text-primary dark:text-primary-dark leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Author Info */}
      <footer className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-blue-500/20 dark:from-accent-dark/20 dark:to-blue-400/20 flex items-center justify-center">
          <span className="text-lg font-bold text-accent dark:text-accent-dark">
            {testimonial.author.charAt(0)}
          </span>
        </div>

        {/* Name & Role */}
        <div>
          <cite className="not-italic font-semibold text-primary dark:text-primary-dark block">
            {testimonial.author}
          </cite>
          <span className="text-sm text-secondary dark:text-secondary-dark">
            {testimonial.role} @ {testimonial.company}
          </span>
        </div>
      </footer>
    </article>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
