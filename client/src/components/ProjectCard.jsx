// src/components/ProjectCard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { getRandomGradient } from '../utils/gradientUtils';

const ProjectCard = ({ project }) => {
  const { title, description, link } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    // Get a random gradient for each card
    const bg = getRandomGradient();
    setGradient(bg);
  }, []);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-bg" style={{ background: gradient }}></div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="project-card-link">
          <span>View Challenge</span>
          <svg 
            className={`arrow-icon ${isHovered ? 'active' : ''}`} 
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;