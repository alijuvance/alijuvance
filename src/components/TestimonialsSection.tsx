import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '@/data/testimonials';

/**
 * Testimonials Section Component
 * Social proof section with client/colleague testimonials
 */

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      aria-labelledby="testimonials-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="testimonials-title" className="section-title">
            Ce Qu&apos;ils Disent
          </h2>
          <p className="section-subtitle">
            Retours de clients et collaborateurs sur nos projets communs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
