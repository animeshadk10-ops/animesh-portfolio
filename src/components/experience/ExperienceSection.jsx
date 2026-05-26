import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles, Rocket, Globe, Users } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  viewportConfig,
} from '../../utils/animations';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Tech Startup XYZ',
    companyColor: '#00d4ff',
    location: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    typeColor: 'from-cyan-500 to-blue-500',
    icon: Rocket,
    description:
      'Engineered end-to-end features across a production web application, collaborating with a cross-functional team of designers and senior developers to ship high-impact features on tight sprint cycles.',
    achievements: [
      'Built and deployed 5+ RESTful API endpoints handling 10K+ daily requests',
      'Reduced page load time by 35% through code-splitting and lazy loading',
      'Implemented real-time notification system using WebSockets',
      'Wrote 80+ unit and integration tests ensuring 95% code coverage',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'College Tech Club',
    companyColor: '#a855f7',
    location: 'Kolkata',
    period: 'Jan 2024 – Present',
    type: 'Leadership',
    typeColor: 'from-purple-500 to-pink-500',
    icon: Users,
    description:
      'Leading frontend architecture decisions and mentoring junior developers while building interactive web experiences for college events and hackathon platforms used by 500+ students.',
    achievements: [
      'Architected a responsive event portal serving 500+ active users',
      'Mentored 8 junior developers in modern React patterns and best practices',
      'Introduced component library reducing dev time by 40% across projects',
      'Coordinated with design team to implement pixel-perfect UI from Figma mockups',
    ],
    tags: ['React', 'Tailwind CSS', 'Figma', 'Git'],
  },
  {
    id: 3,
    role: 'Open Source Contributor',
    company: 'Various Projects',
    companyColor: '#22d3ee',
    location: 'Remote',
    period: '2023 – Present',
    type: 'Open Source',
    typeColor: 'from-emerald-400 to-cyan-500',
    icon: Globe,
    description:
      'Actively contributing to open-source repositories, fixing bugs, improving documentation, and building features across JavaScript and TypeScript ecosystems on GitHub.',
    achievements: [
      'Merged 20+ pull requests across popular open-source repositories',
      'Fixed critical accessibility bugs improving WCAG compliance scores',
      'Authored comprehensive documentation adopted by maintainer teams',
      'Built reusable utility libraries downloaded 1K+ times on npm',
    ],
    tags: ['Git', 'GitHub', 'JavaScript', 'TypeScript'],
  },
];

/* Pulsing dot on the timeline */
const TimelineDot = ({ icon: Icon, color, index }) => (
  <motion.div
    className="relative z-20 flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={viewportConfig}
    transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
  >
    {/* Outer pulse ring */}
    <span
      className="absolute w-12 h-12 rounded-full animate-[glow-pulse_3s_ease-in-out_infinite]"
      style={{
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        boxShadow: `0 0 20px ${color}44`,
      }}
    />
    {/* Dot */}
    <span
      className="relative w-10 h-10 rounded-full border-2 flex items-center justify-center bg-brand-bg"
      style={{ borderColor: color, boxShadow: `0 0 14px ${color}66` }}
    >
      <Icon size={18} style={{ color }} />
    </span>
  </motion.div>
);

/* Single experience card */
const ExperienceCard = ({ exp, index }) => {
  const isLeft = index % 2 === 0;
  const variant = isLeft ? slideInFromLeft : slideInFromRight;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`w-full md:w-[calc(50%-2.5rem)] ${
        isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
      }`}
    >
      <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-500">
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 40px ${exp.companyColor}0a, 0 0 30px ${exp.companyColor}08`,
          }}
        />

        {/* Header */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {/* Period badge */}
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/[0.06] rounded-full px-3 py-1">
              <Calendar size={12} />
              {exp.period}
            </span>
            {/* Type badge */}
            <span
              className={`inline-block text-xs font-bold text-white rounded-full px-3 py-1 bg-gradient-to-r ${exp.typeColor}`}
            >
              {exp.type}
            </span>
          </div>

          {/* Role */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-1">
            {exp.role}
          </h3>

          {/* Company + Location */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-semibold text-sm" style={{ color: exp.companyColor }}>
              @ {exp.company}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/40">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2 mb-6">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                <Sparkles
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: exp.companyColor }}
                />
                <span>{ach}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  color: exp.companyColor,
                  borderColor: `${exp.companyColor}33`,
                  backgroundColor: `${exp.companyColor}0d`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#050d1a' }}
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <Briefcase size={14} className="text-neon-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] text-neon-cyan uppercase">
              Experience
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4"
          >
            Where I've{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Made Impact
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-white/40 text-lg max-w-2xl mx-auto">
            A journey through roles that sharpened my craft — from building production features to leading teams and giving back to open source.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent" />
            {/* Animated shimmer */}
            <motion.div
              className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-neon-cyan/80 to-transparent"
              animate={{ y: ['0%', '500%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Experience entries */}
          <div className="relative space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot — positioned on the line */}
                  <div
                    className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-8`}
                  >
                    <TimelineDot icon={exp.icon} color={exp.companyColor} index={index} />
                  </div>

                  {/* Card — on mobile it's pushed right, desktop alternates */}
                  <div className="pl-16 md:pl-0">
                    <ExperienceCard exp={exp} index={index} />
                  </div>

                  {/* Connecting dashed line from dot to card (desktop only) */}
                  <div
                    className={`hidden md:block absolute top-[2.75rem] h-[1px] w-[2rem] ${
                      isLeft ? 'right-1/2 mr-5' : 'left-1/2 ml-5'
                    }`}
                    style={{
                      background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, ${exp.companyColor}55, transparent)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
