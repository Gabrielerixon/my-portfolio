// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './DailyUI.css'; // We'll reuse the DailyUI CSS for now

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Component style object with spacing fixes
  const componentStyles = {
    container: {
      marginTop: '40px',    
      paddingTop: '60px',   
      position: 'relative',
      zIndex: 1
    },
    heading: {
      position: 'relative',
      zIndex: 2,
      paddingBottom: '1rem'
    }
  };
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Project data
  const projects = [
    {
      title: 'Wanderlust Adventures',
      description: 'A modern travel booking website with clean UI and interactive elements. Features destination showcases with smooth animations.',
      link: 'https://wanderlust-adventures-mu.vercel.app/',
      isExternal: true
    },
    {
      title: 'FluxSync',
      description: 'A sleek and intuitive SaaS platform mockup featuring responsive design and modern dashboard UI components.',
      link: 'https://fluxsync-five.vercel.app/',
      isExternal: true
    },
    {
      title: 'Mountain Agency Landing',
      description: 'Landing page for a tourist firm specializing in mountain trips to the Tatra mountains.',
      link: '/dailyui/day3',
      isExternal: false
    },
    {
      title: 'Modern User Profile',
      description: 'A gaming-inspired user profile dashboard with detailed stats and a modern interface.',
      link: '/dailyui/day5',
      isExternal: false
    },
    {
      title: '404 Error Page',
      description: 'An engaging 404 error page with 3D animation and smooth effects.',
      link: '/dailyui/day7',
      isExternal: false
    }
  ];

  return (
    <div style={componentStyles.container}>
      <div className="dailyui-container">
        <div className="dailyui-hero">
          <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`} style={componentStyles.heading}>
            Web Development Projects
          </h1>
          
          <p className={`hero-description ${isLoaded ? 'animate-in' : ''}`}>
            A collection of my web development projects, showcasing responsive design, modern UIs, and interactive experiences. 
            These projects represent my skills in creating engaging digital solutions.
          </p>
        </div>
        
        <div className="dailyui-grid">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className={`project-card-wrapper ${isLoaded ? 'animate-in' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;