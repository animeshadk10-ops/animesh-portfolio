import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Smooth scroll handler
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,212,255,0.05)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="relative group flex items-center gap-2"
            >
              <span className="font-display text-xl md:text-2xl font-bold gradient-text-cyan tracking-wider">
                ANIMESH
              </span>
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? 'text-neon-cyan'
                          : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta transition-all duration-300 ${
                        isActive
                          ? 'w-6 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Hire Me CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Hire Me button (desktop) */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="hidden md:flex items-center gap-2 relative group overflow-hidden rounded-full px-5 py-2 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:scale-105 active:scale-95"
              >
                <Sparkles size={14} className="text-white" />
                <span className="font-sans text-sm font-semibold text-white tracking-wide">
                  Hire Me
                </span>
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden relative p-2 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="text-neon-cyan" size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-brand-bg-2/95 backdrop-blur-2xl border-l border-white/[0.06] flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <span className="font-display text-lg font-bold gradient-text-cyan tracking-wider">
                  ANIMESH
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-white/70" />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 flex flex-col justify-center px-6 gap-2">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                      onClick={(e) => {
                        setIsOpen(false);
                        scrollToSection(e, link.id);
                      }}
                      className={`relative flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? 'bg-white/[0.06] border border-neon-cyan/20'
                          : 'hover:bg-white/[0.03] border border-transparent'
                      }`}
                    >
                      {/* Active indicator dot */}
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-neon-cyan shadow-[0_0_8px_rgba(0,212,255,0.6)]'
                            : 'bg-white/20 group-hover:bg-white/40'
                        }`}
                      />
                      <span
                        className={`font-display text-xl font-semibold tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-neon-cyan' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer CTA */}
              <div className="px-6 pb-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setIsOpen(false);
                    scrollToSection(e, 'contact');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple font-sans text-sm font-bold text-white tracking-wider hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-shadow"
                >
                  <Sparkles size={16} />
                  Hire Me
                </a>
              </div>

              {/* Decorative glow */}
              <div className="absolute top-1/4 right-0 w-40 h-40 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
