import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ExternalLink } from 'lucide-react';

const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EXP', id: 'experience' },
    { label: 'PROJ', id: 'projects' },
    { label: 'COMMS', id: 'contact' }
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                    <a
                        href="https://linkedin.com/in/animesh-adhikari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center gap-2 overflow-hidden rounded-full px-6 py-2 bg-[#FF007F]/10 border border-[#FF007F]/30 transition-all duration-300 hover:bg-[#FF007F]/20 hover:border-[#FF007F]/60 hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]"
                    >
                        <span className="font-mono text-xs font-bold text-[#FF007F] tracking-[0.2em]">INIT_RESUME</span>
                        <ExternalLink size={12} className="text-[#FF007F]" />
                    </a>
                </div>

                {/* Mobile Fallback (The Hamburger) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="text-[#FF007F]" size={20} /> : <Menu className="text-[#FF007F]" size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-[190] w-[90vw] backdrop-blur-3xl bg-[#05000A]/95 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="flex items-center justify-between group"
                            >
                                <div className="flex gap-4 items-center">
                                    <span className="font-mono text-[#FF007F] opacity-50 text-sm">//</span>
                                    <span className={`text-xl font-bold tracking-tighter ${activeSection === link.id ? 'text-[#FF007F]' : 'text-white'}`}>
                                        {link.label}
                                    </span>
                                </div>
                                <div className={`w-2 h-2 rounded-full ${activeSection === link.id ? 'bg-[#FF007F]' : 'bg-transparent'} transition-colors`} />
                            </a>
                        ))}
                        <div className="h-[1px] w-full bg-white/10 my-2" />
                        <a
                            href="https://linkedin.com/in/animesh-adhikari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 py-4 bg-[#FF007F] text-white rounded-2xl font-bold uppercase tracking-widest text-xs"
                        >
                            View Resume <ExternalLink size={14} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
