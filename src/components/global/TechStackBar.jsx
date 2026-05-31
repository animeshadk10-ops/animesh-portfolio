import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/animations';

const techItems = [
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js', icon: '🟢', color: '#68a063' },
  { name: 'Python', icon: '🐍', color: '#ffd43b' },
  { name: 'AWS', icon: '☁️', color: '#ff9900' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'MongoDB', icon: '🍃', color: '#4db33d' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
  { name: 'Figma', icon: '🎨', color: '#a259ff' },
  { name: 'TensorFlow', icon: '🧠', color: '#ff6f00' },
  { name: 'Git', icon: '📦', color: '#f1502f' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Tailwind', icon: '🌊', color: '#38bdf8' },
  { name: 'GraphQL', icon: '◈', color: '#e535ab' },
  { name: 'Firebase', icon: '🔥', color: '#ffca28' },
  { name: 'Kubernetes', icon: '⎈', color: '#326ce5' },
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
            className="group flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md transition-all duration-300 cursor-default"
            style={{
              background: `linear-gradient(135deg, ${tech.color}0f, rgba(255,255,255,0.04))`,
              border: `1px solid ${tech.color}22`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${tech.color}55`;
              e.currentTarget.style.boxShadow = `0 0 25px ${tech.color}33, inset 0 0 20px ${tech.color}0d`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${tech.color}1a, rgba(255,255,255,0.06))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${tech.color}22`;
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = `linear-gradient(135deg, ${tech.color}0f, rgba(255,255,255,0.04))`;
            }}
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              {tech.icon}
            </span>
            <span
              className="text-sm font-semibold transition-colors duration-300 font-sans"
              style={{ color: `${tech.color}cc` }}
            >
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
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050d1a, #0c1a35, #050d1a)' }}>
      {/* Aurora background */}
      <div className="aurora-bg" style={{ opacity: 0.5 }} />

      {/* Vivid orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#00e5ff] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#7c4dff] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Glow lines */}
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="absolute bottom-0 left-0 right-0 glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#00e5ff] mb-3"
             style={{ textShadow: '0 0 10px rgba(0,229,255,0.4)' }}>
            {'// Tech Arsenal'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white/90">
            Technologies I <span className="gradient-text-cyan">Work With</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #00e5ff, #7c4dff, #ff4081)' }} />
        </motion.div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-5">
          <MarqueeRow items={row1} direction="left" speed={42} />
          <MarqueeRow items={row2} direction="right" speed={48} />
        </div>
      </div>
    </section>
  );
};

export default TechStackBar;
