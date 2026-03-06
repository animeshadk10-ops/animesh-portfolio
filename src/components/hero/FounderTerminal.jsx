import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const lines = [
    "> LOCATING FOUNDER NODE... [OK]",
    "> LOADING ARCHITECTURE: FlowOS & AgriVani... [OK]",
    "> INJECTING DISCIPLINE: Athletic Training Protocols... [OK]",
    "> COMPILING: B.Tech IT Systems... [OK]",
    "> STATUS: BUILDING SYSTEMS THAT CREATE IMPACT."
];

const TerminalLine = ({ text, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            className={`mb-1 ${text.includes('STATUS') ? 'text-[#FFD700]' : 'text-[#00F0FF]'}`}
        >
            {text}
        </motion.div>
    );
};

const FounderTerminal = () => {
    return (
        <div className="absolute bottom-8 right-8 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-72 font-mono text-xs shadow-2xl pointer-events-none">
            <div className="flex gap-1.5 mb-2 border-b border-white/10 pb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex flex-col">
                {lines.map((line, idx) => (
                    <TerminalLine key={idx} text={line} delay={0.5 + idx * 0.8} />
                ))}
            </div>
        </div>
    );
};

export default FounderTerminal;
