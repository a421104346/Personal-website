import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>My Website</h2>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;