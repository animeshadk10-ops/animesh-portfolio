import React from 'react';
import { motion } from 'framer-motion';

const KineticHeadline = ({ text = "Animesh Adhikari" }) => {
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    };

    return (
        <>
            <style>{`
        @keyframes liquidFoil {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-liquid-foil {
          animation: liquidFoil 4s linear infinite;
        }
      `}</style>
            <div className="w-full overflow-visible flex justify-center items-center">
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 font-black tracking-tighter text-[clamp(3rem,8vw,7rem)] leading-none text-center drop-shadow-[0_20px_50px_rgba(0,0,0,1)] select-none whitespace-nowrap inline-block px-4 pb-4"
                >
                    {characters.map((char, index) => (
                        <motion.span
                            key={index}
                            variants={childVariants}
                            className={char === ' ' ? 'mr-[0.3em]' : 'inline-block'}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>
        </>
    );
};

export default KineticHeadline;
