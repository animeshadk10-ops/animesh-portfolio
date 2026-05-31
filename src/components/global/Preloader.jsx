import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading'); // loading -> reveal -> done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress
    const duration = 2200;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setPhase('reveal'), 300);
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 1200);
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  const name = 'ANIMESH';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#020810' }}
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full blur-[100px]"
            style={{ background: 'rgba(0, 212, 255, 0.08)' }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 80, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full blur-[80px]"
            style={{ background: 'rgba(168, 85, 247, 0.06)' }}
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 60, -40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Name letters with stagger */}
            <div className="flex items-center mb-8">
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-5xl sm:text-7xl font-display font-black tracking-[0.15em]"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #a855f7, #ec4899)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                    filter: `drop-shadow(0 0 ${20 + i * 5}px rgba(0, 212, 255, 0.3))`,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-white/30 text-xs sm:text-sm tracking-[0.4em] uppercase font-medium mb-12"
            >
              Creative Developer & Designer
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="relative"
            >
              <div className="w-[200px] h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
                    boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                  }}
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-12 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono"
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 left-6 text-white/15 text-[10px] font-mono tracking-widest"
          >
            PORTFOLIO.v2
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 right-6 text-white/15 text-[10px] font-mono tracking-widest"
          >
            © 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
