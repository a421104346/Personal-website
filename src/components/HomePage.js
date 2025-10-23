import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
