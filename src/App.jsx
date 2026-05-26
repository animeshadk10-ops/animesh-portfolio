import React from 'react';
import Navbar from './components/global/Navbar';
import ScrollProgress from './components/global/ScrollProgress';
import CustomCursor from './components/global/CustomCursor';
import Hero from './components/hero/Hero';
import TechStackBar from './components/global/TechStackBar';
import ServicesSection from './components/services/ServicesSection';
import MarqueeDivider from './components/global/MarqueeDivider';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactSection from './components/contact/ContactSection';
import './App.css';

function App() {
  return (
    <div className="overflow-x-hidden font-sans bg-[#050d1a] text-white text-base">
      {/* Global overlays */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Sections */}
      <Hero />
      <TechStackBar />
      <ServicesSection />

      {/* Divider: Services -> About */}
      <MarqueeDivider
        items={["CREATIVE VISION", "TECHNICAL EXCELLENCE", "PIXEL PERFECT", "CODE CRAFTED", "FUTURE READY"]}
        gradientFrom="#00d4ff"
        gradientTo="#a855f7"
        rotation="-1"
        speed={45}
      />

      <AboutSection />
      <SkillsSection />

      {/* Divider: Skills -> Experience */}
      <MarqueeDivider
        items={["SYS.INIT", "LOADING ARCHITECTURE", "COMPILING DATA", "BYPASSING LIMITS", "EXECUTING PROTOCOL"]}
        gradientFrom="#a855f7"
        gradientTo="#ec4899"
        rotation="1"
        speed={40}
      />

      <ExperienceSection />

      {/* Divider: Experience -> Projects */}
      <MarqueeDivider
        items={["/// ACCESSING THE ARSENAL", "DEPLOYING SYSTEMS", "INITIALIZING RENDER", "BUILDING THE FUTURE"]}
        gradientFrom="#f97316"
        gradientTo="#facc15"
        rotation="0"
        speed={55}
      />

      <ProjectsSection />

      {/* Divider: Projects -> Contact */}
      <MarqueeDivider
        items={["ESTABLISHING SECURE UPLINK", "AWAITING PACKET", "ENCRYPTING CONNECTION", "READY FOR TRANSMISSION"]}
        gradientFrom="#ec4899"
        gradientTo="#00d4ff"
        rotation="-1"
        speed={50}
      />

      <ContactSection />
    </div>
  );
}

export default App;
