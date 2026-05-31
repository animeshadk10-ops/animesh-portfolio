import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Monitor, Brain, Sparkles, Code2, Server, Cloud, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations';

/* ─── Feature Cards Data ─── */
const features = [
  {
    icon: Zap,
    title: 'Fast',
    description: 'Blazing performance with optimized code and modern frameworks across all platforms.',
    color: '#ffd600',
  },
  {
    icon: Monitor,
    title: 'Responsive',
    description: 'Adaptive layouts designed to work flawlessly from mobile to ultra-wide displays.',
    color: '#00e5ff',
  },
  {
    icon: Brain,
    title: 'Intuitive',
    description: 'User-friendly interfaces built on deep understanding of human interaction patterns.',
    color: '#b388ff',
  },
  {
    icon: Sparkles,
    title: 'Dynamic',
    description: 'Engaging animations and micro-interactions that bring interfaces to life.',
    color: '#ff4081',
  },
];

/* ─── Skills Data ─── */
const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    color: '#00e5ff',
    gradientBar: 'linear-gradient(90deg, #00e5ff, #40c4ff, #00b0ff)',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    color: '#7c4dff',
    gradientBar: 'linear-gradient(90deg, #7c4dff, #b388ff, #ea80fc)',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: '#ff6d00',
    gradientBar: 'linear-gradient(90deg, #ff6d00, #ffab00, #ffd600)',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    name: 'AI / ML',
    icon: Cpu,
    color: '#ff4081',
    gradientBar: 'linear-gradient(90deg, #ff4081, #ff80ab, #ea80fc)',
    skills: [
      { name: 'TensorFlow', level: 65 },
      { name: 'NLP', level: 60 },
      { name: 'Computer Vision', level: 55 },
      { name: 'Data Analysis', level: 70 },
    ],
  },
];

/* ─── Animated Skill Bar ─── */
const SkillBar = ({ name, level, color, gradientBar, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <motion.span
          className="text-sm font-mono font-bold"
          style={{
            color,
            textShadow: `0 0 12px ${color}60`,
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay * 0.1 + 0.8 }}
        >
          {inView ? level : 0}%
        </motion.span>
      </div>
      <div
        className="h-3 rounded-full overflow-hidden relative"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: gradientBar,
            boxShadow: `0 0 12px ${color}88, 0 0 24px ${color}44`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow trail on bar end */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
            style={{
              backgroundColor: color,
              filter: 'blur(6px)',
              opacity: 0.8,
            }}
          />
          {/* Shimmer across bar */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s ease-in-out infinite',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0c1a35 0%, #071428 50%, #0c1a35 100%)',
      }}
    >
      {/* Aurora animated bg */}
      <div className="aurora-bg" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* ORB 1 — Cyan top-left */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 2 — Purple right */}
      <motion.div
        animate={{
          x: [0, -40, 35, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,77,255,0.14) 0%, rgba(124,77,255,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 3 — Magenta/Orange bottom */}
      <motion.div
        animate={{
          x: [0, 35, -45, 0],
          y: [0, -25, 35, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,64,129,0.13) 0%, rgba(255,109,0,0.06) 40%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <span className="color-badge inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#b388ff]" />
              Skills & Expertise
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 font-display"
          >
            <span style={{ textShadow: '0 0 20px rgba(255,255,255,0.08)' }}>My </span>
            <span className="gradient-text-purple" style={{ textShadow: '0 0 40px rgba(124,77,255,0.3)' }}>
              Skills
            </span>
            <span style={{ textShadow: '0 0 20px rgba(255,255,255,0.08)' }}> & Development</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/45 max-w-2xl mx-auto text-lg"
            style={{ textShadow: '0 0 8px rgba(124,77,255,0.08)' }}
          >
            A snapshot of my technical toolkit and areas of expertise
          </motion.p>
        </motion.div>

        {/* Feature cards — each with colored gradient TOP border (4px) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: `0 12px 40px ${feature.color}25`,
              }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-default"
              style={{
                background: `linear-gradient(170deg, ${feature.color}10, rgba(255,255,255,0.04), ${feature.color}05)`,
                border: `1px solid ${feature.color}20`,
              }}
            >
              {/* 4px colored gradient TOP border */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{
                  background: `linear-gradient(90deg, ${feature.color}, ${feature.color}aa, ${feature.color})`,
                  boxShadow: `0 0 15px ${feature.color}50`,
                }}
              />

              <div className="p-6 text-center">
                {/* Icon with large colored glow */}
                <div
                  className="inline-flex p-4 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}10)`,
                    border: `1px solid ${feature.color}35`,
                    boxShadow: `0 0 25px ${feature.color}55`,
                  }}
                >
                  <feature.icon
                    size={28}
                    style={{
                      color: feature.color,
                      filter: `drop-shadow(0 0 8px ${feature.color}80)`,
                    }}
                  />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2 font-display"
                  style={{ textShadow: `0 0 12px ${feature.color}20` }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              whileHover={{
                boxShadow: `0 8px 40px ${category.color}15`,
              }}
              className="relative rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: `linear-gradient(160deg, ${category.color}08, rgba(255,255,255,0.05), ${category.color}05)`,
                backdropFilter: 'blur(24px)',
                border: `1px solid ${category.color}18`,
              }}
            >
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
                }}
              />

              <div className="p-6">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}25, ${category.color}10)`,
                      border: `1px solid ${category.color}30`,
                      boxShadow: `0 0 18px ${category.color}40`,
                    }}
                  >
                    <category.icon
                      size={20}
                      style={{
                        color: category.color,
                        filter: `drop-shadow(0 0 4px ${category.color}60)`,
                      }}
                    />
                  </div>
                  <h3
                    className="text-white font-bold font-display text-lg"
                    style={{ textShadow: `0 0 10px ${category.color}15` }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    gradientBar={category.gradientBar}
                    delay={catIdx * 2 + skillIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
