import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
  });
  const aboutRef = useRef(null);

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Vue.js',
    'Node.js',
    'Python',
    'Git',
    'MongoDB',
    'Express.js',
  ];

  const finalStats = {
    experience: 2,
    projects: 2,
    technologies: 5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const intervals = 60;
    const stepTime = duration / intervals;

    Object.keys(finalStats).forEach(key => {
      const increment = finalStats[key] / intervals;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= finalStats[key]) {
          current = finalStats[key];
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepTime);
    });
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>I'm a passionate developer</h3>
            <p>
              I specialize in frontend development and love creating
              user-friendly interfaces using modern technologies. I believe that
              code should not only be functional but also elegant and readable.
            </p>

            <div className="skills">
              <h4>Skills</h4>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>{animatedStats.experience}+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>{animatedStats.projects}+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat">
              <h3>{animatedStats.technologies}+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
