// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Define bright text styles to override CSS
  const brightTextStyles = {
    text: {
      color: '#ffffff' // Bright white
    },
    title: {
      color: '#ffffff', // Bright white
      fontWeight: 700   // Bold
    },
    link: {
      color: '#e2e8f0', // Light gray
      textDecoration: 'none'
    },
    email: {
      color: '#a5b4fc' // Light indigo color
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About column */}
          <div className="footer-column">
            <h3 className="footer-logo" style={brightTextStyles.title}>Gabriel.</h3>
            <p className="footer-description" style={brightTextStyles.text}>
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
                href="https://github.com/Gabrielerixon" 
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
            <h3 style={brightTextStyles.title}>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" style={brightTextStyles.link}>Home</Link></li>
              <li><Link to="/dailyui" style={brightTextStyles.link}>Projects</Link></li>
              <li><Link to="/about" style={brightTextStyles.link}>About</Link></li>
              <li><Link to="/contact" style={brightTextStyles.link}>Contact</Link></li>
              <li><Link to="/blog" style={brightTextStyles.link}>Blog</Link></li>
            </ul>
          </div>
          
          {/* Projects column */}
          <div className="footer-column">
            <h3 style={brightTextStyles.title}>Featured Projects</h3>
            <ul className="footer-links">
              <li><Link to="/dailyui/day4" style={brightTextStyles.link}>Calculator</Link></li>
              <li><Link to="/dailyui/day5" style={brightTextStyles.link}>User Profile</Link></li>
              <li><Link to="/dailyui/day6" style={brightTextStyles.link}>Settings Dashboard</Link></li>
              <li><Link to="/dailyui/day3" style={brightTextStyles.link}>Landing Page</Link></li>
              <li><Link to="/dailyui/day7" style={brightTextStyles.link}>404 Page</Link></li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="footer-column">
            <h3 style={brightTextStyles.title}>Contact</h3>
            <ul className="footer-contact">
              <li>
                <strong style={brightTextStyles.text}>Email: </strong>
                <a href="mailto:Gabrielerixon@Gmail.com" style={brightTextStyles.email}>Gabrielerixon@Gmail.com</a>
              </li>
              <li>
                <strong style={brightTextStyles.text}>Location:</strong>
                <span style={brightTextStyles.text}>Jönköping, Sweden</span>
              </li>
              <li>
                <Link to="/contact" className="contact-btn">Get in Touch</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={brightTextStyles.text}>&copy; {year} Gabriel's Portfolio. All rights reserved.</p>
          <p className="credits" style={brightTextStyles.text}>Designed with <span className="heart">♥</span> by Gabriel Eriksson</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;