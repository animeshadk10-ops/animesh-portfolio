import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Cloud, Brain, Sparkles } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
  scaleIn,
} from '../../utils/animations';

const services = [
  {
    title: 'Full-Stack Development',
    description:
      'Building end-to-end web applications with modern frameworks, REST APIs, and robust database architectures that scale effortlessly.',
    icon: Code2,
    color: '#00d4ff',
    colorName: 'cyan',
    tags: ['React', 'Node.js', 'MongoDB', 'Next.js', 'Express'],
    gradient: 'from-[#00d4ff] to-[#0ea5e9]',
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting pixel-perfect interfaces with intuitive user flows, micro-interactions, and design systems that delight users at every touchpoint.',
    icon: Palette,
    color: '#a855f7',
    colorName: 'purple',
    tags: ['Figma', 'Tailwind', 'Framer Motion', 'Design Systems'],
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    title: 'Cloud Architecture',
    description:
      'Designing scalable cloud infrastructure with containerized deployments, CI/CD pipelines, and serverless computing on major platforms.',
    icon: Cloud,
    color: '#f97316',
    colorName: 'orange',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    gradient: 'from-[#f97316] to-[#ea580c]',
  },
  {
    title: 'AI & ML Solutions',
    description:
      'Developing intelligent systems with deep learning, NLP, and computer vision — turning raw data into actionable insights and smart products.',
    icon: Brain,
    color: '#ec4899',
    colorName: 'magenta',
    tags: ['TensorFlow', 'Python', 'NLP', 'OpenCV', 'Pandas'],
    gradient: 'from-[#ec4899] to-[#db2777]',
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
        style={{
          background: `linear-gradient(135deg, ${service.color}40, ${service.color}80, ${service.color}40)`,
        }}
      />

      {/* Card */}
      <div
        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full"
        style={{
          boxShadow: isHovered
            ? `0 20px 60px ${service.color}15, 0 0 40px ${service.color}10`
            : 'none',
        }}
      >
        {/* Shimmer overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${service.color}08 0%, transparent 70%)`,
          }}
        />

        {/* Icon container */}
        <motion.div
          animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: `${service.color}12`,
            boxShadow: isHovered
              ? `0 0 30px ${service.color}30, 0 0 60px ${service.color}10`
              : `0 0 15px ${service.color}10`,
          }}
        >
          <Icon
            size={28}
            style={{ color: service.color }}
            strokeWidth={1.8}
          />
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              border: `1px solid ${service.color}40`,
            }}
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6 relative z-10">
          {service.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-3 py-1 rounded-full border transition-all duration-300"
              style={{
                color: isHovered ? service.color : 'rgba(255,255,255,0.4)',
                borderColor: isHovered
                  ? `${service.color}30`
                  : 'rgba(255,255,255,0.08)',
                background: isHovered
                  ? `${service.color}08`
                  : 'rgba(255,255,255,0.02)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${service.color}12, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden bg-brand-bg"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Animated gradient orb */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary orb */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(236,72,153,0.05) 0%, rgba(249,115,22,0.03) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-white/60 tracking-wider uppercase">
              <Sparkles size={12} className="text-neon-cyan" />
              What I Do
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5"
          >
            <span className="text-white">Services I </span>
            <span className="gradient-text-cyan">Provide</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From crafting elegant interfaces to architecting scalable backends —
            I bring ideas to life with clean code and thoughtful design.
          </motion.p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </motion.div>

        {/* Bottom tagline with dividers */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex items-center gap-6 mt-16 justify-center"
        >
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-white/30 text-sm font-medium tracking-wider uppercase whitespace-nowrap">
            Building the future, one commit at a time
          </p>
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
