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
    color: '#facc15',
    glow: 'rgba(250, 204, 21, 0.15)',
  },
  {
    icon: Monitor,
    title: 'Responsive',
    description: 'Adaptive layouts designed to work flawlessly from mobile to ultra-wide displays.',
    color: '#00d4ff',
    glow: 'rgba(0, 212, 255, 0.15)',
  },
  {
    icon: Brain,
    title: 'Intuitive',
    description: 'User-friendly interfaces built on deep understanding of human interaction patterns.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: Sparkles,
    title: 'Dynamic',
    description: 'Engaging animations and micro-interactions that bring interfaces to life.',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.15)',
  },
];

/* ─── Skills Data ─── */
const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    color: '#00d4ff',
    gradient: 'from-[#00d4ff] to-[#0ea5e9]',
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
    color: '#a855f7',
    gradient: 'from-[#a855f7] to-[#7c3aed]',
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
    color: '#f97316',
    gradient: 'from-[#f97316] to-[#ea580c]',
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
    color: '#ec4899',
    gradient: 'from-[#ec4899] to-[#db2777]',
    skills: [
      { name: 'TensorFlow', level: 65 },
      { name: 'NLP', level: 60 },
      { name: 'Computer Vision', level: 55 },
      { name: 'Data Analysis', level: 70 },
    ],
  },
];

/* ─── Animated Skill Bar ─── */
const SkillBar = ({ name, level, color, gradient, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>
          {inView ? level : 0}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow effect on bar end */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-md"
            style={{ backgroundColor: color, opacity: 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/20 bg-neon-purple/5 mb-4"
          >
            <Sparkles size={14} className="text-neon-purple" />
            <span className="text-neon-purple text-sm font-medium">Skills & Expertise</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            My <span className="gradient-text-purple">Skills</span> & Development
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/40 max-w-2xl mx-auto text-lg">
            A snapshot of my technical toolkit and areas of expertise
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group p-6 rounded-2xl glass-card hover-lift text-center transition-all duration-500"
              style={{
                '--glow': feature.glow,
              }}
              whileHover={{
                boxShadow: `0 8px 40px ${feature.glow}`,
              }}
            >
              <div
                className="inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-display">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
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
              className="p-6 rounded-2xl glass-card"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: `${category.color}15`,
                    border: `1px solid ${category.color}25`,
                  }}
                >
                  <category.icon size={18} style={{ color: category.color }} />
                </div>
                <h3 className="text-white font-bold font-display text-lg">{category.name}</h3>
              </div>

              {/* Skills */}
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  gradient={category.gradient}
                  delay={catIdx * 2 + skillIdx}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
