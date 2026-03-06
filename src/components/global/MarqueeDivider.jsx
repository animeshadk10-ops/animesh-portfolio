import React from 'react';
import { motion } from 'framer-motion';

const MarqueeDivider = ({
    items,
    bgColor = "#FF007F",
    textColor = "text-black",
    rotation = "-2",
    speed = 60,
    outline = false
}) => {
    return (
        <div
            className={`relative w-full py-4 z-30 overflow-hidden flex items-center border-y ${bgColor === 'transparent' ? 'border-transparent' : 'border-white/10'}`}
            style={{
                backgroundColor: bgColor,
                transform: `rotate(${rotation}deg) scale(1.1)`,
                boxShadow: bgColor !== 'transparent' ? `0 0 50px ${bgColor}40` : 'none'
            }}
        >
            <motion.div
                className="flex whitespace-nowrap gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
                {/* Duplicate the array twice for seamless infinite scrolling */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-10 items-center">
                        {items.map((item, idx) => (
                            <React.Fragment key={`${i}-${idx}`}>
                                <span
                                    className={`text-2xl md:text-3xl font-black tracking-widest uppercase ${textColor}`}
                                    style={outline ? {
                                        WebkitTextStroke: `1px ${textColor}`,
                                        color: 'transparent'
                                    } : {}}
                                >
                                    {item}
                                </span>
                                <span className="text-white/30 text-xl">✦</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueeDivider;
