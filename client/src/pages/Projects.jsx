// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Project data - only including the websites
  const projects = [
    {
      title: 'Wanderlust Adventures',
      description: 'Modern travel booking platform with immersive UI and seamless booking experience.',
      image: 'wanderlust-preview',
      link: 'https://wanderlust-adventures-mu.vercel.app/',
      isExternal: true
    },
    {
      title: 'FluxSync',
      description: 'Sleek SaaS platform mockup featuring intuitive dashboard UI and responsive design.',
      image: 'fluxsync-preview',
      link: 'https://fluxsync-five.vercel.app/', 
      isExternal: true
    },
    {
      title: 'Mountain Agency',
      description: 'Visually striking landing page for a tourism company specializing in mountain adventures.',
      image: 'mountain-landing-preview',
      link: '/dailyui/day3',
      isExternal: false
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className={`projects-header ${isLoaded ? 'animate-in' : ''}`}>
          <h1>Web Development Projects</h1>
          <div className="header-underline"></div>
          <p className="projects-description">
            A collection of my web development projects, showcasing responsive design, 
            modern UIs, and interactive experiences. These projects represent my 
            skills in creating engaging digital solutions.
          </p>
        </header>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card ${isLoaded ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`project-image ${project.image}`}></div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.isExternal ? (
                  <a 
                    href={project.link} 
                    className="project-button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                ) : (
                  <Link to={project.link} className="project-button">
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;