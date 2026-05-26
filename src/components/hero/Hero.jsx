import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Code2, Braces, Terminal, ChevronRight, MousePointerClick, Cpu, Database, Globe, Layers } from 'lucide-react';
import heroImg from '../../assets/images/herosection_Animesh.png';

/* ─── Data ─── */
const roles = [
  { text: "Full Stack Developer", color: "#00d4ff", icon: "💻" },
  { text: "UI/UX Designer", color: "#a855f7", icon: "🎨" },
  { text: "Cloud Architect", color: "#22d3ee", icon: "☁️" },
  { text: "Problem Solver", color: "#f97316", icon: "🧩" },
  { text: "AI Enthusiast", color: "#ec4899", icon: "🤖" },
];

const stats = [
  { value: "10+", label: "Projects", angle: -35, distance: 280 },
  { value: "3+", label: "Years", angle: 15, distance: 300 },
  { value: "5+", label: "Tech Stacks", angle: 60, distance: 270 },
];

const floatingParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
  color: ['#00d4ff', '#a855f7', '#ec4899', '#f97316', '#facc15', '#22d3ee'][Math.floor(Math.random() * 6)],
}));

const orbs = [
  { color: 'rgba(0, 212, 255, 0.12)', size: 500, top: '5%', right: '10%', duration: 12 },
  { color: 'rgba(168, 85, 247, 0.08)', size: 400, bottom: '10%', left: '5%', duration: 15 },
  { color: 'rgba(236, 72, 153, 0.06)', size: 350, top: '60%', right: '30%', duration: 18 },
  { color: 'rgba(249, 115, 22, 0.05)', size: 300, top: '20%', left: '20%', duration: 20 },
];

/* ─── Typewriter Component ─── */
const TypewriterText = ({ text, color }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setPhase('typing');
  }, [text]);

  useEffect(() => {
    let timeout;
    if (phase === 'typing') {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 60 + Math.random() * 40);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 2200);
      }
    } else if (phase === 'waiting') {
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
          animation: 'typewriter-blink 0.8s step-end infinite',
          boxShadow: `0 0 8px ${color}`,
        }}
      />
    </span>
  );
};

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ value, label }) => {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
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
    const timer = setTimeout(animate, 800);
    return () => clearTimeout(timer);
  }, [numericPart]);

  return (
    <div className="text-center">
      <div
        className="text-2xl lg:text-3xl font-bold font-display"
        style={{ animation: 'counter-glow 3s ease-in-out infinite' }}
      >
        <span className="gradient-text-cyan">{count}{suffix}</span>
      </div>
      <div className="text-[10px] lg:text-xs text-white/40 uppercase tracking-[0.15em] mt-1 font-medium">{label}</div>
    </div>
  );
};

