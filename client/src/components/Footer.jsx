// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About column */}
          <div className="footer-column">
            <h3 className="footer-logo">Gabriel.</h3>
            <p className="footer-description">
              Full Stack Developer specializing in creating beautiful and functional web experiences with React and Node.js.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/" 
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/gabrielerixon/" 
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="http://www.fiverr.com/s/XL3Qbr2" 
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Fiverr"
              >
                <SiFiverr />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          
          {/* Links column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dailyui">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          {/* Projects column */}
          <div className="footer-column">
            <h3>Featured Projects</h3>
            <ul className="footer-links">
              <li><Link to="/dailyui/day4">Calculator</Link></li>
              <li><Link to="/dailyui/day5">User Profile</Link></li>
              <li><Link to="/dailyui/day6">Settings Dashboard</Link></li>
              <li><Link to="/dailyui/day3">Landing Page</Link></li>
              <li><Link to="/dailyui/day7">404 Page</Link></li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <strong>Email: </strong>
                <a href="mailto:Gabrielerixon@Gmail.com">Gabrielerixon@Gmail.com</a>
              </li>
              <li>
                <strong>Location:</strong>
                <span>Jönköping, Sweden</span>
              </li>
              <li>
                <Link to="/contact" className="contact-btn">Get in Touch</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} Gabriel's Portfolio. All rights reserved.</p>
          <p className="credits">Designed with <span className="heart">♥</span> by Gabriel Eriksson</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;