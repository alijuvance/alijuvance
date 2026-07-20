import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageContext';
import { Preloader } from '@/components/Preloader';
import './globals.css';

/**
 * Inter font - Modern, professional sans-serif
 * Optimized loading with Next.js font system
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * SEO Metadata Configuration
 * Optimized for search engines and social sharing
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://alijuvance.com'), // Adjust URL to the real domain if known, this is standard
  title: 'Ali Juvance | Senior Fullstack Developer & Architecte Système',
  description:
    'Portfolio d\'Ali Juvance, Développeur Fullstack Senior avec +10 ans d\'expérience. Expert en architecture logicielle, Backend, Frontend et DevOps.',
  keywords: [
    'Ali Juvance',
    'Développeur Fullstack',
    'Senior Developer',
    'Architecte Logiciel',
    'React',
    'Node.js',
    'TypeScript',
    'Microservices',
    'DevOps',
  ],
  authors: [{ name: 'Ali Juvance' }],
  creator: 'Ali Juvance',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://alijuvance.com',
    title: 'Ali Juvance | Senior Fullstack Developer',
    description:
      'Je transforme des défis techniques complexes en solutions business scalables et performantes.',
    siteName: 'Portfolio Ali Juvance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Juvance Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Juvance | Senior Fullstack Developer',
    description:
      'Je transforme des défis techniques complexes en solutions business scalables et performantes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`dark ${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background-dark">
        <Preloader />
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
