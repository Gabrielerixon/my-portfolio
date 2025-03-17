// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle animations on load
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="modern-home">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`}>
            Gabriel Eriksson
          </h1>
          
          <h2 className={`hero-subtitle ${isLoaded ? 'animate-in' : ''}`}>
            Full Stack Developer
          </h2>
          
          <div className={`hero-description ${isLoaded ? 'animate-in' : ''}`}>
            <p>Crafting intuitive digital experiences with modern web technologies.</p>
            <p>Specialized in <span className="highlight">React</span> and <span className="highlight">Node.js</span>.</p>
          </div>
          
          <div className={`hero-cta ${isLoaded ? 'animate-in' : ''}`}>
            <Link to="/dailyui" className="primary-btn">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className={`hero-graphic ${isLoaded ? 'animate-in' : ''}`}>
          <div className="graphic-element circle"></div>
          <div className="graphic-element square"></div>
          <div className="graphic-element triangle"></div>
          <div className="code-block">
            <pre>{`function Portfolio() {
  return (
    <Experience 
      skills={['React', 'Node.js']}
      passion="Beautiful UIs"
    />
  )
}`}</pre>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="skills-section">
        <div className="skills-container">
          <h2 className={`section-title ${scrollPosition > 100 ? 'animate-in' : ''}`}>
            My Skills
          </h2>
          
          <div className="skills-grid">
            {[
              { name: 'React', icon: '⚛️', level: 90 },
              { name: 'Node.js', icon: '🟢', level: 85 },
              { name: 'JavaScript', icon: '🟨', level: 92 },
              { name: 'CSS/SCSS', icon: '🎨', level: 88 },
              { name: 'UI/UX Design', icon: '📱', level: 80 },
              { name: 'Responsive Design', icon: '📐', level: 95 }
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-card ${scrollPosition > 200 ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar" 
                    style={{ 
                      width: scrollPosition > 300 ? `${skill.level}%` : '0%',
                      transition: `width 1s ease-out ${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects preview section */}
      <section className="projects-preview">
        <div className="projects-container">
          <h2 className={`section-title ${scrollPosition > 500 ? 'animate-in' : ''}`}>
            Featured Projects
          </h2>
          
          <div className="featured-projects">
            {[
              {
                title: 'Daily UI Challenge',
                description: 'A collection of UI components and pages created as part of the Daily UI challenge.',
                image: 'ui-preview',
                link: '/dailyui'
              },
              {
                title: 'Interactive Calculator',
                description: 'A beautiful calculator with a modern gradient design and full functionality.',
                image: 'calculator-preview',
                link: '/dailyui/day4'
              },
              {
                title: 'User Profile Dashboard',
                description: 'A gaming-inspired user profile with detailed stats and a modern interface.',
                image: 'profile-preview',
                link: '/dailyui/day5'
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className={`project-preview-card ${scrollPosition > 600 ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`project-image ${project.image}`}></div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link} className="view-project-btn">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`view-all-container ${scrollPosition > 800 ? 'animate-in' : ''}`}>
            <Link to="/dailyui" className="view-all-btn">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* About section preview */}
      <section className="about-preview">
        <div className={`about-text ${scrollPosition > 900 ? 'animate-in' : ''}`}>
          <h2>About Me</h2>
          <p>I'm Gabriel, a passionate developer focused on creating engaging web experiences that combine aesthetic appeal with functional design.</p>
          <p>With expertise in modern frontend frameworks and backend technologies, I build full-stack applications that are both beautiful and performant.</p>
          <Link to="/about" className="learn-more-btn">
            Learn More
          </Link>
        </div>
        
        <div className={`about-image ${scrollPosition > 900 ? 'animate-in' : ''}`}>
          <div className="profile-placeholder">
            <div className="profile-circle"></div>
            <div className="profile-square"></div>
          </div>
        </div>
      </section>
      
      {/* Contact call-to-action */}
      <section className="contact-cta">
        <h2 className={`${scrollPosition > 1100 ? 'animate-in' : ''}`}>
          Let's Work Together
        </h2>
        
        <p className={`${scrollPosition > 1150 ? 'animate-in' : ''}`}>
          Have a project in mind? I'd love to hear about it.
        </p>
        
        <div className={`${scrollPosition > 1200 ? 'animate-in' : ''}`}>
          <Link to="/contact" className="contact-now-btn">
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;