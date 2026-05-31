import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Project Lead, Tech Startup XYZ',
    content:
      "Animesh delivered exceptional work during his internship. His ability to translate complex requirements into clean, performant code was impressive. The dashboard he built significantly improved our team's workflow.",
    rating: 5,
    color: '#00e5ff',
    avatar: '🧑‍💻',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Faculty Advisor, College Tech Club',
    content:
      "One of the most driven students I've mentored. Animesh's technical leadership in our tech fest was outstanding — he organized workshops, mentored juniors, and built a website that wowed everyone.",
    rating: 5,
    color: '#7c4dff',
    avatar: '👩‍🏫',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
  },
  {
    name: 'Rahul Das',
    role: 'Fellow Developer, Open Source Community',
    content:
      "Working with Animesh on open-source projects has been great. His PRs are always well-documented and tested. He has a genuine passion for code quality and community contribution.",
    rating: 5,
    color: '#ff6d00',
    avatar: '👨‍💻',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1a35, #0a0f2e, #0c1a35)' }}>
      {/* Background */}
      <div className="aurora-bg" style={{ opacity: 0.3 }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7c4dff] opacity-[0.06] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#00e5ff] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 214, 0, 0.15), rgba(255, 109, 0, 0.1))',
              border: '1px solid rgba(255, 214, 0, 0.3)',
            }}
          >
            <Quote size={14} style={{ color: '#ffd600' }} />
            <span style={{ color: '#ffd600' }} className="text-sm font-semibold">Testimonials</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
          >
            What People <span className="gradient-text-warm">Say</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/45 text-lg max-w-xl mx-auto">
            Kind words from people I've had the pleasure of working with.
          </motion.p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Large colored quote */}
            <div className="absolute -top-6 -left-2 sm:-left-6">
              <Quote size={60} style={{ color: t.color, opacity: 0.15, filter: `drop-shadow(0 0 20px ${t.color})` }} fill="currentColor" stroke="none" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.06), ${t.color}08)`,
                  border: `1px solid ${t.color}22`,
                  boxShadow: `0 0 40px ${t.color}11, inset 0 0 60px ${t.color}05`,
                }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />

                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#ffd600" stroke="none" style={{ filter: 'drop-shadow(0 0 4px rgba(255,214,0,0.5))' }} />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/75 text-base md:text-lg leading-[1.9] mb-8 italic font-light">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden ring-2"
                    style={{
                      ringColor: t.color,
                      boxShadow: `0 0 15px ${t.color}44`,
                    }}
                  >
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-display text-lg">{t.name}</h4>
                    <p className="text-sm" style={{ color: `${t.color}cc` }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-5 mt-10">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 rounded-full transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <ChevronLeft size={20} className="text-white/50 group-hover:text-white transition-colors" />
              </button>

              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-400"
                    style={{
                      width: i === current ? 36 : 10,
                      height: 10,
                      background: i === current
                        ? `linear-gradient(90deg, #00e5ff, #7c4dff, #ff4081)`
                        : 'rgba(255,255,255,0.15)',
                      boxShadow: i === current ? '0 0 12px rgba(0,229,255,0.3)' : 'none',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <ChevronRight size={20} className="text-white/50 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
