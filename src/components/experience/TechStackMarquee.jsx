import React from 'react';
import { motion } from 'framer-motion';

const row1 = ["React.js", "JavaScript", "Generative AI", "Data Structures", "Tailwind CSS", "Framer Motion", "Python"];
const row2 = ["C++", "System Design", "Arduino (IoT)", "Git/GitHub", "Object-Oriented Programming", "REST APIs"];

const Pill = ({ text }) => (
    <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 px-6 py-3 rounded-full text-white/80 font-mono text-sm uppercase tracking-widest whitespace-nowrap shadow-[0_0_15px_rgba(0,240,255,0.05)] cursor-none">
        {text}
    </div>
);

const TechStackMarquee = () => {
    // Duplicate for seamless infinite loop on wide screens
    const r1 = [...row1, ...row1, ...row1, ...row1];
    const r2 = [...row2, ...row2, ...row2, ...row2];

    return (
        <div className="w-full relative overflow-hidden flex flex-col gap-6 py-8 pointer-events-none">
            {/* Edge Fades */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#05000A] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#05000A] to-transparent z-10"></div>

            {/* Row 1 (Right to Left) */}
            <motion.div
                className="flex gap-6 w-max"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {r1.map((tech, idx) => <Pill key={`r1-${idx}`} text={tech} />)}
            </motion.div>

            {/* Row 2 (Left to Right) */}
            <motion.div
                className="flex gap-6 w-max"
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
            >
                {r2.map((tech, idx) => <Pill key={`r2-${idx}`} text={tech} />)}
            </motion.div>
        </div>
    );
};

export default TechStackMarquee;
