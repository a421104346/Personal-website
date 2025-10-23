import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faChartBar,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: 'Weather App Development Challenge',
      description:
        'A modern weather application built with React, featuring real-time weather data, location-based forecasts, and interactive weather maps with responsive design.',
      icon: faChartBar,
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      githubUrl:
        'https://github.com/a421104346/Weather_App_Development_Challenge',
      liveUrl:
        'https://main.d131zjotu2of9u.amplifyapp.com/',
    },
    {
      id: 2,
      title: 'Personal Website',
      description:
        'A responsive personal portfolio website built with React, featuring an AI chat assistant, modern design, and smooth animations. Showcases projects and skills.',
      icon: faLaptopCode,
      technologies: ['React', 'React Router', 'OpenAI API', 'CSS3'],
      githubUrl: 'https://github.com/a421104346/Personal-website',
      liveUrl: 'https://a421104346.github.io/Personal-website',
    },
  ];

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
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(project.id) ? 'visible' : ''}`}
              data-project-id={project.id}
            >
              <div className="project-image">
                <FontAwesomeIcon icon={project.icon} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                  </a>
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
