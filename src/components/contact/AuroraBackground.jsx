import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Soft Moving Orbs */}
            <motion.div
                animate={{ x: ["0%", "20%", "0%"], y: ["0%", "10%", "0%"], scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-[#7000FF] to-[#00F0FF] blur-[150px] opacity-30 mix-blend-screen"
            />
            <motion.div
                animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "-10%", "0%"], scale: [1, 1.3, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-[#FF007F] to-[#FFD700] blur-[150px] opacity-20 mix-blend-screen"
            />
        </div>
    );
};

export default AuroraBackground;
