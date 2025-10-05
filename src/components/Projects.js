import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faMobileAlt, 
  faChartBar, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      icon: faLaptopCode,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "Mobile Task Manager",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      icon: faMobileAlt,
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2-demo.com"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data analysis with real-time charts, filtering capabilities, and export functionality.",
      icon: faChartBar,
      technologies: ["D3.js", "React", "Python", "Flask"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3-demo.com"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id'));
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
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
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
                  {project.technologies.map((tech) => (
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