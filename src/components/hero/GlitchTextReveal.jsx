import React from 'react';
import { motion } from 'framer-motion';

const GlitchTextReveal = ({ text = "Animesh Adhikari." }) => {
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.5, // Start slightly after init span
            },
        },
    };

    const charVariants = {
        hidden: { opacity: 0, scale: 0.2, skewX: 40, filter: "blur(10px)" },
        visible: {
            opacity: [1, 0, 1, 0, 1],
            scale: [1.5, 0.8, 1.2, 0.9, 1],
            skewX: [30, -20, 10, -5, 0],
            filter: ["blur(4px)", "blur(0px)", "blur(2px)", "blur(0px)", "blur(0px)"],
            transition: {
                duration: 0.5,
                times: [0, 0.2, 0.5, 0.8, 1],
                ease: "easeInOut"
            },
        },
    };

    return (
        <>
            <style>{`
        @keyframes textGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: textGradientShift 4s ease infinite;
        }
      `}</style>
            <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-7xl md:text-9xl font-black text-transparent bg-clip-text flex flex-wrap justify-center bg-gradient-to-r from-white via-gray-400 to-white animate-text-gradient my-4"
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={charVariants}
                        className={char === ' ' ? 'mr-[0.3em]' : 'inline-block'}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.h1>
        </>
    );
};

export default GlitchTextReveal;
