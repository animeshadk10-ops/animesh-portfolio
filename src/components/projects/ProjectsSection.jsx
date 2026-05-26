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
} from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
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
    color: '#00d4ff',
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
    color: '#a855f7',
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
    color: '#f97316',
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
    color: '#ec4899',
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
    color: '#22d3ee',
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
    color: '#facc15',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Cloud'];

/* 3D tilt project card */
const ProjectCard = ({ project, isFeatured = false }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`group relative ${isFeatured ? 'col-span-full' : ''}`}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-300 ${
          isHovered
            ? 'border-white/[0.15]'
            : 'border-white/[0.06]'
        } ${isFeatured ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
          boxShadow: isHovered
            ? `0 0 40px ${project.color}15, 0 20px 60px rgba(0,0,0,0.4)`
            : '0 4px 24px rgba(0,0,0,0.2)',
        }}
      >
        {/* Image section */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-white/90 backdrop-blur-md"
              style={{ backgroundColor: `${project.color}33`, border: `1px solid ${project.color}44` }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className={`relative p-6 ${isFeatured ? 'md:w-1/2 md:p-10 flex flex-col justify-center' : ''}`}>
          <h3
            className={`font-display font-bold text-white tracking-tight mb-2 ${
              isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
          >
            {project.title}
          </h3>

          <p className={`text-white/50 leading-relaxed mb-5 ${isFeatured ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}22`,
                  backgroundColor: `${project.color}0a`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-5 text-white/30 text-xs">
            <span className="flex items-center gap-1">
              <Star size={12} /> {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} /> {project.forks}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} /> {project.views}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white/70 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-all duration-300"
            >
              <Github size={14} />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border transition-all duration-300 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                borderColor: `${project.color}33`,
              }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Hover border glow accent */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 1px 0 ${project.color}22, inset 0 -1px 0 ${project.color}11`,
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
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 100%)',
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-neon-purple/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-neon-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <Layers size={14} className="text-neon-purple" />
            <span className="text-xs font-semibold tracking-[0.2em] text-neon-purple uppercase">
              Projects
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4"
          >
            Built to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Ship & Scale
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-white/40 text-lg max-w-2xl mx-auto">
            A curated collection of projects spanning full-stack development, AI/ML, and cloud infrastructure — each one built with passion and precision.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
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
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'text-white border-neon-cyan/50 bg-neon-cyan/[0.1]'
                    : 'text-white/50 border-white/[0.08] bg-white/[0.03] hover:text-white/80 hover:border-white/[0.15]'
                }`}
                style={
                  isActive
                    ? { boxShadow: '0 0 20px rgba(0,212,255,0.15), 0 0 40px rgba(0,212,255,0.05)' }
                    : {}
                }
              >
                <span className="flex items-center gap-1.5">
                  {isActive && <Filter size={12} />}
                  {cat}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured card */}
            {featured && (
              <div className="mb-8">
                <ProjectCard project={featured} isFeatured />
              </div>
            )}

            {/* Grid of remaining cards */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((project) => (
                  <ProjectCard key={project.id} project={project} />
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
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.04] border border-white/[0.1] text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
            style={{
              boxShadow: '0 0 30px rgba(0,212,255,0.05)',
            }}
          >
            <Github size={18} />
            View All Projects on GitHub
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
