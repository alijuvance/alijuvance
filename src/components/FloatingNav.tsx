'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

/**
 * Floating Navigation Component - "Pill" Style
 * Centered, detached navigation bar typical of modern SaaS designs
 */

const navLinks = [
  { label: 'Maison', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const [activeTab, setActiveTab] = useState('Maison');
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-max z-50">
      <nav className="flex items-center gap-1 p-1 pl-2 pr-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl transition-colors">
        
        {/* Navigation Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveTab(link.label)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                activeTab === link.label 
                  ? 'text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {activeTab === link.label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black dark:bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          aria-label="Toggle Theme"
        >
          {resolvedTheme === 'dark' ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>

        {/* CTA Button */}
        <a
          href="mailto:contact@example.com"
          className="ml-2 px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
        >
          Contact
        </a>
      </nav>
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
