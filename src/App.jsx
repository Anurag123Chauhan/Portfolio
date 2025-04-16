import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import DevelopmentExperience from './components/development-experience';
import Achievements from './components/Achievements';
// import CommunityInvolvement from './components/community-involvement';

// Wrapper component to handle scroll to section when URL changes
const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main className="pt-16"> {/* Added padding-top to account for fixed header */}
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section id="Projects">
            <Projects />
          </section>
          {/* <DevelopmentExperience /> */}
          <section id="Achievements">
            <Achievements />
          </section>
          {/* <CommunityInvolvement /> */}
          <section id="Contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;