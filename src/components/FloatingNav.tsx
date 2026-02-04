import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

/**
 * Floating Navigation Component - "Pill" Style
 * Centered, detached navigation bar typical of modern SaaS designs
 */

const tabAngles: Record<string, number> = {
  'about': 30,
  'experience': 60,
  'projects': 90,
  'skills': 120,
  'education': 150,
  'contact': 180,
};

export function FloatingNav() {
  const [activeTab, setActiveTab] = useState('about');
  const { theme } = useTheme(); // Always 'dark'
  const { t, language } = useLanguage(); // Use language hook
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(180);

  useEffect(() => setMounted(true), []);

  // Dynamic Nav Links based on language
  const navLinks = [
    { id: 'about', label: t('nav.about'), href: '#about', icon: <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'experience', label: t('nav.experience'), href: '#experience', icon: <CompassIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'projects', label: t('nav.projects'), href: '#projects', icon: <LayersIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'skills', label: t('nav.skills'), href: '#skills', icon: <LightningIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'education', label: t('nav.education'), href: '#education', icon: <EducationIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'contact', label: t('nav.contact'), href: '#contact', icon: <SendIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Calculate rotation
    const targetAngle = tabAngles[tabId] ?? 0;
    
    setRotation(prev => {
        const currentEffective = prev % 360;
        const delta = (targetAngle - currentEffective + 360) % 360;
        return prev + 360 + delta;
    });
  };

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 300; // Trigger point (approx 1/3 viewport)

      // Get valid sections from navLinks
      const sections = navLinks
        .map(link => ({ id: link.id, element: document.getElementById(link.id) }))
        .filter(section => section.element !== null);

      // Find current section
      const currentSection = sections.find(section => {
        const { offsetTop, offsetHeight } = section.element!;
        return scrollY + offset >= offsetTop && scrollY + offset < offsetTop + offsetHeight;
      });

      if (currentSection && currentSection.id !== activeTab) {
        // Update without triggering scroll (just visual state)
        // We replicate handleTabChange logic here to safely use inside effect
        setActiveTab(currentSection.id);
        
        const targetAngle = tabAngles[currentSection.id] ?? 0;
        setRotation(prev => {
           const currentEffective = prev % 360;
           const delta = (targetAngle - currentEffective + 360) % 360;
           // Reduced rotation for scroll to be less dizzying? No, keep consistent.
           return prev + 360 + delta;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, navLinks]); // Re-run if links change (lang) or tab changes (to prevent fighting)

  if (!mounted) return null;

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-auto max-w-[calc(100vw-24px)] z-50">
      <div className="relative flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-lg dark:shadow-2xl">
        {/* Border Beam */}
        <motion.span 
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-0 md:opacity-100" 
        />
        
        <nav className="relative w-full h-full flex items-center gap-0.5 sm:gap-1 p-1 px-1.5 sm:px-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-xl transition-colors">
        
        {/* Navigation Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleTabChange(link.id)}
              className={`relative px-2 py-1.5 sm:px-3 sm:py-2 text-sm font-medium transition-colors rounded-full ${
                activeTab === link.id 
                  ? 'text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black dark:bg-white/10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Mobile: Icon */}
              <span className="relative z-10 block md:hidden">
                {link.icon}
              </span>
              {/* Desktop: Text */}
              <span className="relative z-10 hidden md:block">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-2" />

        {/* Language Switcher (Replaces Theme Toggle) */}
        <LanguageSwitcher />

      </nav>
      </div>
    </div>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-2 8-8 2 2-8 8-2z" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function EducationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}
