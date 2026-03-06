import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MagneticCtaButton = ({ children, secondary = false }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < 150) {
                setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (secondary) {
        return (
            <motion.button
                ref={ref}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className="px-8 py-4 bg-transparent border border-white text-white font-bold text-sm md:text-base tracking-[0.2em] rounded-full relative overflow-hidden pointer-events-auto hover:bg-white hover:text-black transition-colors duration-300"
            >
                <span>{children}</span>
            </motion.button>
        );
    }

    return (
        <motion.button
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="px-10 py-5 bg-transparent border border-[#FFD700]/50 text-white font-bold text-sm md:text-base tracking-[0.2em] rounded-full relative group overflow-hidden pointer-events-auto hover:border-[#FF4500] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)] transition-all duration-300"
        >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black uppercase">
                {children}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
        </motion.button>
    );
};

export default MagneticCtaButton;
