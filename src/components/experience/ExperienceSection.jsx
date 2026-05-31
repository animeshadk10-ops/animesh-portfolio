import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles, Rocket, Globe, Users, ChevronRight } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  viewportConfig,
} from '../../utils/animations';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Tech Startup XYZ',
    color: '#00e5ff',
    location: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
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
    color: '#7c4dff',
    location: 'Kolkata',
    period: 'Jan 2024 – Present',
    type: 'Leadership',
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
    color: '#00e676',
    location: 'Remote',
    period: '2023 – Present',
    type: 'Open Source',
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

/* Pulsing timeline dot — 48px vivid glow */
const TimelineDot = ({ icon: Icon, color, index }) => (
  <motion.div
    className="relative z-20 flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={viewportConfig}
    transition={{ delay: index * 0.18, duration: 0.6, type: 'spring', stiffness: 200 }}
  >
    {/* Outer animated pulse ring */}
    <motion.span
      className="absolute rounded-full"
      style={{
        width: 64,
        height: 64,
        background: `radial-gradient(circle, ${color}44 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.6, 0, 0.6],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Middle glow ring */}
    <span
      className="absolute rounded-full"
      style={{
        width: 56,
        height: 56,
        background: `radial-gradient(circle, ${color}22 0%, transparent 60%)`,
        boxShadow: `0 0 30px ${color}55`,
      }}
    />
    {/* Main dot — 48px */}
    <span
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: 48,
        height: 48,
        border: `3px solid ${color}`,
        boxShadow: `0 0 25px ${color}66, inset 0 0 15px ${color}22`,
        background: 'linear-gradient(135deg, #0a1628, #050d1a)',
      }}
    >
      <Icon size={22} style={{ color, filter: `drop-shadow(0 0 6px ${color})` }} />
    </span>
  </motion.div>
);

/* Single experience card with colored left accent bar */
const ExperienceCard = ({ exp, index }) => {
  const isLeft = index % 2 === 0;
  const variant = isLeft ? slideInFromLeft : slideInFromRight;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`w-full md:w-[calc(50%-3rem)] ${
        isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
      }`}
    >
      <div
        className="group relative glass-card rounded-2xl overflow-hidden hover-lift"
        style={{
          border: `1px solid ${exp.color}22`,
        }}
      >
        {/* Colored LEFT accent bar — 4px */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
          style={{
            background: `linear-gradient(to bottom, ${exp.color}, ${exp.color}88, ${exp.color}33)`,
            boxShadow: `2px 0 15px ${exp.color}33`,
          }}
        />

        {/* Hover gradient border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 30px ${exp.color}15, 0 0 40px ${exp.color}15, 0 4px 30px ${exp.color}11`,
            border: `1px solid ${exp.color}44`,
            borderRadius: 'inherit',
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 pl-8 md:pl-10">
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1.5"
              style={{
                background: `linear-gradient(135deg, ${exp.color}25, ${exp.color}10)`,
                border: `1px solid ${exp.color}33`,
                color: exp.color,
                boxShadow: `0 0 10px ${exp.color}15`,
              }}
            >
              <Calendar size={11} />
              {exp.period}
            </span>
            <span
              className="inline-block text-xs font-bold text-white rounded-full px-3 py-1.5"
              style={{
                background: `linear-gradient(135deg, ${exp.color}55, ${exp.color}33)`,
                boxShadow: `0 0 12px ${exp.color}22`,
              }}
            >
              {exp.type}
            </span>
          </div>

          {/* Role */}
          <h3
            className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-2"
            style={{ textShadow: `0 0 20px ${exp.color}22` }}
          >
            {exp.role}
          </h3>

          {/* Company + Location */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="font-bold text-sm"
              style={{
                color: exp.color,
                textShadow: `0 0 15px ${exp.color}55`,
              }}
            >
              @ {exp.company}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/50">
              <MapPin size={12} style={{ color: exp.color }} />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
            {exp.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-3 mb-6">
            {exp.achievements.map((ach, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2.5 text-sm text-white/55"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              >
                <ChevronRight
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{
                    color: exp.color,
                    filter: `drop-shadow(0 0 4px ${exp.color})`,
                  }}
                />
                <span className="hover:text-white/80 transition-colors">{ach}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold border"
                style={{
                  color: exp.color,
                  borderColor: `${exp.color}44`,
                  backgroundColor: `${exp.color}18`,
                  textShadow: `0 0 8px ${exp.color}33`,
                  boxShadow: `0 0 8px ${exp.color}11`,
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
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden section-accent-top"
      style={{
        background: 'linear-gradient(180deg, #030b17 0%, #0c1a35 50%, #030b17 100%)',
      }}
    >
      {/* Grid pattern background — 50% opacity */}
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.5 }} />

      {/* Aurora animated bg */}
      <div className="aurora-bg" />

      {/* Vivid color orb 1 — Cyan top-left */}
      <div
        className="absolute -top-20 -left-20 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Vivid color orb 2 — Purple bottom-right */}
      <div
        className="absolute -bottom-32 -right-20 rounded-full pointer-events-none"
        style={{
          width: 550,
          height: 550,
          background: 'radial-gradient(circle, rgba(124,77,255,0.15) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="color-badge inline-flex items-center gap-2 mb-6"
          >
            <Briefcase size={14} />
            <span className="tracking-[0.2em]">EXPERIENCE</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5"
          >
            Where I've{' '}
            <span className="gradient-text-rainbow">Made Impact</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
            style={{ textShadow: '0 0 20px rgba(0,229,255,0.1)' }}
          >
            A journey through roles that sharpened my craft — from building production features to leading teams and giving back to open source.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical THICK (3px) gradient line — cyan→purple→green */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[1.5px] top-0 bottom-0 w-[3px]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #00e5ff, #7c4dff, #00e676)',
                boxShadow: '0 0 12px rgba(0,229,255,0.3), 0 0 12px rgba(124,77,255,0.2)',
              }}
            />

            {/* Animated shimmer running along the timeline */}
            <motion.div
              className="absolute top-0 w-full rounded-full"
              style={{
                height: 120,
                background: 'linear-gradient(to bottom, transparent, #00e5ff, #7c4dff, transparent)',
                filter: 'blur(1px)',
                boxShadow: '0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(124,77,255,0.4)',
              }}
              animate={{ y: ['0%', '800%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Second shimmer — offset for continuous effect */}
            <motion.div
              className="absolute top-0 w-full rounded-full"
              style={{
                height: 80,
                background: 'linear-gradient(to bottom, transparent, #00e676, #00e5ff, transparent)',
                filter: 'blur(1px)',
                boxShadow: '0 0 15px rgba(0,230,118,0.5)',
              }}
              animate={{ y: ['600%', '0%', '600%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
          </div>

          {/* Experience entries */}
          <div className="relative space-y-14 md:space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot — on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6">
                    <TimelineDot icon={exp.icon} color={exp.color} index={index} />
                  </div>

                  {/* Card — mobile: pushed right, desktop: alternates */}
                  <div className="pl-20 md:pl-0">
                    <ExperienceCard exp={exp} index={index} />
                  </div>

                  {/* Connecting line from dot to card (desktop) */}
                  <div
                    className={`hidden md:block absolute top-[2.2rem] h-[2px] w-[2.5rem] ${
                      isLeft ? 'right-1/2 mr-6' : 'left-1/2 ml-6'
                    }`}
                    style={{
                      background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, ${exp.color}88, ${exp.color}11)`,
                      boxShadow: `0 0 8px ${exp.color}33`,
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
