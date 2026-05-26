import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
      }}
    >
      {/* Glow trail effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
          filter: 'blur(4px)',
          opacity: 0.6,
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
