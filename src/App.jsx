import React, { useState } from 'react';
import Navbar from './components/global/Navbar';
import ScrollProgress from './components/global/ScrollProgress';
import CustomCursor from './components/global/CustomCursor';
import SpotlightCursor from './components/global/SpotlightCursor';
import Preloader from './components/global/Preloader';
import Hero from './components/hero/Hero';
import TechStackBar from './components/global/TechStackBar';
import ServicesSection from './components/services/ServicesSection';
import MarqueeDivider from './components/global/MarqueeDivider';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ProcessSection from './components/process/ProcessSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import CtaBanner from './components/global/CtaBanner';
import ContactSection from './components/contact/ContactSection';
import './App.css';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* Stunning intro animation */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      <div
        className={`overflow-x-hidden font-sans bg-[#050d1a] text-white text-base transition-opacity duration-500 ${
          preloaderDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Global effects */}
        <CustomCursor />
        <SpotlightCursor />
        <ScrollProgress />
        <Navbar />

        {/* ═══ SECTIONS ═══ */}

        {/* 1. Hero — the showstopper */}
        <Hero />

        {/* 2. Tech Stack Marquee */}
        <TechStackBar />

        {/* 3. Services */}
        <ServicesSection />

        {/* Divider */}
        <MarqueeDivider
          items={["CREATIVE VISION", "TECHNICAL EXCELLENCE", "PIXEL PERFECT", "CODE CRAFTED", "FUTURE READY"]}
          gradientFrom="#00e5ff"
          gradientTo="#7c4dff"
          rotation="-1"
          speed={45}
        />

        {/* 4. About */}
        <AboutSection />

        {/* 5. Skills */}
        <SkillsSection />

        {/* 6. Process / How I Work */}
        <ProcessSection />

        {/* Divider */}
        <MarqueeDivider
          items={["SYS.INIT", "LOADING ARCHITECTURE", "COMPILING DATA", "BYPASSING LIMITS", "EXECUTING PROTOCOL"]}
          gradientFrom="#7c4dff"
          gradientTo="#ff4081"
          rotation="1"
          speed={40}
        />

        {/* 7. Experience */}
        <ExperienceSection />

        {/* Divider */}
        <MarqueeDivider
          items={["/// ACCESSING THE ARSENAL", "DEPLOYING SYSTEMS", "INITIALIZING RENDER", "BUILDING THE FUTURE"]}
          gradientFrom="#ff6d00"
          gradientTo="#ffd600"
          rotation="0"
          speed={55}
        />

        {/* 8. Projects */}
        <ProjectsSection />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. CTA Banner */}
        <CtaBanner />

        {/* Divider */}
        <MarqueeDivider
          items={["ESTABLISHING SECURE UPLINK", "AWAITING PACKET", "ENCRYPTING CONNECTION", "READY FOR TRANSMISSION"]}
          gradientFrom="#ff4081"
          gradientTo="#00e5ff"
          rotation="-1"
          speed={50}
        />

        {/* 11. Contact */}
        <ContactSection />
      </div>
    </>
  );
}

export default App;
