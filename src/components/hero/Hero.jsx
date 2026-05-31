import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MousePointerClick, Sparkles, ChevronDown } from 'lucide-react';
import heroImg from '../../assets/images/herosection_Animesh.png';

/* ─── Data ─── */
const roles = [
  { text: "Full Stack Developer", color: "#00e5ff" },
  { text: "UI/UX Designer", color: "#b388ff" },
  { text: "Cloud Architect", color: "#00e676" },
  { text: "Problem Solver", color: "#ff9100" },
  { text: "AI Enthusiast", color: "#ff4081" },
];

/* 50 vivid particles */
const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1.5,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 5,
  color: ['#00e5ff', '#7c4dff', '#ff4081', '#ff6d00', '#ffd600', '#00e676', '#ea80fc', '#40c4ff'][Math.floor(Math.random() * 8)],
}));

/* ─── Typewriter ─── */
const TypewriterText = ({ text, color }) => {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    setDisplayText('');
    setPhase('typing');
  }, [text]);

  useEffect(() => {
    let timeout;
    if (phase === 'typing' && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 50 + Math.random() * 30);
    } else if (displayText.length >= text.length) {
      setPhase('done');
    }
    return () => clearTimeout(timeout);
  }, [displayText, text, phase]);

  return (
    <span style={{ color }} className="font-display">
      {displayText}
      <span
        className="inline-block w-[3px] h-[1em] ml-1 align-middle rounded"
        style={{
          backgroundColor: color,
          animation: 'typewriter-blink 0.7s step-end infinite',
          boxShadow: `0 0 12px ${color}, 0 0 24px ${color}66`,
        }}
      />
    </span>
  );
};

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ value, label, color }) => {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = numericPart;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const timer = setTimeout(animate, 1000);
    return () => clearTimeout(timer);
  }, [numericPart]);

  return (
    <div className="text-center">
      <div
        className="text-2xl lg:text-3xl font-bold font-display"
        style={{ color, textShadow: `0 0 20px ${color}88, 0 0 40px ${color}44` }}
      >
        {count}{suffix}
      </div>
      <div className="text-[10px] lg:text-xs text-white/50 uppercase tracking-[0.15em] mt-1 font-semibold">{label}</div>
    </div>
  );
};

