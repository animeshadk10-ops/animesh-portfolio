import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  ArrowRight,
  Layers,
  Filter,
  Sparkles,
} from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  staggerFast,
  scaleIn,
  viewportConfig,
} from '../../utils/animations';

const projects = [
  {
    id: 'agrivani',
    title: 'Agri-Vani',
    description:
      'AI-powered agritech platform delivering real-time agricultural insights with multilingual support, reducing farmer information retrieval time by 40%.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    category: 'AI/ML',
    tags: ['Python', 'GenAI APIs', 'React', 'NLP'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 48,
    forks: 12,
    views: 320,
    color: '#00e5ff',
  },
  {
    id: 'flowos',
    title: 'FlowOS',
    description:
      'Advanced medical software engineered to optimize complex healthcare workflows with secure data handling and intuitive operating interfaces for medical professionals.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 65,
    forks: 18,
    views: 480,
    color: '#7c4dff',
  },
  {
    id: 'iot-weather',
    title: 'IoT Weather Matrix',
    description:
      'Real-time environmental monitoring station built with Arduino and sensors, streaming live weather telemetry data to a responsive dashboard.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    category: 'Cloud',
    tags: ['Arduino', 'IoT', 'C++', 'AWS IoT'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 34,
    forks: 9,
    views: 210,
    color: '#ff6d00',
  },
  {
    id: 'devfolio',
    title: 'Developer Portfolio',
    description:
      'A stunning, animated developer portfolio built with React, Framer Motion, and Tailwind CSS featuring glassmorphism and neon aesthetics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Frontend',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 92,
    forks: 24,
    views: 860,
    color: '#ff4081',
  },
  {
    id: 'chatbot-ai',
    title: 'NeuralChat AI',
    description:
      'Conversational AI chatbot powered by transformer models, featuring context-aware responses, sentiment analysis, and multi-turn dialogue management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 78,
    forks: 21,
    views: 540,
    color: '#00e676',
  },
  {
    id: 'cloud-deploy',
    title: 'CloudPilot',
    description:
      'One-click cloud deployment platform automating CI/CD pipelines with real-time monitoring, containerized builds, and zero-downtime deployments.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    category: 'Cloud',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Go'],
    github: 'https://github.com/animeshadk10',
    live: '#',
    stars: 56,
    forks: 15,
    views: 390,
    color: '#ffd600',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Cloud'];

/* ─── Featured Project Card — full width showstopper ─── */
const FeaturedCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="group relative col-span-full mb-10"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
      }}
    >
      <div
        className="relative overflow-hidden rounded-3xl flex flex-col md:flex-row"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(24px)',
          border: isHovered ? `2px solid ${project.color}66` : '2px solid rgba(255,255,255,0.08)',
          boxShadow: isHovered
            ? `0 0 60px ${project.color}22, 0 20px 80px rgba(0,0,0,0.5), inset 0 0 40px ${project.color}08`
            : '0 8px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Featured badge */}
        <div
          className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${project.color}88, ${project.color}55)`,
            boxShadow: `0 0 20px ${project.color}44`,
          }}
        >
          <Sparkles size={12} />
          FEATURED
        </div>

        {/* Image section — large */}
        <div className="relative md:w-1/2 h-72 md:h-[420px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Colorful gradient overlay using project color */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, #071428 5%, ${project.color}22 40%, transparent 100%), linear-gradient(to right, #071428 0%, transparent 50%)`,
            }}
          />
          {/* Category badge */}
          <div className="absolute top-5 left-5 z-10">
            <span
              className="px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-md"
              style={{
                backgroundColor: `${project.color}44`,
                border: `1px solid ${project.color}66`,
                boxShadow: `0 0 15px ${project.color}33`,
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="relative md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {/* Floating orb inside content */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${project.color}15, transparent 70%)`,
              filter: 'blur(40px)',
            }}
          />

          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4"
            style={{ textShadow: `0 0 25px ${project.color}33` }}
          >
            {project.title}
          </h3>

          <p className="text-white/55 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold"
                style={{
                  color: project.color,
                  backgroundColor: `${project.color}20`,
                  border: `1px solid ${project.color}44`,
                  textShadow: `0 0 8px ${project.color}33`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats — colored numbers */}
          <div className="flex items-center gap-6 mb-7">
            <span className="flex items-center gap-1.5 text-sm">
              <Star size={15} style={{ color: project.color }} />
              <span style={{ color: project.color, fontWeight: 700 }}>{project.stars}</span>
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <GitFork size={15} style={{ color: project.color }} />
              <span style={{ color: project.color, fontWeight: 700 }}>{project.forks}</span>
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Eye size={15} style={{ color: project.color }} />
              <span style={{ color: project.color, fontWeight: 700 }}>{project.views}</span>
            </span>
          </div>

          {/* Links — colored icons */}
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 0 15px rgba(255,255,255,0.05)',
              }}
            >
              <Github size={16} />
              Source Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.color}55, ${project.color}33)`,
                border: `1px solid ${project.color}66`,
                boxShadow: `0 0 25px ${project.color}22`,
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 3D tilt grid project card ─── */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col h-full"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: isHovered ? `2px solid ${project.color}55` : '2px solid rgba(255,255,255,0.06)',
          boxShadow: isHovered
            ? `0 0 40px ${project.color}20, 0 20px 60px rgba(0,0,0,0.4)`
            : '0 4px 24px rgba(0,0,0,0.2)',
        }}
      >
        {/* Image with COLORFUL gradient overlay */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-115' : 'scale-100'
            }`}
            style={{
              transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            }}
          />
          {/* Colorful gradient overlay — bottom to top using project color */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, #071428 0%, ${project.color}18 50%, transparent 100%)`,
            }}
          />
          {/* Side gradient tint */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}15, transparent 60%)`,
            }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md"
              style={{
                backgroundColor: `${project.color}44`,
                border: `1px solid ${project.color}66`,
                boxShadow: `0 0 12px ${project.color}33`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Stats overlay on image */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3 text-xs text-white/80">
            <span className="flex items-center gap-1 px-2 py-1 rounded-md backdrop-blur-md" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <Star size={11} style={{ color: project.color }} />
              <span style={{ color: project.color, fontWeight: 700 }}>{project.stars}</span>
            </span>
            <span className="flex items-center gap-1 px-2 py-1 rounded-md backdrop-blur-md" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <GitFork size={11} style={{ color: project.color }} />
              <span style={{ color: project.color, fontWeight: 700 }}>{project.forks}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 flex-1 flex flex-col">
          <h3
            className="text-xl font-display font-bold text-white tracking-tight mb-2"
            style={{ textShadow: `0 0 15px ${project.color}22` }}
          >
            {project.title}
          </h3>

          <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Tags — colored background pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                style={{
                  color: project.color,
                  backgroundColor: `${project.color}20`,
                  border: `1px solid ${project.color}33`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links — colored icons */}
          <div className="flex items-center gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <Github size={15} style={{ color: project.color }} />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.color}44, ${project.color}22)`,
                border: `1px solid ${project.color}55`,
                boxShadow: `0 0 15px ${project.color}18`,
              }}
            >
              <ExternalLink size={15} />
              Demo
            </a>
          </div>
        </div>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden section-accent-top"
      style={{
        background: 'linear-gradient(180deg, #071428 0%, #0a0f2e 50%, #071428 100%)',
      }}
    >
      {/* Aurora bg */}
      <div className="aurora-bg" />

      {/* Vivid orb 1 — Purple top-right */}
      <div
        className="absolute -top-20 -right-32 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,77,255,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Vivid orb 2 — Magenta bottom-left */}
      <div
        className="absolute -bottom-40 -left-32 rounded-full pointer-events-none"
        style={{
          width: 550,
          height: 550,
          background: 'radial-gradient(circle, rgba(255,64,129,0.15) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Vivid orb 3 — Cyan center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern" style={{ opacity: 0.4 }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(124,77,255,0.2), rgba(255,64,129,0.12))',
                border: '1px solid rgba(124,77,255,0.3)',
                color: '#ea80fc',
                boxShadow: '0 0 20px rgba(124,77,255,0.15)',
              }}
            >
              <Layers size={14} />
              Projects
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5"
          >
            Built to{' '}
            <span className="gradient-text-fire">Ship & Scale</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
            style={{ textShadow: '0 0 15px rgba(124,77,255,0.1)' }}
          >
            A curated collection of projects spanning full-stack development, AI/ML, and cloud infrastructure — each one built with passion and precision.
          </motion.p>
        </motion.div>

        {/* Filter buttons — active has vivid gradient + glow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, #00e5ff, #7c4dff, #ff4081)',
                        color: '#fff',
                        boxShadow: '0 0 25px rgba(0,229,255,0.3), 0 0 50px rgba(124,77,255,0.15)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        textShadow: '0 0 10px rgba(255,255,255,0.3)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.5)',
                        border: '2px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                <span className="flex items-center gap-1.5">
                  {isActive && <Filter size={13} />}
                  {cat}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured project — HUGE full width card */}
            {featured && <FeaturedCard project={featured} />}

            {/* 3-column grid of remaining */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {rest.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/animeshadk10"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(124,77,255,0.1))',
              border: '2px solid rgba(0,229,255,0.25)',
              boxShadow: '0 0 30px rgba(0,229,255,0.12), 0 0 60px rgba(124,77,255,0.06)',
            }}
          >
            <Github size={18} style={{ color: '#00e5ff' }} />
            View All Projects on GitHub
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: '#7c4dff' }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
