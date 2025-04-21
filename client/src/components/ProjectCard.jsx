// src/components/ProjectCard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
// If you're using random gradient:
import { getRandomGradient } from '../utils/gradientUtils';

const ProjectCard = ({ project }) => {
  const { title, description, link, isExternal } = project;
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    // If you want a random gradient only once on mount
    const bg = getRandomGradient();
    setGradient(bg);
  }, []);

  // Render either an external link or internal route link
  const renderLink = () => {
    if (isExternal) {
      return (
        <a href={link} className="view-link" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      );
    } else {
      return (
        <Link to={link} className="view-link">
          View Project
        </Link>
      );
    }
  };

  return (
    <div 
      className="project-card"
      style={{ background: gradient }}
    >
      <div className="card-top">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-bottom">
        {renderLink()}
      </div>
    </div>
  );
};

export default ProjectCard;