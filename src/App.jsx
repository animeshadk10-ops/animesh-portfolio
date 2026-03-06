import React from 'react';
import GlobalCursor from './components/global/GlobalCursor';
import Hero from './components/hero/Hero';
import MarqueeDivider from './components/global/MarqueeDivider';
import AboutSection from './components/about/AboutSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <div className="overflow-x-hidden">
      <GlobalCursor />

      <Hero />

      {/* Divider 1: Hero -> About (The Human Element) */}
      <MarqueeDivider
        items={["CRUSHING ASSIGNMENTS", "SHIPPING PROJECTS", "DRINKING COFFEE", "COMPILING CODE"]}
        bgColor="#FF007F"
        textColor="text-black"
        rotation="-2"
        speed={50}
      />

      <AboutSection />

      {/* Divider 2: About -> Experience (The System Boot) */}
      <MarqueeDivider
        items={["SYS.INIT", "LOADING ARCHITECTURE", "COMPILING DATA", "BYPASSING LIMITS", "EXECUTING PROTOCOL"]}
        bgColor="#00F0FF"
        textColor="text-black"
        rotation="2"
        speed={40}
      />

      <ExperienceSection />

      {/* Divider 3: Experience -> Projects (The Arsenal Warning) */}
      <MarqueeDivider
        items={["/// ACCESSING THE ARSENAL", "DEPLOYING SYSTEMS", "INITIALIZING 3D ENVIRONMENT"]}
        bgColor="transparent"
        textColor="#FFD700"
        rotation="0"
        speed={70}
        outline={true}
      />

      <ProjectsSection />

      {/* Divider 4: Projects -> Contact (The Uplink Setup) */}
      <MarqueeDivider
        items={["ESTABLISHING SECURE UPLINK", "AWAITING PACKET", "ENCRYPTING CONNECTION", "READY FOR TRANSMISSION"]}
        bgColor="#7000FF"
        textColor="text-white"
        rotation="-1"
        speed={60}
      />

      <ContactSection />
    </div>
  );
}

export default App;
