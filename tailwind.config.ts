import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Palette (Light = Swiss Design, Dark = Modern Bento)
        background: {
          DEFAULT: '#ffffff',
          dark: '#000000',
        },
        surface: {
          DEFAULT: '#f4f4f5', // Zinc 100
          dark: '#09090b', // Zinc 950
          hover: '#e4e4e7', // Zinc 200
          'dark-hover': '#18181b', // Zinc 900
        },
        primary: {
          DEFAULT: '#18181b', // Zinc 900
          dark: '#ffffff',
        },
        secondary: {
          DEFAULT: '#71717a', // Zinc 500
          dark: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#ef4444', // Red 500
          dark: '#ef4444',
          glow: 'rgba(239, 68, 68, 0.15)',
        },
        border: {
          DEFAULT: '#e4e4e7', // Zinc 200
          dark: '#27272a', // Zinc 800
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        title: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'], // New Title Font
        mono: ['var(--font-geist-mono)', 'monospace'], // Updated to Geist Mono
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
