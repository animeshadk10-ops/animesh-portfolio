import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import RevealingHeadline from './RevealingHeadline';
import AntiGravityCanvas from './AntiGravityCanvas';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-center">
            {/* 3D Canvas Background */}
            <AntiGravityCanvas />

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center h-full pointer-events-none">
                {/* Left Side (Typography & CTA) */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 pointer-events-auto">
                    {/* Faded intro */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[#FF6B00] text-xl font-medium tracking-wide"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Headline */}
                    <RevealingHeadline />

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
                    >
                        IT Undergrad @ IEM Kolkata | Web Developer | AI Enthusiast
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                        className="mt-4"
                    >
                        <button className="px-8 py-4 bg-transparent border border-[#FF6B00] text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(255,107,0,0.5)] hover:shadow-[0_0_25px_rgba(255,107,0,0.8)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                            <span className="relative z-10">Explore Projects</span>
                            <div className="absolute inset-0 h-full w-full bg-[#FF6B00]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </button>
                    </motion.div>
                </div>

                {/* Right space for canvas floaty */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
            </div>

            {/* Bottom Bouncing Arrow */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-gray-400 opacity-70"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
