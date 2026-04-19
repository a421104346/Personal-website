import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'a421104346@gmail.com',
      href: 'mailto:a421104346@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: 'https://github.com/a421104346',
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/in/shunyang-zhai-2180b3234',
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
              free to email me.
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
