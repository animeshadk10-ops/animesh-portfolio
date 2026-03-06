import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for tracking cursor position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Springs for smooth movement
    const springConfigRing = { damping: 15, stiffness: 150, mass: 0.5 };
    const springConfigDot = { damping: 100, stiffness: 1000, mass: 0.1 }; // Instant tracking

    const cursorXSpring = useSpring(cursorX, springConfigRing);
    const cursorYSpring = useSpring(cursorY, springConfigRing);

    const dotXSpring = useSpring(cursorX, springConfigDot);
    const dotYSpring = useSpring(cursorY, springConfigDot);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const isInteractable = !!e.target.closest('button, a, [role="button"]');
            setIsHovering(isInteractable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Neon Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255,255,255,0.05)' : 'transparent',
                }}
            />
            {/* Trailing Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-[#FF007F] rounded-full pointer-events-none z-[9999]"
                style={{
                    x: dotXSpring,
                    y: dotYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default CustomCursor;
