import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faServer,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import portfolioProjects from '../data/portfolioProjects';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const iconMap = {
    frontend: faLaptopCode,
    fullstack: faServer,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectId = parseInt(
              entry.target.getAttribute('data-project-id')
            );
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));

    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Personal Projects</h2>
        <div className="projects-grid">
          {portfolioProjects.map(project => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(project.id) ? 'visible' : ''}`}
              data-project-id={project.id}
            >
              <div className="project-image">
                <FontAwesomeIcon
                  icon={iconMap[project.iconKey] || faLaptopCode}
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span
                    className={`project-status ${project.status === 'Live' ? 'live' : 'deploying'}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p>{project.summary}</p>
                <div className="project-meta">
                  <span className="project-type">{project.projectType}</span>
                </div>
                <div className="project-tech">
                  {project.techStack.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p className="project-notes">{project.notes}</p>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                    </a>
                  ) : (
                    <a
                      href={project.deployUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