/* ─── Main Hero ─── */
const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
      setMousePos({ x, y });
      mouseX.set(x * 15);
      mouseY.set(y * 15);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 40%, #0f1d32 70%, #050d1a 100%)' }}
    >
      {/* ═══ BACKGROUND LAYERS ═══ */}

      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -80, -160, -80, 0],
            x: [0, 30, -20, 10, 0],
            opacity: [0, 0.8, 1, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing aurora orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, i % 2 === 0 ? 30 : -30, 0],
            y: [0, i % 2 === 0 ? -20 : 20, 0],
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(0, 212, 255, 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(168, 85, 247, 0.06), transparent),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(236, 72, 153, 0.04), transparent)
          `,
        }}
      />

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24">

          {/* ─── LEFT: Text Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-neon-cyan text-sm font-medium tracking-wide">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-lg mb-3 font-medium tracking-wide"
            >
              Hello World! 👋 I'm
            </motion.p>

            {/* Name - BIG & COLORFUL */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-black tracking-tight mb-2 font-display leading-[1.1]"
            >
              <span className="text-white">Ani</span>
              <span className="gradient-text-rainbow">mesh</span>
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="h-1 rounded-full mb-6"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899, #f97316)',
              }}
            />

            {/* Role typewriter */}
            <div className="h-12 lg:h-14 mb-6 flex items-center">
              <span className="text-white/30 text-2xl lg:text-3xl mr-3 font-light">&lt;</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl lg:text-3xl font-semibold"
                >
                  <TypewriterText
                    text={roles[roleIndex].text}
                    color={roles[roleIndex].color}
                  />
                </motion.div>
              </AnimatePresence>
              <span className="text-white/30 text-2xl lg:text-3xl ml-2 font-light">/&gt;</span>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/40 text-base lg:text-lg max-w-lg mb-10 leading-relaxed"
            >
              Crafting <span className="text-neon-cyan font-medium">stunning digital experiences</span> that blend
              creativity with cutting-edge technology. Building the future,{' '}
              <span className="text-neon-purple font-medium">one line of code</span> at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0ea5e9, #a855f7)',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.05)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/10 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 hover:text-neon-cyan"
              >
                <MousePointerClick size={18} />
                Let's Connect
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-5"
            >
              <span className="text-white/25 text-xs uppercase tracking-[0.2em] font-semibold">Find me</span>
              <div className="h-px w-10 bg-gradient-to-r from-white/20 to-transparent" />
              {[
                { Icon: Github, href: "https://github.com/animeshadk10", label: "GitHub", hoverColor: "#fff" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/animesh-adk", label: "LinkedIn", hoverColor: "#0A66C2" },
                { Icon: Mail, href: "mailto:aadikumarr10@gmail.com", label: "Email", hoverColor: "#00d4ff" },
              ].map(({ Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl border border-white/8 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 hover:scale-110"
                  style={{ '--hover-color': hoverColor }}
                >
                  <Icon size={20} className="text-white/40 group-hover:text-[var(--hover-color)] transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Hero Image with Neon Ring ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 lg:w-[420px]">

              {/* Outer rotating neon ring */}
              <div
                className="absolute left-1/2 top-1/2 w-[105%] h-[105%] rounded-full"
                style={{
                  animation: 'ring-rotate 20s linear infinite',
                  background: 'conic-gradient(from 0deg, #00d4ff, #a855f7, #ec4899, #f97316, #facc15, #22d3ee, #00d4ff)',
                  padding: '2px',
                  maskImage: 'radial-gradient(transparent 65%, black 66%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(transparent 65%, black 66%, black 100%)',
                  filter: 'blur(1px)',
                }}
              />

              {/* Inner pulsing glow ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full"
                style={{
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.1), inset 0 0 40px rgba(0, 212, 255, 0.05)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 30px rgba(0, 212, 255, 0.03)',
                    '0 0 60px rgba(0, 212, 255, 0.2), inset 0 0 50px rgba(0, 212, 255, 0.08)',
                    '0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 30px rgba(0, 212, 255, 0.03)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Dashed orbit ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full border border-dashed border-white/[0.06]"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Background glow */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
                }}
              />

              {/* Hero Image */}
              <motion.img
                src={heroImg}
                alt="Animesh — Full Stack Developer"
                className="relative z-10 w-full drop-shadow-[0_0_60px_rgba(0,212,255,0.15)]"
                style={{
                  x: springX,
                  y: springY,
                }}
              />

              {/* ─── Floating stat badges ─── */}
              <motion.div
                className="absolute -right-4 lg:-right-8 top-[15%] z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass-card px-4 py-3 neon-glow-cyan">
                  <AnimatedCounter value="10+" label="Projects" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 lg:-left-8 top-[45%] z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="glass-card px-4 py-3 neon-glow-purple">
                  <AnimatedCounter value="3+" label="Years" />
                </div>
              </motion.div>

              <motion.div
                className="absolute right-4 lg:right-0 bottom-[15%] z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="glass-card px-4 py-3 neon-glow-warm">
                  <AnimatedCounter value="5+" label="Tech Stacks" />
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -left-6 top-[18%] z-20 hidden lg:flex items-center gap-1.5 glass-card px-3 py-2"
                animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-lg">⚛️</span>
                <span className="text-neon-cyan text-xs font-mono font-medium">React</span>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-[35%] z-20 hidden lg:flex items-center gap-1.5 glass-card px-3 py-2"
                animate={{ y: [0, 10, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-lg">☁️</span>
                <span className="text-neon-orange text-xs font-mono font-medium">AWS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─── Scroll Indicator ─── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/25 text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
              <motion.div
                className="w-1 h-2 rounded-full bg-neon-cyan"
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
