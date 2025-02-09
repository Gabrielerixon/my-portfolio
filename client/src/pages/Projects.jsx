// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  // Placeholder data
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    { title: 'Project 3', description: 'Description of project 3', link: '#' },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
