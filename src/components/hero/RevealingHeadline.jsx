import React from 'react';
import { motion } from 'framer-motion';

const RevealingHeadline = ({ text = "Animesh Adhikari." }) => {
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            className="text-6xl md:text-8xl font-bold text-white flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className={char === ' ' ? 'mr-[0.3em]' : ''}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default RevealingHeadline;
