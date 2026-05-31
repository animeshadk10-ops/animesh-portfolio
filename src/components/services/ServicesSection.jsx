import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Cloud, Brain, Sparkles, ArrowRight } from 'lucide-react';
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
    color: '#00e5ff',
    tags: ['React', 'Node.js', 'MongoDB', 'Next.js', 'Express'],
    gradientBg: 'linear-gradient(135deg, #00e5ff, #0091ea)',
    gradientBorder: 'linear-gradient(135deg, #00e5ff, #40c4ff, #00e5ff)',
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting pixel-perfect interfaces with intuitive user flows, micro-interactions, and design systems that delight users at every touchpoint.',
    icon: Palette,
    color: '#7c4dff',
    tags: ['Figma', 'Tailwind', 'Framer Motion', 'Design Systems'],
    gradientBg: 'linear-gradient(135deg, #7c4dff, #b388ff)',
    gradientBorder: 'linear-gradient(135deg, #7c4dff, #ea80fc, #7c4dff)',
  },
  {
    title: 'Cloud Architecture',
    description:
      'Designing scalable cloud infrastructure with containerized deployments, CI/CD pipelines, and serverless computing on major platforms.',
    icon: Cloud,
    color: '#ff6d00',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    gradientBg: 'linear-gradient(135deg, #ff6d00, #ffab00)',
    gradientBorder: 'linear-gradient(135deg, #ff6d00, #ffd600, #ff6d00)',
  },
  {
    title: 'AI & ML Solutions',
    description:
      'Developing intelligent systems with deep learning, NLP, and computer vision — turning raw data into actionable insights and smart products.',
    icon: Brain,
    color: '#ff4081',
    tags: ['TensorFlow', 'Python', 'NLP', 'OpenCV', 'Pandas'],
    gradientBg: 'linear-gradient(135deg, #ff4081, #ea80fc)',
    gradientBorder: 'linear-gradient(135deg, #ff4081, #ff80ab, #ff4081)',
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
      {/* THICK animated gradient border — 4px, VISIBLE */}
      <div
        className="absolute -inset-[4px] rounded-2xl transition-opacity duration-500"
        style={{
          background: service.gradientBorder,
          opacity: isHovered ? 1 : 0,
          filter: 'blur(1px)',
        }}
      />
      {/* Inner background to mask the border and show it as a ring */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: isHovered ? '#0a1530' : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Card body */}
      <div
        className="relative rounded-2xl p-8 transition-all duration-500 overflow-hidden h-full"
        style={{
          background: isHovered
            ? `linear-gradient(160deg, ${service.color}18, #0c1a3590, ${service.color}08)`
            : 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          border: isHovered ? `1px solid ${service.color}50` : '1px solid rgba(255,255,255,0.08)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered
            ? `0 20px 60px ${service.color}30, 0 0 40px ${service.color}15`
            : '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        {/* Colorful shimmer on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, ${service.color}20 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Icon container — colorful gradient bg, large glow */}
        <motion.div
          animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: service.gradientBg,
            boxShadow: isHovered
              ? `0 0 30px ${service.color}66, 0 0 60px ${service.color}33`
              : `0 0 20px ${service.color}44`,
          }}
        >
          <Icon
            size={32}
            style={{ color: '#fff' }}
            strokeWidth={2}
          />
          {/* Pulsing glow ring */}
          <div
            className="absolute inset-0 rounded-xl animate-pulse"
            style={{
              border: `2px solid ${service.color}60`,
              opacity: isHovered ? 1 : 0.5,
            }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="text-xl font-display font-bold text-white mb-3 relative z-10"
          style={{
            textShadow: isHovered ? `0 0 20px ${service.color}40` : 'none',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-6 relative z-10">
          {service.description}
        </p>

        {/* Tech tags — colored backgrounds */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
              style={{
                color: isHovered ? '#fff' : service.color,
                background: isHovered
                  ? `${service.color}30`
                  : `${service.color}15`,
                border: `1px solid ${service.color}40`,
                textShadow: isHovered ? `0 0 8px ${service.color}60` : 'none',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Corner accent glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${service.color}25, transparent 70%)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Bottom corner accent */}
        <div
          className="absolute bottom-0 left-0 w-24 h-24 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 0% 100%, ${service.color}15, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
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
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #030b17 0%, #0c1a35 50%, #030b17 100%)',
      }}
    >
      {/* Aurora animated mesh */}
      <div className="aurora-bg" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* ORB 1 — Cyan — large vivid */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-1/4 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(0,229,255,0.06) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 2 — Purple */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,77,255,0.15) 0%, rgba(124,77,255,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 3 — Magenta/Orange */}
      <motion.div
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,64,129,0.14) 0%, rgba(255,109,0,0.08) 40%, transparent 70%)',
          filter: 'blur(55px)',
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
          {/* Color badge pill */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <span className="color-badge inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#00e5ff]" />
              What I Do
            </span>
          </motion.div>

          {/* LARGE heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5"
          >
            <span className="text-white" style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}>
              Services I{' '}
            </span>
            <span className="gradient-text-cyan" style={{ textShadow: '0 0 40px rgba(0,229,255,0.3)' }}>
              Provide
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 0 10px rgba(0,229,255,0.08)' }}
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

        {/* Bottom tagline with COLORFUL gradient divider lines */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex items-center gap-6 mt-16 justify-center"
        >
          <div
            className="h-[2px] w-16 md:w-32"
            style={{
              background: 'linear-gradient(90deg, transparent, #00e5ff, #7c4dff)',
            }}
          />
          <p
            className="text-white/50 text-sm font-semibold tracking-wider uppercase whitespace-nowrap"
            style={{ textShadow: '0 0 15px rgba(0,229,255,0.2)' }}
          >
            Building the future, one commit at a time
          </p>
          <div
            className="h-[2px] w-16 md:w-32"
            style={{
              background: 'linear-gradient(90deg, #ff4081, #ff6d00, transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
