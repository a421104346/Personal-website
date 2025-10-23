import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <h1>
          Hello, I'm <span className="highlight">Shunyang</span>
        </h1>
        <p className="intro-subtitle">Software Engineer</p>
        <p className="intro-description">
          Welcome to my personal website! This site showcases my software
          development projects and skills. You can explore my work, chat with
          an AI assistant for questions, and leave feedback on the message
          board. Feel free to connect with me!
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
