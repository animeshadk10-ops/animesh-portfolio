import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Download,
  Code2,
  Layout,
  Globe,
  Zap,
  Coffee,
  Sparkles,
} from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  viewportConfig,
  scaleIn,
} from '../../utils/animations';
import aboutImg from '../../assets/images/animesh3.jpeg';

/* ---- Animated counter hook ---- */
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
};

const stats = [
  { value: '10', suffix: '+', label: 'Projects', color: '#00e5ff' },
  { value: '3', suffix: '+', label: 'Years', color: '#7c4dff' },
  { value: '5', suffix: '+', label: 'Tech Stacks', color: '#ff6d00' },
  { value: '∞', suffix: '', label: 'Curiosity', color: '#ff4081' },
];

const StatItem = ({ value, suffix = '+', label, color }) => {
  const isInfinity = value === '∞';
  const { count, ref } = useCounter(isInfinity ? 0 : parseInt(value));

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="flex flex-col items-center gap-1.5 p-4 rounded-xl transition-all duration-300 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 20px ${color}15`,
      }}
    >
      <span
        className="text-3xl font-display font-black"
        style={{
          color,
          textShadow: `0 0 25px ${color}60, 0 0 50px ${color}30`,
        }}
      >
        {isInfinity ? '∞' : `${count}${suffix}`}
      </span>
      <span className="text-white/50 text-[10px] font-semibold tracking-wider uppercase text-center leading-tight">
        {label}
      </span>
    </motion.div>
  );
};

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Readable, maintainable, and well-documented',
    color: '#00e5ff',
  },
  {
    icon: Layout,
    title: 'System Design',
    desc: 'Scalable architectures from day one',
    color: '#7c4dff',
  },
  {
    icon: Globe,
    title: 'Web3 Curious',
    desc: 'Exploring decentralized frontiers',
    color: '#ff6d00',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    desc: 'Adapting to new stacks in record time',
    color: '#ff4081',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #071428 0%, #0a0f2e 50%, #071428 100%)',
      }}
    >
      {/* Aurora animated bg */}
      <div className="aurora-bg" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* ORB 1 — Vivid Cyan top-left */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-5 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.16) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 2 — Vivid Purple bottom-right */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -25, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-5 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,77,255,0.15) 0%, rgba(124,77,255,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ORB 3 — Magenta center */}
      <motion.div
        animate={{
          x: [0, 25, -35, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,64,129,0.12) 0%, rgba(255,64,129,0.04) 40%, transparent 70%)',
          filter: 'blur(70px)',
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
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <span className="color-badge inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#00e5ff]" />
              Get to Know Me
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
          >
            <span className="text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.08)' }}>
              Who is{' '}
            </span>
            <span className="gradient-text-cyan" style={{ textShadow: '0 0 40px rgba(0,229,255,0.3)' }}>
              Animesh
            </span>
            <span
              className="text-[#00e5ff]"
              style={{ textShadow: '0 0 20px rgba(0,229,255,0.5)' }}
            >
              ?
            </span>
          </motion.h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left side — 2/5 */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col items-center"
          >
            {/* Photo container with THICK animated rainbow border */}
            <motion.div variants={scaleIn} className="relative mb-8 group">
              {/* Animated spinning rainbow ring — THICK 4px */}
              <div
                className="absolute -inset-[5px] rounded-2xl z-0"
                style={{
                  background:
                    'conic-gradient(from 0deg, #00e5ff, #7c4dff, #ff4081, #ff6d00, #ffd600, #00e676, #00e5ff)',
                  animation: 'spin-slow 5s linear infinite',
                }}
              />
              {/* Outer glow of the border */}
              <div
                className="absolute -inset-[8px] rounded-2xl z-[-1]"
                style={{
                  background:
                    'conic-gradient(from 0deg, #00e5ff, #7c4dff, #ff4081, #ff6d00, #ffd600, #00e676, #00e5ff)',
                  animation: 'spin-slow 5s linear infinite',
                  filter: 'blur(12px)',
                  opacity: 0.5,
                }}
              />
              {/* Inner mask bg */}
              <div
                className="absolute inset-[1px] rounded-2xl z-[1]"
                style={{ background: '#0a0f2e' }}
              />

              {/* Image */}
              <div className="relative z-[2] rounded-2xl overflow-hidden w-72 h-80">
                <img
                  src={aboutImg}
                  alt="Animesh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/70 via-transparent to-transparent" />
              </div>

              {/* Location badge — Cyan glow */}
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl text-xs font-bold"
                style={{
                  background: 'rgba(0,229,255,0.12)',
                  border: '1px solid rgba(0,229,255,0.35)',
                  color: '#00e5ff',
                  boxShadow: '0 0 20px rgba(0,229,255,0.25)',
                }}
              >
                <MapPin size={14} />
                India
              </motion.div>

              {/* Education badge — Purple glow */}
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-4 -right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl text-xs font-bold"
                style={{
                  background: 'rgba(124,77,255,0.12)',
                  border: '1px solid rgba(124,77,255,0.35)',
                  color: '#b388ff',
                  boxShadow: '0 0 20px rgba(124,77,255,0.25)',
                }}
              >
                <GraduationCap size={14} />
                B.Tech AI & ML
              </motion.div>

              {/* Floating Code & Chai badge — Orange glow */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-5 -right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255,109,0,0.15)',
                  border: '1px solid rgba(255,109,0,0.4)',
                  color: '#ff6d00',
                  boxShadow: '0 0 22px rgba(255,109,0,0.30)',
                }}
              >
                <Coffee size={14} />
                Code & Chai
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-3 w-full max-w-[310px] mt-2"
            >
              {stats.map((stat) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — 3/5 */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Bio card — visible colored left-border accent (4px gradient bar) */}
            <motion.div
              variants={slideInFromRight}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* 4px gradient bar on left side */}
              <div
                className="absolute left-0 top-4 bottom-4 w-[4px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #00e5ff, #7c4dff, #ff4081, #ff6d00)',
                  boxShadow: '0 0 12px rgba(0,229,255,0.4), 0 0 12px rgba(124,77,255,0.3)',
                }}
              />

              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2 pl-4">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{
                    background: '#00e5ff',
                    boxShadow: '0 0 10px rgba(0,229,255,0.6)',
                  }}
                />
                About Me
              </h3>
              <p className="text-white/55 text-sm leading-[1.9] mb-4 pl-4">
                Hey! I'm{' '}
                <span
                  className="font-bold"
                  style={{
                    color: '#00e5ff',
                    textShadow: '0 0 15px rgba(0,229,255,0.4)',
                  }}
                >
                  Animesh
                </span>{' '}
                — a pre-final year{' '}
                <span
                  className="font-semibold"
                  style={{
                    color: '#40c4ff',
                    textShadow: '0 0 12px rgba(0,229,255,0.3)',
                  }}
                >
                  B.Tech student in AI & ML
                </span>{' '}
                who is deeply passionate about building things that live on the internet. My journey
                started with curiosity about how websites work and evolved into a full-blown
                obsession with{' '}
                <span
                  className="font-semibold"
                  style={{
                    color: '#b388ff',
                    textShadow: '0 0 12px rgba(124,77,255,0.3)',
                  }}
                >
                  full-stack development
                </span>
                ,{' '}
                <span
                  className="font-semibold"
                  style={{
                    color: '#ff6d00',
                    textShadow: '0 0 12px rgba(255,109,0,0.3)',
                  }}
                >
                  cloud architecture
                </span>
                , and{' '}
                <span
                  className="font-semibold"
                  style={{
                    color: '#ff80ab',
                    textShadow: '0 0 12px rgba(255,64,129,0.3)',
                  }}
                >
                  system design
                </span>
                .
              </p>
              <p className="text-white/55 text-sm leading-[1.9] pl-4">
                I believe in writing code that is not just functional, but{' '}
                <span className="text-white font-semibold">elegant</span>. Whether it's crafting
                responsive UIs, designing RESTful APIs, or deploying scalable microservices — I
                approach every project with a builder's mindset and a designer's eye.
              </p>
            </motion.div>

            {/* Highlight cards — each with VISIBLE colored glow */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{
                      y: -4,
                      boxShadow: `0 12px 40px ${item.color}25`,
                    }}
                    className="group flex items-start gap-4 p-5 rounded-xl cursor-default transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}30, ${item.color}15)`,
                        boxShadow: `0 0 22px ${item.color}40`,
                        border: `1px solid ${item.color}35`,
                      }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4
                        className="text-white text-sm font-bold mb-1"
                        style={{ textShadow: `0 0 10px ${item.color}20` }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-white/40 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download Resume CTA — vivid multi-color gradient with glow */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 mt-3">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #7c4dff, #ff4081)',
                  boxShadow:
                    '0 0 25px rgba(0,229,255,0.30), 0 0 50px rgba(124,77,255,0.15), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Animated shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download size={18} className="text-white relative z-10" />
                <span className="text-white relative z-10 tracking-wide">
                  Download Resume
                </span>
              </a>
              <span
                className="text-white/30 text-sm hidden sm:block"
                style={{ textShadow: '0 0 10px rgba(124,77,255,0.15)' }}
              >
                — Let's build something awesome
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
