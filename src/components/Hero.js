import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">John Doe</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer & Designer</p>
        <p className="hero-description">
          I love creating beautiful and functional websites and applications
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
          <button 
            className="btn btn-outline" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </section>
  );
};

export default Hero;