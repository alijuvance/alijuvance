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
  'hero': 0,
  'about': 36,
  'skills': 72,
  'experience': 108,
  'projects': 144,
  'contact': 180,
};

export function FloatingNav() {
  const [activeTab, setActiveTab] = useState('hero');
  const { resolvedTheme, setTheme } = useTheme();
  const { t, language } = useLanguage(); // Use language hook
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(180);

  useEffect(() => setMounted(true), []);

  // Dynamic Nav Links based on language
  const navLinks = [
    { id: 'hero', label: t('nav.home'), href: '#home', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'about', label: t('nav.about'), href: '#about', icon: <UserIcon className="w-5 h-5" /> },
    { id: 'skills', label: t('nav.skills'), href: '#skills', icon: <LightningIcon className="w-5 h-5" /> },
    { id: 'experience', label: t('nav.experience'), href: '#experience', icon: <CompassIcon className="w-5 h-5" /> },
    { id: 'projects', label: t('nav.projects'), href: '#projects', icon: <LayersIcon className="w-5 h-5" /> },
    { id: 'contact', label: t('nav.contact'), href: '#contact', icon: <SendIcon className="w-5 h-5" /> },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Calculate rotation
    const targetAngle = tabAngles[tabId] ?? 0;
    const currentEffective = rotation % 360;
    const delta = (targetAngle - currentEffective + 360) % 360;
    
    setRotation(prev => prev + 360 + delta);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-max max-w-[95vw] z-50">
      <div className="relative flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-lg dark:shadow-2xl">
        {/* Border Beam */}
        <motion.span 
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-0 md:opacity-100" 
        />
        
        <nav className="relative w-full h-full flex items-center gap-1 p-1 pl-2 pr-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-xl transition-colors">
        
        {/* Navigation Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleTabChange(link.id)}
              className={`relative px-3 py-2 md:px-3 md:py-2 text-sm font-medium transition-colors rounded-full ${
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
