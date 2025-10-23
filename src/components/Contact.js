import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoToMessageBoard = () => {
    navigate('/messages');
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'a421104346@gmail.com',
      href: 'mailto:a421104346@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '0421234567',
      href: 'tel:+61421234567',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Magill, 5072, SA, Australia',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              If you have any project ideas or collaboration opportunities, feel
              free to email me. The phone number is not real, as I believe it is
              more dangerous to share a phone number online.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <FontAwesomeIcon icon={info.icon} />
                  {info.href ? (
                    <a href={info.href}>
                      <span>{info.value}</span>
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="message-board-redirect">
            <div className="redirect-card">
              <FontAwesomeIcon icon={faComments} className="redirect-icon" />
              <h3>Share Your Thoughts!</h3>
              <p>
                If you have any suggestions, feedback, or just want to say
                hello, please leave your opinion on our message board.
              </p>
              <button
                className="btn btn-primary message-board-btn"
                onClick={handleGoToMessageBoard}
              >
                <FontAwesomeIcon icon={faComments} />
                Go to Message Board
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
