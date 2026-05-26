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

const StatItem = ({ value, suffix = '+', label, color }) => {
  const isInfinity = value === '∞';
  const { count, ref } = useCounter(isInfinity ? 0 : parseInt(value));

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
    >
      <span
        className="text-2xl font-display font-black"
        style={{ color, animation: 'counter-glow 3s ease-in-out infinite' }}
      >
        {isInfinity ? '∞' : `${count}${suffix}`}
      </span>
      <span className="text-white/40 text-[10px] font-medium tracking-wider uppercase text-center leading-tight">
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
    color: '#00d4ff',
  },
  {
    icon: Layout,
    title: 'System Design',
    desc: 'Scalable architectures from day one',
    color: '#a855f7',
  },
  {
    icon: Globe,
    title: 'Web3 Curious',
    desc: 'Exploring decentralized frontiers',
    color: '#f97316',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    desc: 'Adapting to new stacks in record time',
    color: '#ec4899',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 100%)',
      }}
    >
      {/* Blur orbs */}
      <div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 70%)',
          filter: 'blur(90px)',
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-white/60 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              Get to Know Me
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
          >
            <span className="text-white">Who is </span>
            <span className="gradient-text-cyan">Animesh</span>
            <span className="text-neon-cyan">?</span>
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
            {/* Photo container with animated neon border */}
            <motion.div variants={scaleIn} className="relative mb-6 group">
              {/* Animated spinning ring */}
              <div
                className="absolute -inset-[3px] rounded-2xl z-0"
                style={{
                  background:
                    'conic-gradient(from 0deg, #00d4ff, #a855f7, #ec4899, #f97316, #facc15, #00d4ff)',
                  animation: 'spin-slow 6s linear infinite',
                }}
              />
              <div className="absolute -inset-[1px] rounded-2xl bg-brand-bg z-[1]" />

              {/* Image */}
              <div className="relative z-[2] rounded-2xl overflow-hidden w-64 h-72 sm:w-72 sm:h-80">
                <img
                  src={aboutImg}
                  alt="Animesh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
              </div>

              {/* Location badge */}
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-3 -left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-xs font-medium text-white/80"
              >
                <MapPin size={12} className="text-neon-cyan" />
                India
              </motion.div>

              {/* Education badge */}
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-3 -right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-xs font-medium text-white/80"
              >
                <GraduationCap size={12} className="text-neon-purple" />
                B.Tech AI & ML
              </motion.div>

              {/* Floating Code & Chai badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-xs font-medium text-neon-orange"
              >
                <Coffee size={12} />
                Code & Chai
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-3 w-full max-w-[300px] mt-4"
            >
              <StatItem
                value="10"
                label="Projects"
                color="#00d4ff"
              />
              <StatItem
                value="3"
                label="Years Learning"
                color="#a855f7"
              />
              <StatItem
                value="5"
                label="Tech Stacks"
                color="#f97316"
              />
              <StatItem
                value="∞"
                suffix=""
                label="Curiosity"
                color="#ec4899"
              />
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
            {/* Bio card */}
            <motion.div
              variants={slideInFromRight}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8"
            >
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                About Me
              </h3>
              <p className="text-white/50 text-sm leading-[1.8] mb-4">
                Hey! I'm <span className="text-white font-semibold">Animesh</span> — a pre-final year{' '}
                <span className="text-neon-cyan/80">B.Tech student in AI & ML</span> who is deeply
                passionate about building things that live on the internet. My journey started with
                curiosity about how websites work and evolved into a full-blown obsession with{' '}
                <span className="text-neon-purple/80">full-stack development</span>,{' '}
                <span className="text-neon-orange/80">cloud architecture</span>, and{' '}
                <span className="text-neon-magenta/80">system design</span>.
              </p>
              <p className="text-white/50 text-sm leading-[1.8]">
                I believe in writing code that is not just functional, but elegant. Whether it's
                crafting responsive UIs, designing RESTful APIs, or deploying scalable
                microservices — I approach every project with a builder's mindset and a
                designer's eye.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-shadow duration-300"
                      style={{
                        background: `${item.color}12`,
                        boxShadow: `0 0 12px ${item.color}10`,
                      }}
                    >
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-white/35 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download Resume CTA */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 mt-2">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                }}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download
                  size={16}
                  className="text-brand-bg relative z-10"
                />
                <span className="text-brand-bg relative z-10 tracking-wide">
                  Download Resume
                </span>
              </a>
              <span className="text-white/20 text-sm hidden sm:block">
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
