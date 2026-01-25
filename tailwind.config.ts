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
        // Modern Dark Palette (Zinc + Red Accent)
        background: {
          DEFAULT: '#000000', // Pitch black
          dark: '#000000',
        },
        surface: {
          DEFAULT: '#09090b', // Zinc 950
          dark: '#09090b',
          hover: '#18181b', // Zinc 900
        },
        primary: {
          DEFAULT: '#ffffff',
          dark: '#ffffff',
        },
        secondary: {
          DEFAULT: '#a1a1aa', // Zinc 400
          dark: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#ef4444', // Red 500
          glow: 'rgba(239, 68, 68, 0.15)',
        },
        border: {
          DEFAULT: '#27272a', // Zinc 800
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
