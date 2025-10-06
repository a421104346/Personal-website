import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
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
    <section id="home" className="intro">
      <div className="intro-content">
        <h1>
          Hello, I'm <span className="highlight">Your Name</span>
        </h1>
        <p className="intro-subtitle">Your Job Title</p>
        <p className="intro-description">
          Your personal description here - what you do and what you love
        </p>
        <div className="intro-buttons">
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
      <div className="intro-image">
        <div className="profile-circle">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </section>
  );
};

export default Intro;