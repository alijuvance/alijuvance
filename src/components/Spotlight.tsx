'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';

/**
 * Spotlight Component
 * Adds a spotlight effect that follows the mouse cursor.
 * Inspired by Aceternity UI / Stripe.
 */

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  fill?: string;
}

export function Spotlight({ children, className = "", fill = "rgba(255, 255, 255, 0.1)" }: SpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
