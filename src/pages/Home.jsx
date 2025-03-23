import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

function Home({ portfolioData }) {
  return (
    <div>
      <DarkModeToggle />
      <Navbar />
      <Hero portfolioData={portfolioData} />
        <About aboutData={portfolioData.about} />
      <Projects projects={portfolioData.projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
