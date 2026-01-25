'use client';

import { useEffect } from 'react';

/**
 * Console Easter Egg Component
 * Displays a stylized message for developers who inspect the console
 */

export function ConsoleEasterEgg() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Stylized console message
    const styles = [
      'background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      'color: #22c55e',
      'font-size: 14px',
      'font-weight: bold',
      'padding: 12px 20px',
      'border-radius: 8px',
      'font-family: monospace',
    ].join(';');

    const smallStyles = [
      'color: #64748b',
      'font-size: 12px',
      'font-family: monospace',
    ].join(';');

    console.log('%c 🚀 Hey, fellow developer!', styles);
    console.log('%c Curious about the code? Feel free to reach out!', smallStyles);
    console.log('%c Built with Next.js 14 + TypeScript + Tailwind + Framer Motion', smallStyles);
    console.log('%c ─────────────────────────────────────────────', smallStyles);
  }, []);

  return null;
}
