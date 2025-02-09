// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// Optionally import icon images or use a library like React Icons

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Brand/Logo */}
      <div className="navbar-logo">MyPortfolio</div>
      
      {/* Center: Nav Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right: Socials */}
      <div className="navbar-socials">
        <a 
          href="https://www.linkedin.com/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          {/* Placeholder icon; replace with an <img> or <Icon> from a library */}
          <span className="social-icon">In</span>
        </a>
        
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Instagram"
        >
          <span className="social-icon">Ig</span>
        </a>
        
        <a 
          href="https://www.fiverr.com/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Fiverr"
        >
          <span className="social-icon">Fi</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
