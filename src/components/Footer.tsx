import { ContactForm } from './ContactForm';

/**
 * Footer Component
 * Contact section + social links + copyright
 * Clean, minimal design with prominent social icons
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-section">
        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-4">
              Travaillons Ensemble
            </h2>
            <p className="text-lg text-secondary dark:text-secondary-dark mb-8 leading-relaxed">
              Vous avez un projet technique complexe ? Un système à moderniser ?
              Une architecture à repenser ? Discutons de comment je peux vous aider.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-4 mb-8">
              <h3 className="text-sm font-semibold text-secondary dark:text-secondary-dark uppercase tracking-wider">
                Me Retrouver
              </h3>
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com"
                  label="GitHub"
                  icon={<GitHubIcon className="w-6 h-6" />}
                />
                <SocialLink
                  href="https://linkedin.com"
                  label="LinkedIn"
                  icon={<LinkedInIcon className="w-6 h-6" />}
                />
              </div>
            </div>

            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
            >
              <DownloadIcon className="w-5 h-5" />
              Télécharger mon CV (PDF)
            </a>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-6">
              Envoyez-moi un message
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary dark:text-secondary-dark">
            <p>
              © {currentYear} • Senior Fullstack Developer. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1">
              Conçu avec
              <span className="text-red-500" aria-label="amour">❤</span>
              et beaucoup de ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Link Component
interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-background dark:bg-background-dark border border-gray-200 dark:border-gray-700 flex items-center justify-center text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:border-accent dark:hover:border-accent-dark transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// Icon Components
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}
