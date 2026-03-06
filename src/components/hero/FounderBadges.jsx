import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, Cpu, Code2, Activity } from 'lucide-react';

const badges = [
    { icon: <Rocket size={18} className="text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]" />, text: "Founder @ FlowOS", position: "absolute top-[20vh] left-[5vw] pointer-events-auto" },
    { icon: <Cpu size={18} className="text-[#00F0FF] drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" />, text: "Founder @ Agri-Vani", position: "absolute top-[15vh] right-[5vw] pointer-events-auto" },
    { icon: <Code2 size={18} className="text-[#A0A0A0] drop-shadow-[0_0_5px_rgba(160,160,160,0.8)]" />, text: "Frontend Engineer", position: "absolute top-[50vh] left-[2vw] pointer-events-auto" },
    { icon: <Activity size={18} className="text-[#FF4500] drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]" />, text: "Athlete Mindset", position: "absolute top-[45vh] right-[2vw] pointer-events-auto" },
];

const TiltBadge = ({ badge, idx }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 300, damping: 20 };
    const rotateX = useSpring(useMotionTemplate`${y}deg`, springConfig);
    const rotateY = useSpring(useMotionTemplate`${x}deg`, springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate rotation between -15 and 15 degrees based on mouse position
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct * 30);
        y.set(yPct * -30);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`${badge.position} cursor-none`}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 + idx, repeatType: "reverse", ease: "easeInOut" }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="flex items-center gap-3 backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-full px-5 py-2.5 transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:border-white/40"
            >
                <div style={{ transform: "translateZ(30px)" }}>
                    {badge.icon}
                </div>
                <span
                    style={{ transform: "translateZ(20px)" }}
                    className="text-white text-sm font-medium whitespace-nowrap tracking-wide drop-shadow-md"
                >
                    {badge.text}
                </span>
            </motion.div>
        </motion.div>
    );
};

const FounderBadges = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20 overflow-hidden">
            {badges.map((badge, idx) => (
                <TiltBadge key={idx} badge={badge} idx={idx} />
            ))}
        </div>
    );
};

export default FounderBadges;
