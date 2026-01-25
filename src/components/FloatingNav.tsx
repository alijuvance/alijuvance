'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating Navigation Component - "Pill" Style
 * Centered, detached navigation bar typical of modern SaaS designs
 */

const navLinks = [
  { label: 'Maison', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Travail', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const [activeTab, setActiveTab] = useState('Maison');

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-max z-50">
      <nav className="flex items-center gap-1 p-1 pr-2 rounded-full bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border border-border/50 shadow-2xl">
        
        {/* Navigation Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveTab(link.label)}
              className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {activeTab === link.label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:contact@example.com"
          className="ml-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
        >
          Réserver un appel
        </a>
      </nav>
    </div>
  );
}
