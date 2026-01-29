import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/ThemeProvider';
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
  title: 'Senior Fullstack Developer & Architecte Système | Portfolio',
  description:
    'Développeur Fullstack Senior avec +10 ans d\'expérience. Je transforme des défis techniques complexes en solutions business scalables et performantes. Expert en architecture logicielle, Backend, Frontend et DevOps.',
  keywords: [
    'Développeur Fullstack',
    'Senior Developer',
    'Architecte Logiciel',
    'React',
    'Node.js',
    'TypeScript',
    'PHP',
    'Java',
    'C#',
    'Microservices',
    'DevOps',
  ],
  authors: [{ name: 'Senior Fullstack Developer' }],
  creator: 'Senior Fullstack Developer',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Senior Fullstack Developer & Architecte Système',
    description:
      'Je transforme des défis techniques complexes en solutions business scalables et performantes.',
    siteName: 'Portfolio - Senior Fullstack Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Fullstack Developer & Architecte Système',
    description:
      'Je transforme des défis techniques complexes en solutions business scalables et performantes.',
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
    <html lang="fr" className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background dark:bg-background-dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
