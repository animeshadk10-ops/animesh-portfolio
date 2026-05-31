import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Heart,
  Coffee,
} from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInFromLeft,
  slideInFromRight,
  viewportConfig,
} from '../../utils/animations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'animesh.adk10@gmail.com',
    href: 'mailto:animesh.adk10@gmail.com',
    color: '#00e5ff',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9147071972',
    href: 'tel:+919147071972',
    color: '#7c4dff',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, India',
    href: '#',
    color: '#ff6d00',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/animeshadk10',
    color: '#fff',
    hoverGlow: 'rgba(255,255,255,0.3)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/animesh-adk',
    color: '#40c4ff',
    hoverGlow: 'rgba(64,196,255,0.4)',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: '#00e5ff',
    hoverGlow: 'rgba(0,229,255,0.4)',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const getInputStyle = (fieldName) => ({
    borderColor: focusedField === fieldName ? '#00e5ff' : 'rgba(255,255,255,0.1)',
    boxShadow: focusedField === fieldName ? '0 0 20px rgba(0,229,255,0.25), 0 0 40px rgba(0,229,255,0.08)' : 'none',
    backgroundColor: focusedField === fieldName ? 'rgba(0,229,255,0.06)' : 'rgba(255,255,255,0.03)',
  });

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden section-accent-top"
      style={{
        background: 'linear-gradient(180deg, #030b17 0%, #071428 50%, #030b17 100%)',
      }}
    >
      {/* Aurora bg */}
      <div className="aurora-bg" />

      {/* Vivid orb 1 — Cyan top-center */}
      <div
        className="absolute -top-20 left-1/3 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Vivid orb 2 — Magenta bottom-right */}
      <div
        className="absolute -bottom-32 -right-20 rounded-full pointer-events-none"
        style={{
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(255,64,129,0.12) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Vivid orb 3 — Purple center-left */}
      <div
        className="absolute top-1/2 -left-20 rounded-full pointer-events-none"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(124,77,255,0.1) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern" style={{ opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(255,64,129,0.2), rgba(255,109,0,0.12))',
                border: '1px solid rgba(255,64,129,0.3)',
                color: '#ff80ab',
                boxShadow: '0 0 20px rgba(255,64,129,0.15)',
              }}
            >
              <MessageSquare size={14} />
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5"
          >
            Let's{' '}
            <span className="gradient-text-warm">Connect</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 max-w-2xl mx-auto text-lg"
            style={{ textShadow: '0 0 15px rgba(255,158,67,0.1)' }}
          >
            Have a project in mind, want to collaborate, or just want to say hi?
            I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ─── Left: Contact Info (2/5) ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact info cards with colored LEFT accent bar */}
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                variants={slideInFromLeft}
                href={item.href}
                className="group relative flex items-center gap-4 p-5 rounded-2xl glass-card overflow-hidden hover-lift transition-all duration-400"
                style={{
                  border: `1px solid ${item.color}22`,
                }}
              >
                {/* Colored LEFT accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{
                    background: `linear-gradient(to bottom, ${item.color}, ${item.color}66)`,
                    boxShadow: `2px 0 12px ${item.color}33`,
                  }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 25px ${item.color}12, 0 0 30px ${item.color}10`,
                  }}
                />

                {/* Icon with colored glow */}
                <div
                  className="relative p-3.5 rounded-xl"
                  style={{
                    backgroundColor: `${item.color}18`,
                    border: `1px solid ${item.color}33`,
                    boxShadow: `0 0 20px ${item.color}22`,
                  }}
                >
                  <item.icon
                    size={22}
                    style={{
                      color: item.color,
                      filter: `drop-shadow(0 0 6px ${item.color})`,
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0 pl-2">
                  <div
                    className="text-[10px] uppercase tracking-[0.15em] font-bold mb-1"
                    style={{ color: `${item.color}88` }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-white font-semibold text-sm truncate"
                    style={{ textShadow: `0 0 10px ${item.color}15` }}
                  >
                    {item.value}
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                  style={{ color: item.color }}
                />
              </motion.a>
            ))}

            {/* Social links — 52px rounded cards with colored border glow on hover */}
            <motion.div variants={fadeInUp} className="pt-5">
              <h4
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
                    style={{
                      width: 52,
                      height: 52,
                      background: 'rgba(255,255,255,0.04)',
                      border: `2px solid rgba(255,255,255,0.08)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${social.color}66`;
                      e.currentTarget.style.boxShadow = `0 0 25px ${social.hoverGlow}, 0 0 50px ${social.hoverGlow}44`;
                      e.currentTarget.style.background = `${social.color}12`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <social.icon
                      size={22}
                      className="transition-colors duration-300"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = social.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge with gradient bg (cyan → purple) and emerald dot */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(124,77,255,0.08))',
                border: '1px solid rgba(0,229,255,0.25)',
                boxShadow: '0 0 30px rgba(0,229,255,0.08)',
              }}
            >
              {/* Inner glow orb */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,255,0.2), transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" style={{ boxShadow: '0 0 10px rgba(16,185,129,0.6)' }} />
                  </span>
                  <span
                    className="text-white font-bold text-sm"
                    style={{ textShadow: '0 0 10px rgba(0,229,255,0.2)' }}
                  >
                    Currently Available
                  </span>
                  <Sparkles size={14} style={{ color: '#00e5ff' }} />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Open for internship opportunities, freelance projects, and
                  exciting collaborations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: Form (3/5) ─── */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 rounded-2xl glass-card overflow-hidden"
              style={{
                border: '1px solid rgba(0,229,255,0.12)',
                boxShadow: '0 0 40px rgba(0,229,255,0.05)',
              }}
            >
              {/* Floating gradient orbs inside form */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div
                className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(124,77,255,0.1), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div
                className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,64,129,0.06), transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <div className="relative z-10 space-y-7">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-[0.15em] mb-3"
                      style={{ color: '#00e5ff' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-all duration-500 text-sm font-medium border-2"
                      style={getInputStyle('name')}
                      placeholder="Animesh"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-[0.15em] mb-3"
                      style={{ color: '#00e5ff' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-all duration-500 text-sm font-medium border-2"
                      style={getInputStyle('email')}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-[0.15em] mb-3"
                    style={{ color: '#7c4dff' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-all duration-500 text-sm font-medium border-2 resize-none"
                    style={getInputStyle('message')}
                    placeholder="Tell me about your project or just say hi..."
                    required
                  />
                </div>

                {/* Submit button — multi-color gradient with large glow + shimmer */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4.5 rounded-xl font-bold text-white text-sm tracking-wide relative overflow-hidden transition-all duration-500 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff, #7c4dff, #ff4081)',
                    boxShadow:
                      '0 0 30px rgba(0,229,255,0.25), 0 0 60px rgba(124,77,255,0.15), 0 0 90px rgba(255,64,129,0.08)',
                    padding: '18px 0',
                  }}
                >
                  {/* Shimmer effect */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />

                  {/* Hover color shift overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #ff4081, #7c4dff, #00e5ff)',
                    }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2.5 text-base">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                        <ArrowUpRight
                          size={15}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-8"
          style={{
            borderTop: '2px solid transparent',
            borderImage: 'linear-gradient(90deg, transparent, #00e5ff44, #7c4dff44, #ff408144, transparent) 1',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm font-semibold">
              © {new Date().getFullYear()}{' '}
              <span className="gradient-text-cyan">Animesh</span>. All rights
              reserved.
            </p>
            <p className="text-white/25 text-sm flex items-center gap-2 font-medium">
              Built with{' '}
              <Heart
                size={15}
                fill="currentColor"
                style={{
                  color: '#ff4081',
                  filter: 'drop-shadow(0 0 6px rgba(255,64,129,0.6))',
                }}
              />{' '}
              and{' '}
              <span style={{ fontSize: '16px' }}>☕</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
