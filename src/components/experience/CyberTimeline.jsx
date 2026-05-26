import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpTilt, drawLine } from '../../utils/animations';

const timelineData = [
    {
        id: "impetus",
        title: "Google Impetus Hackathon",
        badge: "TOP 10 // NATIONAL",
        description: "Architected scalable AI solutions. Secured Top 10 placement globally, competing against 200+ domestic teams across India and 3 international teams.",
        tech: ["Python", "GenAI APIs", "System Design"],
        color: "#219EBC" // brand-blue
    },
    {
        id: "pinnacle",
        title: "Pinnacle Labs Pvt Ltd",
        badge: "WEB DEV // INTERN",
        description: "Spearheaded frontend performance optimizations, reducing page load latency by 20%. Integrated RESTful APIs for cross-browser enterprise web applications.",
        tech: ["React.js", "JavaScript", "CSS"],
        color: "#FB8500" // brand-orange
    },
    {
        id: "genspark",
        title: "GenSpark Hackathon",
        badge: "3RD PLACE // PODIUM",
        description: "Engineered a Generative AI application under a brutal 24-hour deadline, demonstrating rapid prototyping and high-pressure execution.",
        tech: ["Generative AI", "React", "Node.js"],
        color: "#FFB703" // brand-yellow
    },
    {
        id: "sparkrock",
        title: "SPARK & ROCK 2025",
        badge: "3RD PLACE // PODIUM",
        description: "Recognized for excellence in full-stack app building and generative AI integration among top-tier engineering competitors.",
        tech: ["Full Stack", "App Architecture"],
        color: "#023047" // brand-navy
    }
];

const CyberTimeline = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto font-sans">
            <div className="flex items-center gap-4 mb-12">
                <h3 className="text-brand-navy text-xl font-bold tracking-wide">Timeline_Execution</h3>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-brand-blue/30 to-transparent"></div>
            </div>

            <motion.div
                variants={drawLine}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute left-[7px] top-[80px] w-[2px] bg-brand-navy/10 z-0 origin-top"
            ></motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-8 relative z-10"
            >
                {timelineData.map((item) => (
                    <motion.div variants={fadeUpTilt} key={item.id} className="relative pl-12 group">
                        <div
                            className="absolute left-0 top-5 w-4 h-4 rounded-full border-[3px] bg-brand-bg transition-transform duration-300 group-hover:scale-125"
                            style={{ borderColor: item.color }}
                        ></div>

                        <div className="relative bg-white border border-gray-100 p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: item.color }}></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <h4 className="text-brand-navy text-lg md:text-xl font-bold tracking-wide">{item.title}</h4>
                                <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono tracking-widest whitespace-nowrap" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                                    {item.badge}
                                </span>
                            </div>

                            <p className="text-brand-navy/70 text-sm md:text-base leading-relaxed max-w-2xl">{item.description}</p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.tech.map(t => (
                                    <span key={t} className="px-3 py-1 rounded-full bg-brand-light-blue/20 text-brand-navy text-xs font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CyberTimeline;