/* ─── Main Hero ─── */
const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x * 12);
      mouseY.set(y * 12);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(160deg, #030b17 0%, #071428 25%, #0c1a35 50%, #0a0f2e 75%, #050818 100%)' }}
    >
      {/* ═══════ VIVID BACKGROUND LAYERS ═══════ */}

      {/* Aurora animated mesh */}
      <div className="aurora-bg" />

      {/* Vivid color blobs — MUCH more visible */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          top: '-5%', right: '-5%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(0, 229, 255, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          bottom: '5%', left: '0%',
          background: 'radial-gradient(circle, rgba(124, 77, 255, 0.18) 0%, rgba(124, 77, 255, 0.06) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 450, height: 450,
          top: '50%', left: '40%',
          background: 'radial-gradient(circle, rgba(255, 64, 129, 0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 350, height: 350,
          top: '20%', left: '60%',
          background: 'radial-gradient(circle, rgba(0, 230, 118, 0.1) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.25, 1], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300,
          bottom: '20%', right: '20%',
          background: 'radial-gradient(circle, rgba(255, 214, 0, 0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* 50 vivid floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}cc, 0 0 ${p.size * 8}px ${p.color}44`,
          }}
          animate={{
            y: [0, -100, -200, -100, 0],
            x: [0, 40, -30, 20, 0],
            opacity: [0, 1, 1, 1, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Colorful diagonal light beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] opacity-[0.035]"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, #00e5ff 100px, #00e5ff 102px, transparent 102px, transparent 200px, #7c4dff 200px, #7c4dff 202px)',
          }}
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24">

          {/* ─── LEFT: Text Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Status badge — colorful */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-sm mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(124, 77, 255, 0.08))',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.1)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              </span>
              <span className="text-[#00e5ff] text-sm font-semibold tracking-wide">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-lg mb-3 font-medium tracking-wide"
            >
              Hello World! 👋 I'm
            </motion.p>

            {/* Name - LETTER BY LETTER with VIVID colors */}
            <motion.h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-3 font-display leading-[1.05]">
              {'Ani'.split('').map((letter, i) => (
                <motion.span
                  key={`w-${i}`}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-white"
                  style={{ textShadow: '0 0 60px rgba(255,255,255,0.15), 0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  {letter}
                </motion.span>
              ))}
              {'mesh'.split('').map((letter, i) => (
                <motion.span
                  key={`g-${i}`}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.81 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block gradient-text-rainbow"
                  style={{ filter: `drop-shadow(0 0 ${20 + i * 8}px rgba(0, 229, 255, 0.4))` }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* THICK colorful animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 1.3, duration: 0.8, ease: 'easeOut' }}
              className="h-1.5 rounded-full mb-7"
              style={{
                background: 'linear-gradient(90deg, #00e5ff, #7c4dff, #ff4081, #ff6d00, #ffd600)',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.4), 0 0 40px rgba(124, 77, 255, 0.2)',
              }}
            />

            {/* Role typewriter */}
            <div className="h-12 lg:h-14 mb-7 flex items-center">
              <span className="text-white/30 text-2xl lg:text-3xl mr-3 font-light">&lt;</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl lg:text-3xl font-semibold"
                >
                  <TypewriterText text={roles[roleIndex].text} color={roles[roleIndex].color} />
                </motion.div>
              </AnimatePresence>
              <span className="text-white/30 text-2xl lg:text-3xl ml-2 font-light">/&gt;</span>
            </div>

            {/* Description with colorful highlights */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/50 text-base lg:text-lg max-w-lg mb-10 leading-relaxed"
            >
              Crafting <span className="text-[#00e5ff] font-semibold" style={{ textShadow: '0 0 10px rgba(0,229,255,0.3)' }}>stunning digital experiences</span> that blend
              creativity with cutting-edge technology. Building the future,{' '}
              <span className="text-[#b388ff] font-semibold" style={{ textShadow: '0 0 10px rgba(179,136,255,0.3)' }}>one line of code</span> at a time.
            </motion.p>

            {/* CTA Buttons — vivid gradients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #7c4dff, #ff4081)',
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.25), 0 0 60px rgba(124, 77, 255, 0.1), 0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4081] via-[#ff6d00] to-[#ffd600] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                style={{
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  background: 'rgba(0, 229, 255, 0.06)',
                  boxShadow: '0 0 20px rgba(0, 229, 255, 0.05)',
                }}
              >
                <MousePointerClick size={18} className="text-[#00e5ff]" />
                Let's Connect
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-5"
            >
              <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-semibold">Find me</span>
              <div className="h-px w-10 bg-gradient-to-r from-white/20 to-transparent" />
              {[
                { Icon: Github, href: 'https://github.com/animeshadk10', label: 'GitHub', color: '#fff', glow: 'rgba(255,255,255,0.15)' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/animesh-adk', label: 'LinkedIn', color: '#40c4ff', glow: 'rgba(64,196,255,0.2)' },
                { Icon: Mail, href: 'mailto:aadikumarr10@gmail.com', label: 'Email', color: '#ff4081', glow: 'rgba(255,64,129,0.2)' },
              ].map(({ Icon, href, label, color, glow }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl border transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}66`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${glow}`;
                    e.currentTarget.style.background = `${color}11`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <Icon size={20} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Hero Image — COLORFUL neon ring, photo OVERFLOWS ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 lg:w-[440px]">

              {/* VIVID outer rotating neon ring */}
              <div
                className="absolute left-1/2 top-1/2 w-[82%] h-[82%] rounded-full"
                style={{
                  animation: 'ring-rotate 15s linear infinite',
                  transform: 'translate(-50%, -50%)',
                  background: 'conic-gradient(from 0deg, #00e5ff, #7c4dff, #ff4081, #ff6d00, #ffd600, #00e676, #40c4ff, #ea80fc, #00e5ff)',
                  padding: '4px',
                  maskImage: 'radial-gradient(transparent 66%, black 67%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(transparent 66%, black 67%, black 100%)',
                  filter: 'brightness(1.3)',
                }}
              />

              {/* Glow ring behind the main ring — makes it pop */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full pointer-events-none"
                style={{
                  boxShadow: '0 0 60px rgba(0, 229, 255, 0.2), 0 0 120px rgba(124, 77, 255, 0.15), 0 0 180px rgba(255, 64, 129, 0.08)',
                }}
              />

              {/* Inner pulsing glow ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] h-[72%] rounded-full"
                style={{
                  border: '1px solid rgba(0, 229, 255, 0.2)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0, 229, 255, 0.1), inset 0 0 30px rgba(0, 229, 255, 0.05)',
                    '0 0 80px rgba(0, 229, 255, 0.3), inset 0 0 60px rgba(124, 77, 255, 0.12)',
                    '0 0 30px rgba(0, 229, 255, 0.1), inset 0 0 30px rgba(0, 229, 255, 0.05)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Dashed orbit ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full border border-dashed border-white/[0.08]"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                {/* Orbiting colored dots */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff4081] shadow-[0_0_10px_#ff4081]" />
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ffd600] shadow-[0_0_10px_#ffd600]" />
              </motion.div>

              {/* Background glow */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 229, 255, 0.18) 0%, rgba(124, 77, 255, 0.1) 30%, rgba(255, 64, 129, 0.05) 60%, transparent 70%)',
                }}
              />

              {/* Hero Image — OVERFLOWS the ring */}
              <motion.img
                src={heroImg}
                alt="Animesh — Full Stack Developer"
                className="relative z-10 w-[135%] max-w-none -ml-[17.5%]"
                style={{
                  x: springX,
                  y: springY,
                  filter: 'drop-shadow(0 0 80px rgba(0, 229, 255, 0.2)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                }}
              />

              {/* ─── Floating stat badges — COLORFUL ─── */}
              <motion.div
                className="absolute -right-4 lg:-right-10 top-[12%] z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="glass-card px-5 py-3 neon-glow-cyan">
                  <AnimatedCounter value="10+" label="Projects" color="#00e5ff" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 lg:-left-12 top-[42%] z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="glass-card px-5 py-3 neon-glow-purple">
                  <AnimatedCounter value="3+" label="Years" color="#b388ff" />
                </div>
              </motion.div>

              <motion.div
                className="absolute right-2 lg:right-0 bottom-[12%] z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="glass-card px-5 py-3 neon-glow-warm">
                  <AnimatedCounter value="5+" label="Tech Stacks" color="#ff9100" />
                </div>
              </motion.div>

              {/* Floating tech icons — colorful */}
              <motion.div
                className="absolute -left-8 top-[15%] z-20 hidden lg:flex items-center gap-1.5 glass-card px-3 py-2"
                animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-lg">⚛️</span>
                <span className="text-[#61dafb] text-xs font-mono font-bold">React</span>
              </motion.div>

              <motion.div
                className="absolute -right-3 bottom-[32%] z-20 hidden lg:flex items-center gap-1.5 glass-card px-3 py-2"
                animate={{ y: [0, 12, 0], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-lg">☁️</span>
                <span className="text-[#ff9100] text-xs font-mono font-bold">AWS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─── Scroll Indicator ─── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: 'linear-gradient(to bottom, #00e5ff, #7c4dff)' }}
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
