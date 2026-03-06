import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
    {
        id: 1,
        category: "Experience",
        title: "Frontend Engineer Intern @ Pinnacle Labs",
        detail: "Optimizing performance and building responsive architecture."
    },
    {
        id: 2,
        category: "Accolade",
        title: "National Finalist, Google Impetus",
        detail: "Top 10 out of 500+ teams nationwide building scalable solutions."
    },
    {
        id: 3,
        category: "Accolade",
        title: "3rd Place, GenSpark Hackathon",
        detail: "Engineered a GenAI solution under a brutal 24-hour deadline."
    },
    {
        id: 4,
        category: "Accolade",
        title: "3rd Place, SPARK & ROCK 2025",
        detail: "Recognized for excellence in application architecture."
    }
];

const KineticTimeline = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    return (
        <div className="relative w-full max-w-4xl mx-auto py-12 px-4 md:px-0">

            {/* Central/Left Glowing Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 z-0" />

            {/* Dynamic Glowing Dot Tracker */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-10 pointer-events-none">
                <AnimatePresence>
                    {hoveredNode && (
                        <motion.div
                            layoutId="glowingDot"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className={`absolute w-3 h-3 rounded-full -translate-x-1/2 mt-[2rem] shadow-[0_0_20px_4px_currentColor] ${hoveredNode.category === 'Experience' ? 'bg-[#00F0FF] text-[#00F0FF]' : 'bg-[#FF007F] text-[#FF007F]'
                                }`}
                            style={{
                                // Calculate position loosely based on index for the dot to jump
                                top: `${(timelineData.findIndex(item => item.id === hoveredNode.id) * (100 / timelineData.length))} + %` // A rough estimate, but Framer Motion layoutId handles the smooth physical transition when snapping to the nearest relative parent if built that way.
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Nodes Array */}
            <div className="relative z-20 flex flex-col gap-12 md:gap-20">
                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isHovered = hoveredNode?.id === item.id;
                    const isExp = item.category === 'Experience';

                    return (
                        <div
                            key={item.id}
                            className={`w-full flex flex-col md:flex-row items-start md:items-center relative group cursor-none ${isEven ? 'md:justify-start' : 'md:justify-end'
                                }`}
                            onMouseEnter={() => setHoveredNode(item)}
                            onMouseLeave={() => setHoveredNode(null)}
                        >

                            {/* The Static Dot for Mobile & Base visual */}
                            <div className="md:hidden absolute left-8 w-2 h-2 rounded-full bg-white/40 -translate-x-1/2 mt-6 z-0" />
                            <div className="hidden md:block absolute left-1/2 w-2 h-2 rounded-full bg-white/40 -translate-x-1/2 z-0" />

                            {/* The Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`w-[85%] ml-auto md:ml-0 md:w-[45%] backdrop-blur-md bg-white/[0.02] border p-6 rounded-2xl transition-all duration-500 z-20 ${isHovered
                                        ? (isExp ? 'border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.15)]' : 'border-[#FF007F] shadow-[0_0_30px_rgba(255,0,127,0.15)]')
                                        : 'border-white/10'
                                    }`}
                            >
                                <span className={`text-xs font-mono tracking-widest font-bold uppercase ${isExp ? 'text-[#00F0FF]' : 'text-[#FF007F]'
                                    }`}>
                                    {item.category}
                                </span>
                                <h3 className="text-white text-xl font-bold mt-2 mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{item.detail}</p>
                            </motion.div>

                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default KineticTimeline;
