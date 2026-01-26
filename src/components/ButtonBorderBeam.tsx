'use client';

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function ButtonBorderBeam({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-white dark:bg-black px-6 py-3 text-sm font-medium text-black dark:text-white backdrop-blur-3xl transition-colors hover:bg-gray-100 dark:hover:bg-zinc-900 border border-transparent">
        {children}
      </span>
    </button>
  );
}
