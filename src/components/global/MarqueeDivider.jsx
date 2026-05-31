import React from 'react';
import { motion } from 'framer-motion';

const MarqueeDivider = ({
  items = [],
  gradientFrom = '#00e5ff',
  gradientTo = '#7c4dff',
  bgColor,
  textColor = 'text-white',
  rotation = '-2',
  speed = 60,
  outline = false,
}) => {
  const bg = bgColor || `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`;
  const isGradientBg = bg.includes('gradient') || bg.includes('linear');
  const bgStyle = isGradientBg ? { background: bg } : { backgroundColor: bg };

  return (
    <div
      className="relative w-full py-6 z-30 overflow-hidden flex items-center"
      style={{
        ...bgStyle,
        transform: `rotate(${rotation}deg) scale(1.1)`,
        boxShadow: `0 0 50px ${gradientFrom}44, 0 0 100px ${gradientTo}22, 0 -5px 30px ${gradientFrom}33, 0 5px 30px ${gradientTo}33`,
        borderTop: `1px solid ${gradientFrom}44`,
        borderBottom: `1px solid ${gradientTo}44`,
      }}
    >
      {/* Marquee fade edges */}
      <div className="absolute inset-0 marquee-fade pointer-events-none z-10" />

      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="flex whitespace-nowrap gap-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10 items-center">
            {items.map((item, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span
                  className={`text-2xl md:text-3xl font-black tracking-widest uppercase ${textColor}`}
                  style={
                    outline
                      ? {
                          WebkitTextStroke: '2px currentColor',
                          color: 'transparent',
                          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
                        }
                      : {
                          textShadow:
                            '0 0 15px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.08)',
                        }
                  }
                >
                  {item}
                </span>
                <span
                  className="text-white/50 text-lg"
                  style={{
                    textShadow: '0 0 12px rgba(255,255,255,0.4)',
                    filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))',
                  }}
                >
                  ◆
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeDivider;
