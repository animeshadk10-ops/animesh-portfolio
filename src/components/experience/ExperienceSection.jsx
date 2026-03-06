import React from 'react';
import TechStackMarquee from './TechStackMarquee';
import CyberTimeline from './CyberTimeline';
import DecodeText from '../global/DecodeText';

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative w-full min-h-fit pt-32 pb-16 bg-[#05000A] overflow-hidden flex flex-col items-center cursor-none">

            {/* Section Divider (The Bridge) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>

            {/* Massive Faint Radial Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* Header Sequence */}
                <div className="text-center mb-16">
                    <h3 className="text-sm text-[#00F0FF] tracking-[0.3em] font-bold mb-4">
                        PROVING GROUND
                    </h3>
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        <DecodeText text="TESTED IN COMPETITION." /><br /><DecodeText text="PROVEN IN PRODUCTION." />
                    </h2>
                </div>

                {/* The Tech Arsenal */}
                <TechStackMarquee />

                {/* Tightened Spacing */}
                <div className="mt-16">
                    {/* The Hackathon/Experience Timeline */}
                    <CyberTimeline />
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
