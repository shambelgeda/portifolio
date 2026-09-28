import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import CybersecurityExperience from './sections/CybersecurityExperience';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Philosophy from './sections/Philosophy';
import CurrentlyExploring from './sections/CurrentlyExploring';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import PlaceholderModal from './components/PlaceholderModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [placeholderModalData, setPlaceholderModalData] = useState(null);

  const openPlaceholderModal = (data) => {
    setPlaceholderModalData(data);
  };

  const closePlaceholderModal = () => {
    setPlaceholderModalData(null);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Header / Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero 
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenPlaceholderModal={openPlaceholderModal}
        />
        
        <About />

        <Skills />

        <CybersecurityExperience />

        <Experience />

        <Projects 
          onOpenPlaceholderModal={openPlaceholderModal}
        />

        <Education />

        <Certifications />

        <Philosophy />

        <CurrentlyExploring />

        <Contact 
          onOpenPlaceholderModal={openPlaceholderModal}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPlaceholderModal={openPlaceholderModal}
      />

      {/* Transparent Modals */}
      <CvModal 
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <PlaceholderModal 
        isOpen={!!placeholderModalData}
        data={placeholderModalData}
        onClose={closePlaceholderModal}
      />
    </div>
  );
}
