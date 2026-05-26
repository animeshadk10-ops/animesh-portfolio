import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/animations';

const techItems = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Figma', icon: '🎨' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Git', icon: '📦' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Kubernetes', icon: '⎈' },
];

const row1 = techItems.slice(0, 8);
const row2 = techItems.slice(8, 16);

const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => {
  const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="marquee-fade overflow-hidden">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: animateX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-neon-cyan/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </span>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300 font-sans">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStackBar = () => {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#050d1a' }}>
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Top and bottom glow lines */}
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="absolute bottom-0 left-0 right-0 glow-line" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-neon-cyan/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-neon-purple/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-neon-cyan/60 mb-3">
            // Tech Arsenal
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white/90">
            Technologies I Work With
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full" />
        </motion.div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" speed={45} />
          <MarqueeRow items={row2} direction="right" speed={50} />
        </div>
      </div>
    </section>
  );
};

export default TechStackBar;
