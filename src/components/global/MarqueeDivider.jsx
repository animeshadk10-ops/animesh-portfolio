import React from 'react';
import { motion } from 'framer-motion';

const MarqueeDivider = ({
  items = [],
  gradientFrom = '#00d4ff',
  gradientTo = '#a855f7',
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
      className="relative w-full py-5 z-30 overflow-hidden flex items-center border-y border-white/10"
      style={{
        ...bgStyle,
        transform: `rotate(${rotation}deg) scale(1.1)`,
        boxShadow: `0 0 40px ${gradientFrom}33, 0 0 80px ${gradientTo}1a`,
      }}
    >
      {/* Marquee fade edges */}
      <div className="absolute inset-0 marquee-fade pointer-events-none z-10" />

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
                          WebkitTextStroke: '1.5px currentColor',
                          color: 'transparent',
                          filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))',
                        }
                      : {
                          textShadow:
                            '0 0 10px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.15), 0 0 60px rgba(255,255,255,0.05)',
                        }
                  }
                >
                  {item}
                </span>
                <span
                  className="text-white/40 text-lg"
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
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
