import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (elapsed >= duration) {
        clearInterval(interval);
        timeoutId = setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  const letters = "POWERZONE".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex text-white font-heading font-black text-5xl md:text-7xl mb-4 tracking-tight">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.div 
        className="text-[#E50914] text-[11px] tracking-[6px] font-bold uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        EST. 2014
      </motion.div>
      <div className="absolute bottom-[20%] w-64 h-[2px] bg-[#222]">
        <div 
          className="h-full bg-[#E50914] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
