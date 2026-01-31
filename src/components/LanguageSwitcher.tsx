'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-gray-100 dark:bg-zinc-900 rounded-full p-1 h-9 shadow-inner border border-gray-200 dark:border-white/5">
      {/* Sliding Background */}
      <motion.div
        className="absolute h-7 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-black/5 dark:border-white/10"
        layoutId="active-lang"
        initial={false}
        animate={{
          width: 36, // Width of the selection box
          x: language === 'fr' ? 0 : 36 // Position based on current lang
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      {/* FR Button */}
      <button
        onClick={() => setLanguage('fr')}
        className={`relative z-10 w-9 h-full flex items-center justify-center text-[11px] font-bold tracking-wider transition-colors duration-200 ${
          language === 'fr' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 hover:text-gray-600 dark:text-zinc-500 dark:hover:text-zinc-300'
        }`}
      >
        FR
      </button>

      {/* EN/AG Button */}
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-9 h-full flex items-center justify-center text-[11px] font-bold tracking-wider transition-colors duration-200 ${
          language === 'en' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 hover:text-gray-600 dark:text-zinc-500 dark:hover:text-zinc-300'
        }`}
      >
        AG
      </button>
    </div>
  );
}
