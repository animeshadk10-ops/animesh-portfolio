import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';

const GlobalCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Inner dot (zero delay, instant)
    const innerX = useSpring(cursorX, { type: "tween", duration: 0 });
    const innerY = useSpring(cursorY, { type: "tween", duration: 0 });

    // Outer ring (snappy micro-trail)
    const springConfigOuter = { stiffness: 400, damping: 30 };
    const outerX = useSpring(cursorX, springConfigOuter);
    const outerY = useSpring(cursorY, springConfigOuter);

    const velX = useVelocity(outerX);
    const velY = useVelocity(outerY);

    const skewX = useTransform(velX, [-1000, 1000], [-10, 10]);
    const skewY = useTransform(velY, [-1000, 1000], [-10, 10]);
    const scaleX = useTransform(velX, [-1000, 0, 1000], [1.1, 1, 1.1]);
    const scaleY = useTransform(velY, [-1000, 0, 1000], [1.1, 1, 1.1]);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const isInteractive = !!e.target.closest('button, a, input, textarea, [role="button"]');
            setIsHovering(isInteractive);
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
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#FFD700] pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
                style={{
                    x: outerX,
                    y: outerY,
                    translateX: "-50%",
                    translateY: "-50%",
                    skewX,
                    skewY,
                    scaleX,
                    scaleY,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#FF007F] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: innerX,
                    y: innerY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 4 : 1,
                    boxShadow: isHovering ? "0 0 20px 6px rgba(255, 0, 127, 0.6)" : "0 0 15px 4px rgba(255, 0, 127, 0.4)"
                }}
                transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
            />
        </>
    );
};

export default GlobalCursor;
