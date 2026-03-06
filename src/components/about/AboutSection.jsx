import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Activity, Cpu } from 'lucide-react';
import NeonStellarBackground from './NeonStellarBackground';
import { staggerContainer, fadeUpTilt, clipPathReveal } from '../../utils/animations';

const AboutCard = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={fadeUpTilt}
            className={`backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-[#FF007F]/40 hover:shadow-[0_0_40px_rgba(255,0,127,0.15),inset_0_0_20px_rgba(255,0,127,0.05)] transition-all duration-500 cursor-none ${className}`}
        >
            {/* Viewfinder Crosshairs */}
            <div className="absolute top-4 left-4 w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[1px] bg-white/40"></div>
                <div className="absolute h-full w-[1px] bg-white/40"></div>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[1px] bg-white/40"></div>
                <div className="absolute h-full w-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-4 left-4 w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[1px] bg-white/40"></div>
                <div className="absolute h-full w-[1px] bg-white/40"></div>
            </div>
            <div className="absolute bottom-4 right-4 w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[1px] bg-white/40"></div>
                <div className="absolute h-full w-[1px] bg-white/40"></div>
            </div>

            {children}
        </motion.div>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="relative w-full min-h-screen bg-[#05000A] py-32 px-6 flex flex-col items-center font-sans overflow-hidden cursor-none">

            {/* Dynamic 3D Fix Background */}
            <NeonStellarBackground />

            <div className="relative z-20 w-full max-w-6xl mx-auto pointer-events-none">

                {/* We need the staggerChildren container */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto"
                >

                    {/* Card 1: Portrait */}
                    <AboutCard className="md:col-span-1 md:row-span-2 p-0 flex flex-col justify-end">
                        <img
                            src="/src/assets/images/animeshimg1.jpg"
                            alt="Animesh Base"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-100 group-hover:opacity-0 transition-all duration-700 z-10"
                        />
                        <img
                            src="/src/assets/images/animeshimg2.jpg"
                            alt="Animesh Active"
                            className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700 z-0"
                        />

                        {/* Gradient overlay (bottom up) */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="relative z-30 p-6">
                            <h3 className="text-white text-xl font-bold tracking-wide">Animesh Adhikari. Entrepreneur.</h3>
                        </div>
                    </AboutCard>

                    {/* Card 2: Main Bio */}
                    <AboutCard className="md:col-span-2">
                        <User size={24} color="#00F0FF" className="mb-4 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                        <h3 className="text-2xl font-bold text-white mb-4">The Architecture of Impact</h3>
                        <p className="text-gray-300 leading-loose text-sm md:text-base font-light">
                            I’m a frontend engineer, builder, and engineering student driven by the ambition to create meaningful digital systems. My work sits at the intersection of technology, product thinking, and entrepreneurship. My journey started with a deep fascination for how digital products are designed, evolving into a focus on modern web technologies, performance, and functionality.
                        </p>
                    </AboutCard>

                    {/* Card 3: Ventures */}
                    <AboutCard className="md:col-span-1 flex flex-col justify-center">
                        <Rocket size={24} color="#FF007F" className="mb-4 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]" />
                        <h3 className="text-xl font-bold text-white mb-3">Current Ventures</h3>
                        <ul className="text-gray-300 leading-loose text-sm md:text-base space-y-3 font-light list-disc pl-4">
                            <li><span className="text-[#00F0FF] font-semibold drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">Agrivani:</span> Creating technology-driven solutions for agriculture.</li>
                            <li><span className="text-[#FF007F] font-semibold drop-shadow-[0_0_5px_rgba(255,0,127,0.5)]">FlowOS:</span> Advanced medical software engineered to optimize healthcare systems and benefit people.</li>
                        </ul>
                    </AboutCard>

                    {/* Card 4: Mindset */}
                    <AboutCard className="md:col-span-1 flex flex-col justify-center">
                        <Activity size={24} color="#7000FF" className="mb-4 drop-shadow-[0_0_8px_rgba(112,0,255,0.8)]" />
                        <h3 className="text-xl font-bold text-white mb-3">The Athlete Mindset</h3>
                        <p className="text-gray-300 leading-loose text-sm md:text-base font-light">
                            Training and sports have shaped how I approach my work—with consistency, resilience, and a focus on long-term progress. This discipline influences how I learn, build, and pursue ambitious goals.
                        </p>
                    </AboutCard>

                    {/* Card 5: Philosophy */}
                    <AboutCard className="md:col-span-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="flex-1">
                            <Cpu size={24} color="#FFD700" className="mb-4 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                            <h3 className="text-xl font-bold text-white mb-3">Shaping the Future</h3>
                            <p className="text-gray-300 text-lg font-light leading-loose">
                                Right now, I’m focused on becoming a stronger engineer, exploring system design, and building products that push boundaries. For me, technology is not just about writing code — it’s about building systems that have the potential to shape the future.
                            </p>
                        </div>
                    </AboutCard>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
