// src/pages/DailyUI.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './DailyUI.css';

const DailyUIs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Component style object with spacing fixes
  const componentStyles = {
    container: {
      marginTop: '40px',    // Less aggressive margin for this page
      paddingTop: '60px',   // Less aggressive padding for this page
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
  
  // Example data: day, title, link, etc.
  const challenges = [
    {
      title: 'Day 1: Sign In',
      description: 'A user-friendly sign in page with a fun animation! P.S It has a Mobile Version!',
      link: '/auth'
    },
    {
      title: 'Day 2: Checkout',
      description: 'Sleek Apple inspired checkout page!',
      link: '/dailyui/day2'
    },
    {
      title: 'Day 3: Landing Page',
      description: 'Landing page for a tourist firm specializing in mountain trips to the Tatra mountains!',
      link: '/dailyui/day3'
    },
    {
      title: 'Day 4: Calculator',
      description: 'A Cute Calculator with a nice gradient!',
      link: '/dailyui/day4'
    },
    {
      title: 'Day 5: User Profile',
      description: 'A Fun gaming user profile',
      link: '/dailyui/day5'
    },
    {
      title: 'Day 6: Settings',
      description: 'A minimalist settings page, focusing on accessability settings!',
      link: '/dailyui/day6'
    },
    {
      title: 'Day 7: 404 Error page',
      description: 'A fun 404 error page',
      link: '/dailyui/day7'
    },
    // ... up to day 100 eventually
  ];

  return (
    <div style={componentStyles.container}>
      <div className="dailyui-container">
        <div className="dailyui-hero">
          <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`} style={componentStyles.heading}>
            Daily UI Challenge
          </h1>
          
          <p className={`hero-description ${isLoaded ? 'animate-in' : ''}`}>
            A 100-day journey to improve my UI design skills by creating a new interface every day.
            Here's a collection of my solutions to the Daily UI design challenge.
          </p>
          
          <div className={`hero-stats ${isLoaded ? 'animate-in' : ''}`}>
            <div className="stat">
              <span className="stat-number">{challenges.length}</span>
              <span className="stat-label">Challenges Completed</span>
            </div>
            
            <div className="stat">
              <span className="stat-number">100</span>
              <span className="stat-label">Total Challenges</span>
            </div>
            
            <div className="stat">
              <span className="stat-number">{Math.round((challenges.length / 100) * 100)}%</span>
              <span className="stat-label">Progress</span>
            </div>
          </div>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(challenges.length / 100) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="dailyui-grid">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className={`project-card-wrapper ${isLoaded ? 'animate-in' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
        
        <div className={`coming-soon ${isLoaded ? 'animate-in' : ''}`}>
          <h2>More Challenges Coming Soon</h2>
          <p>Stay tuned as I continue my Daily UI journey!</p>
        </div>
      </div>
    </div>
  );
};

export default DailyUIs;