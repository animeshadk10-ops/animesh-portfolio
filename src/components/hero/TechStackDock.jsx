import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Paintbrush, Box, Zap } from 'lucide-react';

const stack = [
    { id: 'react', Icon: Code2, color: '#00F0FF', name: 'React' },
    { id: 'tailwind', Icon: Paintbrush, color: '#38BDF8', name: 'Tailwind' },
    { id: 'three', Icon: Box, color: '#F59E0B', name: 'Three.js' },
    { id: 'framer', Icon: Zap, color: '#F43F5E', name: 'Framer' }
];

const TechStackDock = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-8 py-4 rounded-full backdrop-blur-3xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] pointer-events-auto">
            {stack.map((item) => {
                const isHovered = hovered === item.id;
                return (
                    <motion.div
                        key={item.id}
                        onHoverStart={() => setHovered(item.id)}
                        onHoverEnd={() => setHovered(null)}
                        className="relative cursor-pointer p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
                        animate={{
                            scale: isHovered ? 1.2 : 1,
                            backgroundColor: isHovered ? 'rgba(255,255,255,0.05)' : 'transparent',
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        {/* Tooltip */}
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: -45 }}
                                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-black/80 border border-white/10 text-white text-[10px] uppercase tracking-wider rounded-md pointer-events-none z-10"
                            >
                                {item.name}
                            </motion.div>
                        )}

                        {/* Icon with Neon Glow effect */}
                        <motion.div
                            animate={isHovered ? { opacity: [0.5, 1, 0.7, 1] } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <item.Icon
                                size={24}
                                color={isHovered ? item.color : '#6B7280'}
                                style={{
                                    filter: isHovered ? `drop-shadow(0 0 8px ${item.color})` : 'none',
                                    transition: 'color 0.3s ease, filter 0.3s ease'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TechStackDock;
