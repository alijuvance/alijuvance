'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Terminal Component
 * Displays code snippets in a terminal-like interface
 * Features typing animation and copy functionality
 */

interface TerminalProps {
  title?: string;
  children: ReactNode;
  language?: string;
}

export function Terminal({ title = 'terminal', children, language = 'bash' }: TerminalProps) {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopy = async () => {
    const text = typeof children === 'string' ? children : '';
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        console.error('Failed to copy');
      }
    }
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-gray-900 shadow-2xl"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-white/5">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* Title */}
          <span className="ml-2 text-sm text-gray-400 font-mono">{title}</span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-gray-400 hover:text-white rounded transition-colors"
          aria-label="Copier le code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-green-400 flex items-center gap-1"
              >
                <CheckIcon className="w-4 h-4" />
                Copié!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1"
              >
                <CopyIcon className="w-4 h-4" />
                Copier
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm text-green-400 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>{children}</code>
        </pre>
      </div>
    </motion.div>
  );
}

/**
 * Terminal Line Component
 * Individual line with optional prompt
 */
interface TerminalLineProps {
  prompt?: string;
  children: ReactNode;
  delay?: number;
}

export function TerminalLine({ prompt = '$', children, delay = 0 }: TerminalLineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: prefersReducedMotion ? 0 : delay }}
    >
      <span className="text-blue-400 mr-2 select-none">{prompt}</span>
      <span className="text-green-400">{children}</span>
    </motion.div>
  );
}

/**
 * Code Block with Terminal Style
 */
interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">{filename || language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? 'Copié!' : 'Copier'}
        </button>
      </div>

      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-gray-300">{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Icons
function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
