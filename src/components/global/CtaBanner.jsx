import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { fadeInUp, viewportConfig } from '../../utils/animations';

const CtaBanner = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* VIVID gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.12) 0%, rgba(124, 77, 255, 0.1) 30%, rgba(255, 64, 129, 0.08) 60%, rgba(255, 109, 0, 0.06) 100%)',
        }}
      />

      {/* Aurora */}
      <div className="aurora-bg" style={{ opacity: 0.4 }} />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Large vivid orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#00e5ff] opacity-[0.12] rounded-full blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#ff4081] opacity-[0.1] rounded-full blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffd600] opacity-[0.06] rounded-full blur-[80px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Animated rocket */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex p-5 rounded-2xl mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(124, 77, 255, 0.1))',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.15)',
            }}
          >
            <Rocket size={36} style={{ color: '#00e5ff', filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.5))' }} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Ready to bring your
            <br />
            <span className="gradient-text-rainbow">next idea to life?</span>
          </h2>

          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Whether it's a web app, a design system, or an AI-powered product — 
            let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #00e5ff, #7c4dff, #ff4081)',
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.25), 0 0 60px rgba(124, 77, 255, 0.15), 0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles size={16} className="relative z-10" />
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/animeshadk10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full text-white/70 text-sm font-semibold transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              View my GitHub
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
