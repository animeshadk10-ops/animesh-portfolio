import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CyberTopographyBackground from './CyberTopographyBackground';
import DecodeText from '../global/DecodeText';
import { clipPathReveal, fadeUpTilt } from '../../utils/animations';

const projects = [
    {
        id: "agrivani",
        title: "Agri-Vani",
        role: "Project Lead & Core Architect",
        description: "AI-powered agritech architecture utilizing Python and GenAI APIs. Engineered to provide instantaneous agricultural insights, effectively reducing farmer information retrieval time by 40% with full multilingual support.",
        tech: ["Python", "GenAI APIs", "React", "System Design"],
        color: "#00F0FF", // Neon Cyan
        link: "#"
    },
    {
        id: "flowos",
        title: "FlowOS",
        role: "Founder & Lead Developer",
        description: "Advanced medical software engineered to optimize complex healthcare systems. Exploring next-generation operating interfaces to strictly structure productivity and secure workflow for medical professionals.",
        tech: ["Frontend Architecture", "State Management", "UI/UX", "Healthcare Tech"],
        color: "#FF007F", // Neon Magenta
        link: "#"
    },
    {
        id: "iot-weather",
        title: "IoT Weather Matrix",
        role: "Hardware & Software Integration",
        description: "A physical hardware bridge utilizing Arduino and environmental sensors to construct a real-time weather station system. Demonstrates cross-discipline engineering from raw hardware to software data streams.",
        tech: ["Arduino", "IoT", "C++", "Sensors"],
        color: "#FFD700", // Fiery Amber
        link: "#"
    }
];

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="relative w-full min-h-fit pt-12 pb-32 bg-[#020005] overflow-hidden flex flex-col items-center justify-center">
            <CyberTopographyBackground activeColor={projects[activeIndex].color} />

            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#020005] via-[#020005]/95 to-transparent z-10 pointer-events-none"></div>

            <div className="relative z-50 flex justify-center w-full mb-12 mt-8 overflow-hidden">
                <motion.h2
                    variants={clipPathReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-white font-black tracking-widest text-[clamp(2rem,5vw,4.5rem)] leading-tight text-center uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] max-w-5xl"
                >
                    <DecodeText text="SYSTEMS ENGINEERED FOR SCALE AND IMPACT." />
                </motion.h2>
            </div>

            <motion.div
                variants={fadeUpTilt}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-200px" }}
                className="relative w-full max-w-7xl h-[50vh] flex items-center justify-center perspective-1000 z-20 mb-24 mt-8"
            >
                <AnimatePresence mode="popLayout">
                    {projects.map((project, index) => {
                        const isActive = index === activeIndex;
                        const isPrev = index === (activeIndex - 1 + projects.length) % projects.length;
                        const isNext = index === (activeIndex + 1) % projects.length;

                        let style = {
                            zIndex: 10,
                            opacity: 0,
                            scale: 0.75,
                            rotateY: 0,
                            x: 0,
                            filter: 'blur(8px)'
                        };

                        if (isActive) {
                            style = {
                                zIndex: 30,
                                opacity: 1,
                                scale: 1,
                                rotateY: 0,
                                x: 0,
                                filter: 'blur(0px)',
                                boxShadow: `0 0 80px ${project.color}40`,
                                borderColor: `${project.color}80`
                            };
                        } else if (isPrev) {
                            style = {
                                zIndex: 20,
                                opacity: 0.6,
                                scale: 0.75,
                                rotateY: 45,
                                x: '-60%',
                                filter: 'blur(4px)',
                                boxShadow: `0 0 40px rgba(0,0,0,0.5)`,
                                borderColor: 'rgba(255,255,255,0.1)'
                            };
                        } else if (isNext) {
                            style = {
                                zIndex: 20,
                                opacity: 0.6,
                                scale: 0.75,
                                rotateY: -45,
                                x: '60%',
                                filter: 'blur(4px)',
                                boxShadow: `0 0 40px rgba(0,0,0,0.5)`,
                                borderColor: 'rgba(255,255,255,0.1)'
                            };
                        }

                        if (!isActive && !isPrev && !isNext) return null;

                        return (
                            <motion.div
                                key={project.id}
                                className="absolute backdrop-blur-3xl bg-[#020005]/85 border border-white/10 shadow-2xl p-8 md:p-12 rounded-[2rem] w-[90vw] max-w-3xl flex flex-col items-center text-center cursor-pointer"
                                initial={false}
                                animate={{
                                    zIndex: style.zIndex,
                                    opacity: style.opacity,
                                    scale: style.scale,
                                    rotateY: style.rotateY,
                                    x: style.x,
                                    filter: style.filter,
                                    boxShadow: style.boxShadow,
                                    borderColor: style.borderColor
                                }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ transformStyle: 'preserve-3d' }}
                                onClick={() => {
                                    if (isPrev) handlePrev();
                                    if (isNext) handleNext();
                                }}
                            >
                                <div className="flex flex-col gap-6 relative w-full items-center text-center">
                                    <div className="flex flex-col gap-2">
                                        <h4
                                            className="text-5xl md:text-6xl font-black bg-clip-text text-white tracking-tighter mb-2 transition-all duration-500"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, #fff 0%, ${project.color} 100%)`
                                            }}
                                        >
                                            {project.title}
                                        </h4>
                                        <p className="text-xs font-mono tracking-[0.2em] uppercase mb-8" style={{ color: project.color }}>
                                            {project.role}
                                        </p>
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8 font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 justify-center mb-4">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-4 py-1.5 rounded-full text-xs font-mono text-white/80 border"
                                                style={{ borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex">
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: `${project.color}15`,
                                                color: project.color,
                                                border: `1px solid ${project.color}50`,
                                                textShadow: `0 0 10px ${project.color}50`
                                            }}
                                        >
                                            VIEW ARCHITECTURE
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Left/Right Navigation Flow */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-7xl flex justify-between px-4 md:px-0 pointer-events-none z-40 hidden md:flex">
                    <button
                        onClick={handlePrev}
                        className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all pointer-events-auto hover:scale-110 -ml-8"
                    >
                        <svg className="w-8 h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all pointer-events-auto hover:scale-110 -mr-8"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Nav Indicators */}
            <div className="relative z-20 flex gap-4 mt-16 md:hidden">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10 bg-white' : 'bg-white/20'}`}
                        style={i === activeIndex ? { backgroundColor: projects[i].color, boxShadow: `0 0 12px ${projects[i].color}` } : {}}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
