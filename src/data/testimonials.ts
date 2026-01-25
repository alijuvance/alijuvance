/**
 * Testimonial Type Definition
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

/**
 * Testimonials Data
 * Social proof from clients and colleagues
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Une approche vraiment différente des autres développeurs. Il a immédiatement compris nos enjeux business et a proposé une architecture qui a divisé nos coûts d\'infrastructure par deux tout en améliorant les performances.',
    author: 'Marie Dupont',
    role: 'CTO',
    company: 'TechScale',
  },
  {
    id: 'testimonial-2',
    quote:
      'Son expertise en architecture système nous a permis de passer d\'une application monolithique à une solution microservices sans aucune interruption de service. Le mentorat qu\'il a apporté à notre équipe technique a été tout aussi précieux.',
    author: 'Thomas Bernard',
    role: 'VP Engineering',
    company: 'FinanceFlow',
  },
  {
    id: 'testimonial-3',
    quote:
      'Rigueur, clarté dans la communication, et surtout une capacité rare à vulgariser des sujets techniques complexes pour nos équipes produit. Je le recommande sans hésitation pour des projets critiques.',
    author: 'Sophie Moreau',
    role: 'Lead Product Manager',
    company: 'E-Commerce Corp',
  },
];
