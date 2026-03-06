import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AmbientSpotlight = () => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    const springConfig = { stiffness: 50, damping: 40 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30 pointer-events-none z-[-1] bg-gradient-to-tr from-[#FF4500]/20 via-[#FFD700]/10 to-transparent mix-blend-screen"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
};

export default AmbientSpotlight;
