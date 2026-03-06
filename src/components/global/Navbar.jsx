import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu } from 'lucide-react';

const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EXP', id: 'experience' },
    { label: 'PROJ', id: 'projects' },
    { label: 'COMMS', id: 'contact' }
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    // Handle scroll to update active section (simplified logic for UI)
    useEffect(() => {
        const handleScroll = () => {
            // Placeholder for actual scroll detection logic
            // In a real app, you'd calculate offsets for each section
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-[95vw] max-w-5xl backdrop-blur-2xl bg-[#05000A]/80 border border-white/5 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,0,127,0.05)]"
        >
            {/* Left Zone: The Kinetic Brand */}
            <div className="flex items-center gap-3">
                <Terminal size={20} className="text-[#FF007F]" />
                <span className="font-bold text-white tracking-wide text-lg">
                    Animesh<span className="text-[#FF007F] animate-pulse">_</span>
                </span>
            </div>

            {/* Center Zone: The Syntax Navigation (Desktop Only) */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`font-mono text-xs font-semibold tracking-[0.2em] transition-colors duration-300 cursor-pointer flex gap-2 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]' : ''}`}
                        >
                            <span className={`transition-colors duration-300 ${isActive ? 'text-[#FF007F]' : 'text-gray-600'}`}>
                                //
                            </span>
                            <span className={`transition-colors duration-300 ${isActive ? 'text-[#FF007F]' : 'text-gray-400 hover:text-[#FF007F]'}`}>
                                {link.label}
                            </span>
                        </a>
                    );
                })}
            </div>

            {/* Right Zone: The System Initialization Button */}
            <div className="hidden md:block">
                <button className="relative group overflow-hidden rounded-full px-6 py-2 bg-[#FF007F]/10 border border-[#FF007F]/30 transition-all duration-300 hover:bg-[#FF007F]/20 hover:border-[#FF007F]/60 hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]">
                    <span className="font-mono text-xs font-bold text-[#FF007F] tracking-[0.2em]">INIT_RESUME</span>
                </button>
            </div>

            {/* Mobile Fallback (The Hamburger) */}
            <div className="md:hidden">
                <button className="p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Menu className="text-[#FF007F]" size={20} />
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
