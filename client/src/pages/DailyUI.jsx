// src/pages/DailyUIs.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './DailyUI.css';

const DailyUIs = () => {
  // Example data: day, title, link, etc.
  const challenges = [
    { title: 'Day 1: Sign In', description: 'A user-friendly sign in page with a fun animation! P.S It has a Mobile Version!', link: '/auth' },
    { title: 'Day 2: Checkout', description: 'Sleek Apple inspired checkout page!', link: '/dailyui/day2' },
    { title: 'Day 3: Pricing Table', description: 'Placeholder for day 3', link: '/dailyui/day3' },
    // ... up to day 100 eventually
  ];

  return (
    <div className="projects-container">
      <h1>My Daily UI Solutions</h1>
      <p>Check out each day’s challenge below:</p>
      
      <div className="projects-grid">
        {challenges.map((item, idx) => (
          <ProjectCard 
            key={idx}
            project={{
              title: item.title,
              description: item.description,
              link: item.link
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyUIs;
