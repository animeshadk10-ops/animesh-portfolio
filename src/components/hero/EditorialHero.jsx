import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EditorialHero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-brand-bg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      
      {/* The Large Circle (Z-10) */}
      <div className="absolute top-[10vh] right-[5vw] -left-[25vw] w-[70vw] h-[70vw] rounded-full bg-brand-light-blue/15 backdrop-blur-3xl z-10 pointer-events-none"></div>

      {/* LEFT BLOCK: THE HOOK (7 COLS) */}
      <div className="lg:col-span-7 relative flex flex-col justify-center px-6 md:px-12 lg:pl-32 lg:pr-12 h-full z-20">
        
        {/* Background Typography Art */}
        <div 
          className="absolute -left-10 top-1/4 text-[15vw] font-black text-transparent opacity-5 pointer-events-none select-none z-0" 
          style={{ WebkitTextStroke: '2px #023047', lineHeight: '0.8' }}
        >
          ANIMESH<br/>ANIMESH<br/>ANIMESH
        </div>

        {/* Foreground Content (Z-20 constraint enforced inside the container) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20"
        >
          <span className="text-xs font-mono text-brand-blue tracking-[0.25em] uppercase mb-6 block z-20 relative">
            // SYSTEMS ARCHITECT & FRONTEND ENGINEER
          </span>

          <h1 className="text-brand-navy font-extrabold text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.04em] leading-[0.95] max-w-4xl z-20 relative select-none">
            Hello, I'm <span className="text-brand-orange">Animesh.</span>
            <br className="hidden sm:block" />Systems engineered for scale.
          </h1>
          
          <p className="text-slate-600 font-normal text-[clamp(1.125rem,1.5vw,1.35rem)] leading-relaxed max-w-2xl mt-8 mb-12 z-20 relative">
            Based in Kolkata, merging athletic consistency with core frontend engineering to deliver high-performance enterprise software at IEM and Pinnacle Labs.
          </p>

          <div className="flex flex-wrap gap-6 items-center z-20 relative">
            <button className="px-10 py-4 bg-brand-orange text-white rounded-full font-black tracking-[0.2em] text-xs uppercase flex items-center gap-2 group hover:shadow-lg transition-all hover:scale-105">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-brand-navy font-bold tracking-[0.2em] text-xs uppercase hover:text-brand-blue transition-colors">
              // Explore Experience
            </button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT BLOCK: THE VISUAL ANCHOR (5 COLS) */}
      <div className="hidden lg:flex lg:col-span-5 relative h-full items-center justify-center bg-brand-bg">
        
        {/* Image Container (Z-30) */}
        <motion.div 
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute right-0 top-[20vh] w-full max-w-xl aspect-[3/4] z-30 shadow-2xl shadow-brand-navy/10 overflow-hidden rounded-l-2xl group"
        >
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
            alt="Male Professional Dummy Image" 
          />
        </motion.div>

        {/* Accent Geometric Shape */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-10 w-32 h-32 border-4 border-brand-yellow rounded-full opacity-20 z-10"
        ></motion.div>
      </div>

    </section>
  );
};

export default EditorialHero;
