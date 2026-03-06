import React from 'react';
import { ArrowRight } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import DecodeText from '../global/DecodeText';

const ContactNode = ({ label, value }) => {
    return (
        <div className="mb-6">
            <p className="text-[#FF007F] text-xs font-mono mb-1 tracking-widest uppercase">{label}</p>
            <p className="text-gray-200 text-lg md:text-xl font-medium">{value}</p>
        </div>
    );
};

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const inputClasses = "w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_4px_15px_-3px_rgba(0,240,255,0.3)] transition-all duration-300 placeholder:text-gray-400 placeholder:font-mono placeholder:text-sm font-light [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0px_1000px_transparent_inset] [&:-webkit-autofill]:transition-[background-color] [&:-webkit-autofill]:duration-[5000s] [&:-webkit-autofill]:ease-in-out";

    return (
        <section id="contact" className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#020005]">
            <AuroraBackground />

            <div className="relative z-20 w-full max-w-6xl mx-auto backdrop-blur-2xl bg-white/[0.02] border border-white/10 shadow-2xl rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column: Identity & Node Status */}
                <div>
                    <h2 className="text-sm text-[#00F0FF] tracking-[0.4em] font-bold mb-4 uppercase">
                        ESTABLISH CONNECTION
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                        <DecodeText text="Let's engineer the next paradigm." />
                    </h3>

                    <div className="mt-8">
                        <ContactNode label="EMAIL" value="animesh.adk10@gmail.com" />
                        <ContactNode label="COMM" value="+91 9147071972" />
                        <ContactNode label="BASE" value="Kolkata, West Bengal" />
                    </div>
                </div>

                {/* Right Column: The Secure Form */}
                <div className="flex flex-col justify-center">
                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name // System ID"
                            className={inputClasses}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address // Return Node"
                            className={inputClasses}
                            required
                        />
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Encrypted Payload // How can we collaborate?"
                            className={`${inputClasses} resize-none`}
                            required
                        ></textarea>

                        <button type="submit" className="relative overflow-hidden group w-full md:w-auto px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:text-white transition-colors duration-300">
                            <span className="absolute inset-0 w-full h-full bg-[#FF007F] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100 z-0"></span>
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                TRANSMIT PACKET <ArrowRight size={16} />
                            </span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Global Footer */}
            <div className="absolute bottom-6 w-full text-center text-gray-500 text-xs font-mono tracking-widest uppercase z-20">
                © 2026 Animesh Adhikari. All systems operational.
            </div>
        </section>
    );
};

export default ContactSection;
