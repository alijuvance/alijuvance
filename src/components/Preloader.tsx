'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already visited in this session to prevent annoyance on refresh
    const hasVisited = sessionStorage.getItem('portfolio_visited');

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Simulate loading time (Set to 5s as requested)
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('portfolio_visited', 'true');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          {/* Waveform Container */}
          <div className="relative flex items-center justify-center gap-2 h-40">
            {[
              { height: [10, 20, 10], delay: 0 },
              { height: [20, 60, 20], delay: 0.1 },
              { height: [30, 80, 30], delay: 0.2 },
              { height: [40, 100, 40], delay: 0.3 }, // Center
              { height: [30, 80, 30], delay: 0.2 },
              { height: [20, 60, 20], delay: 0.1 },
              { height: [10, 20, 10], delay: 0 },
            ].map((bar, i) => (
              <motion.div
                key={i}
                className="w-2 md:w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,50,50,0.6)]"
                initial={{ height: 10, opacity: 0.3 }}
                animate={{
                  height: bar.height,
                  opacity: [0.3, 1, 0.3],
                  background: [
                    'rgba(255, 255, 255, 0.3)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 0.3)',
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                  delay: bar.delay,
                }}
              />
            ))}
          </div>

          {/* Text Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-white/50 font-mono text-shadow-red">
              INITIALIZING
            </h2>
            <style jsx global>{`
              .text-shadow-red {
                text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
              }
            `}</style>
            
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100px', opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-4 mx-auto"
            />
          </motion.div>

          {/* Background Atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
