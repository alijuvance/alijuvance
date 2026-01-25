'use client';

import { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Command Palette Component (Cmd+K / Ctrl+K)
 * Global modal for quick navigation and actions
 * Uses cmdk library for keyboard navigation
 */

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Email to copy
  const email = 'contact@example.com';

  // Toggle command palette with Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to section
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  }, []);

  // Copy email to clipboard
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1500);
    } catch {
      console.error('Failed to copy email');
    }
  }, [email]);

  // Download CV
  const downloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_Senior_Fullstack_Developer.pdf';
    link.click();
    setOpen(false);
  }, []);

  const items: CommandItem[] = [
    {
      id: 'home',
      label: 'Accueil',
      icon: <HomeIcon />,
      action: () => scrollTo('hero'),
      keywords: ['accueil', 'home', 'top'],
    },
    {
      id: 'expertise',
      label: 'Expertise',
      icon: <SparklesIcon />,
      action: () => scrollTo('expertise'),
      keywords: ['skills', 'competences'],
    },
    {
      id: 'projects',
      label: 'Projets',
      icon: <FolderIcon />,
      action: () => scrollTo('projects'),
      keywords: ['work', 'portfolio', 'cases'],
    },
    {
      id: 'experience',
      label: 'Parcours',
      icon: <BriefcaseIcon />,
      action: () => scrollTo('experience'),
      keywords: ['timeline', 'career'],
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <MailIcon />,
      action: () => scrollTo('contact'),
      keywords: ['email', 'message'],
    },
    {
      id: 'cv',
      label: 'Télécharger CV',
      icon: <DownloadIcon />,
      action: downloadCV,
      keywords: ['resume', 'pdf', 'download'],
    },
    {
      id: 'copy-email',
      label: copied ? 'Email copié !' : 'Copier Email',
      icon: copied ? <CheckIcon /> : <CopyIcon />,
      action: copyEmail,
      keywords: ['clipboard', 'email'],
    },
  ];

  return (
    <>
      {/* Keyboard Shortcut Hint Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-secondary dark:text-secondary-dark bg-surface dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        aria-label="Ouvrir le menu de commandes (Ctrl+K)"
      >
        <SearchIcon className="w-4 h-4" />
        <span className="text-xs">Ctrl+K</span>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50 p-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              <Command
                className="bg-background dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                label="Menu de commandes"
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <SearchIcon className="w-5 h-5 text-secondary dark:text-secondary-dark" />
                  <Command.Input
                    placeholder="Rechercher une action..."
                    className="flex-1 bg-transparent text-primary dark:text-primary-dark placeholder-secondary dark:placeholder-secondary-dark outline-none"
                  />
                  <kbd className="px-2 py-1 text-xs text-secondary dark:text-secondary-dark bg-surface dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded">
                    ESC
                  </kbd>
                </div>

                {/* Command List */}
                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-secondary dark:text-secondary-dark">
                    Aucun résultat trouvé.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="mb-2">
                    {items.slice(0, 5).map((item) => (
                      <Command.Item
                        key={item.id}
                        value={item.label + ' ' + (item.keywords?.join(' ') || '')}
                        onSelect={item.action}
                        className="flex items-center gap-3 px-3 py-2.5 text-primary dark:text-primary-dark rounded-lg cursor-pointer data-[selected=true]:bg-accent/10 dark:data-[selected=true]:bg-accent-dark/10 transition-colors"
                      >
                        <span className="w-5 h-5 text-secondary dark:text-secondary-dark">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading="Actions" className="border-t border-gray-100 dark:border-gray-800 pt-2">
                    {items.slice(5).map((item) => (
                      <Command.Item
                        key={item.id}
                        value={item.label + ' ' + (item.keywords?.join(' ') || '')}
                        onSelect={item.action}
                        className="flex items-center gap-3 px-3 py-2.5 text-primary dark:text-primary-dark rounded-lg cursor-pointer data-[selected=true]:bg-accent/10 dark:data-[selected=true]:bg-accent-dark/10 transition-colors"
                      >
                        <span className="w-5 h-5 text-secondary dark:text-secondary-dark">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Icon Components
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-full h-full text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
