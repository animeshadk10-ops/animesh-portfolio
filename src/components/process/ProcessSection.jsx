import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding your vision, goals, and audience through deep research and brainstorming.',
    color: '#00e5ff',
    gradient: 'from-[#00e5ff] to-[#40c4ff]',
    emoji: '🔍',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting pixel-perfect mockups and prototypes that turn ideas into visual masterpieces.',
    color: '#7c4dff',
    gradient: 'from-[#7c4dff] to-[#b388ff]',
    emoji: '🎨',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building with clean, scalable code. Every line optimized for performance and beauty.',
    color: '#ff6d00',
    gradient: 'from-[#ff6d00] to-[#ffd600]',
    emoji: '⚡',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Testing, deploying, and iterating. Your project launches polished and ready to scale.',
    color: '#ff4081',
    gradient: 'from-[#ff4081] to-[#ff80ab]',
    emoji: '🚀',
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #071428, #0c1a35, #071428)' }}>
      {/* Aurora bg */}
      <div className="aurora-bg" style={{ opacity: 0.4 }} />
      
      {/* Vivid orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00e5ff] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff4081] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 109, 0, 0.15), rgba(255, 214, 0, 0.1))',
              border: '1px solid rgba(255, 109, 0, 0.3)',
            }}
          >
            <span className="text-lg">🔄</span>
            <span style={{ color: '#ff9100' }} className="text-sm font-semibold">My Process</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
          >
            How I <span className="gradient-text-warm">Work</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            A proven methodology that turns ideas into elegant digital products.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[70px] left-[10%] right-[10%] h-[3px] rounded-full overflow-hidden">
            <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #00e5ff44, #7c4dff44, #ff6d0044, #ff408144)' }} />
            <motion.div
              className="absolute top-0 w-32 h-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
              animate={{ left: ['-15%', '115%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div key={step.number} variants={fadeInUp} className="relative group text-center lg:text-left">
                {/* Number circle */}
                <div className="relative mb-8 flex justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center"
                  >
                    {/* Colored glow ring */}
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110"
                      style={{
                        border: `3px solid ${step.color}44`,
                        boxShadow: `0 0 30px ${step.color}22`,
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `0 0 50px ${step.color}44, inset 0 0 40px ${step.color}15`,
                      }}
                    />
                    {/* Background */}
                    <div
                      className="absolute inset-[3px] rounded-full"
                      style={{ background: `radial-gradient(circle, ${step.color}12 0%, transparent 70%)` }}
                    />
                    {/* Number + Emoji */}
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-xl">{step.emoji}</span>
                      <span
                        className={`text-3xl font-display font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}
                        style={{ filter: `drop-shadow(0 0 10px ${step.color}66)` }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-display font-bold mb-3"
                  style={{ color: step.color, textShadow: `0 0 15px ${step.color}44` }}
                >
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>

                {/* Mobile connecting line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-[3px] h-8 rounded-full" style={{ background: `linear-gradient(to bottom, ${step.color}44, transparent)` }} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
