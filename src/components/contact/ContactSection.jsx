import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactNode = ({ label, value }) => {
    return (
        <div className="mb-6">
            <p className="text-brand-light-blue text-xs font-bold mb-1 tracking-widest uppercase">{label}</p>
            <p className="text-brand-navy text-lg md:text-xl font-medium">{value}</p>
        </div>
    );
};

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const inputClasses = "w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy text-base md:text-lg focus:outline-none focus:border-brand-blue transition-all duration-300 placeholder:text-brand-navy/40 placeholder:font-sans placeholder:text-sm font-light [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-text-fill-color:#023047] [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0px_1000px_transparent_inset] [&:-webkit-autofill]:transition-[background-color] [&:-webkit-autofill]:duration-[5000s] [&:-webkit-autofill]:ease-in-out";

    return (
        <section id="contact" className="relative w-full min-h-screen py-24 md:py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-brand-bg font-sans">
            <div className="relative z-20 w-full max-w-6xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column: Identity & Node Status */}
                <div>
                    <h2 className="text-sm text-brand-orange tracking-[0.2em] font-bold mb-4 uppercase">
                        ESTABLISH CONNECTION
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-8 leading-tight">
                        Let's engineer the next paradigm.
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
                            placeholder="Your Name"
                            className={inputClasses}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className={inputClasses}
                            required
                        />
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="How can we collaborate?"
                            className={`${inputClasses} resize-none`}
                            required
                        ></textarea>

                        <button type="submit" className="relative overflow-hidden group w-full md:w-auto px-10 py-5 bg-brand-orange text-white font-bold uppercase tracking-widest rounded-full transition-colors duration-300 hover:bg-brand-yellow hover:shadow-md">
                            <span className="relative z-10 flex items-center gap-2 justify-center text-sm">
                                TRANSMIT MESSAGE <ArrowRight size={16} />
                            </span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Global Footer */}
            <div className="absolute bottom-6 w-full text-center text-brand-navy/60 text-xs font-semibold tracking-widest uppercase z-20">
                © {new Date().getFullYear()} Animesh Adhikari. Minimalist Execution.
            </div>
        </section>
    );
};

export default ContactSection;
