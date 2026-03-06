import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DESIGNATIONS = [
    "Technical Experience Architect",
    "Web Strategy Innovator",
    "AI Solutions Strategist"
];

const StatusField = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % DESIGNATIONS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-4 mb-4">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-mono text-[#A0A0A0] text-xs md:text-sm tracking-widest border border-[#A0A0A0]/30 px-3 py-1 rounded-sm bg-black/20"
            >
                SYSTEM LOG // INIT [A. ADHIKARI]
            </motion.div>

            <div className="h-8 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-white text-xl md:text-2xl font-light tracking-wide text-center"
                    >
                        {DESIGNATIONS[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StatusField;
