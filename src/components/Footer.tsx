'use client';

/**
 * Footer Component
 * Refactored to match "Ali Saleem" reference layout (4 columns)
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-950/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="container-section max-w-7xl mx-auto px-4">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Ali Juvance</h2>
            <p className="text-sm text-secondary/80 leading-relaxed">
              Développeur Fullstack & Blockchain spécialisé dans la conception de solutions web scalables et sécurisées. 
              Transformant des idées complexes en interfaces élégantes et performantes.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="github" />
              <SocialIcon icon="mail" />
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Madagascar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>alijuvance@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-secondary/80">
              <li><a href="#" className="hover:text-white transition-colors">Développement d&apos;Apps Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions Blockchain (DApps)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API & Backend NestJS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Architecture Microservices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refonte & Optimisation</a></li>
            </ul>
          </div>

          {/* Col 3: Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3 text-sm text-secondary/80">
              <li><a href="#home" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Compétences</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projets</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Expérience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

           {/* Col 4: FAQ (Optional based on image 3/4 content?) Or just extra info */}
           <div>
            <h3 className="text-lg font-bold mb-6">Pourquoi moi ?</h3>
             <ul className="space-y-3 text-sm text-secondary/80">
              <li className="flex gap-2">
                <span className="text-accent">•</span> Expertise Fullstack (Front+Back)
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Code propre & maintenable
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Communication transparente
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> Respect des délais
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary/60">
            © {currentYear} Ali Juvance - Développeur Fullstack. Tous droits réservés.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-medium text-white hover:text-accent transition-colors"
          >
            Retour en haut de page
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  // Simple SVG placeholders
  return (
    <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
      {icon === 'linkedin' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
      {icon === 'github' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
      {icon === 'mail' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
    </a>
  )
}
