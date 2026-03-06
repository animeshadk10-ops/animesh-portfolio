import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';
import QuantumHorizonCanvas from './QuantumHorizonCanvas';
import EditorialBackgroundText from './EditorialBackgroundText';
import AmbientSpotlight from './AmbientSpotlight';
import EnvironmentGrid from './EnvironmentGrid';
import KineticHeadline from './KineticHeadline';
import FounderBadges from './FounderBadges';
import FounderTerminal from './FounderTerminal';
import TechStackDock from './TechStackDock';
import Navbar from '../global/Navbar';
import SystemStatus from '../global/SystemStatus';
import MagneticCtaButton from './MagneticCtaButton'; // Added this import

const SocialIcon = ({ Icon }) => (
    <motion.a
        href="#"
        className="p-3 text-gray-400 hover:text-white transition-colors duration-300 pointer-events-auto cursor-none z-40"
        whileHover={{ y: -5, color: "#FFFFFF" }}
    >
        <Icon size={20} />
    </motion.a>
);

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center pt-20 pb-40 font-sans cursor-none">

            {/* Top Level Navbar & System Status Integration */}
            <Navbar />
            <SystemStatus />

            {/* Absolute Deep Background layer (-2) */}
            <EditorialBackgroundText />

            {/* Cinematic Spotlight following cursor (-1) */}
            <AmbientSpotlight />

            {/* Background Frame Layer (z-0) */}
            <QuantumHorizonCanvas />

            {/* HUD Lines Overlay (z-10) */}
            <EnvironmentGrid />

            {/* Locally Tethered Badges Container (z-20) */}
            <FounderBadges />

            {/* Central Content Block (z-30) */}
            <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pointer-events-none">
                <div className="absolute inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_40%,transparent_70%)] -z-10 pointer-events-none"></div>

                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white tracking-[0.4em] text-xs font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                >
                    HELLO, I AM
                </motion.span>

                <KineticHeadline text="Animesh Adhikari" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="backdrop-blur-md bg-black/40 border border-white/10 px-6 py-4 rounded-2xl mt-6 max-w-3xl mx-auto shadow-2xl pointer-events-auto"
                >
                    <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed text-center">
                        Building systems that create impact. Merging <span className="text-[#FF007F] font-semibold">athletic discipline</span> with <span className="text-[#00F0FF] font-semibold">cutting-edge architecture</span>.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 relative z-20 pointer-events-auto">
                    <button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 font-black tracking-[0.2em] text-xs uppercase flex items-center gap-2">View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                    </button>
                    <button className="group relative px-8 py-4 backdrop-blur-xl bg-black/50 border border-white/20 text-white rounded-full transition-all hover:bg-white/10 hover:border-white/50 hover:scale-105">
                        <span className="font-bold tracking-[0.2em] text-xs uppercase text-gray-300 group-hover:text-white transition-colors">Contact Me</span>
                    </button>
                </div>
            </div>

            {/* Floating UI Elements (Top Z) */}

            {/* Boot Log Terminal */}
            <FounderTerminal />

            {/* macOS Dock Bottom Center (z-100) */}
            <TechStackDock />

            {/* Vertical Social Side Bar */}
            <div className="fixed bottom-8 left-8 z-40 flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-1 pointer-events-auto">
                <SocialIcon Icon={Github} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Mail} />
                <SocialIcon Icon={Twitter} />
            </div>

        </section>
    );
};

export default Hero;
