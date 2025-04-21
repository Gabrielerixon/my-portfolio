// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <span className="logo-text">Gabriel.</span>
          </Link>
        </div>

        {/* Center Section: Navigation Links (desktop) */}
        <div className="navbar-links">
          <ul>
            <li className={isActive('/')}>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className={isActive('/services')}>
              <Link to="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li className={isActive('/projects')}>
              <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li className={isActive('/about')}>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li className={isActive('/contact')}>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <div className="navbar-social">
          <a 
            href="https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/" 
            target="_blank" 
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/gabrielerixon/" 
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a 
            href="http://www.fiverr.com/s/XL3Qbr2" 
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <SiFiverr />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li className={isActive('/')}>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className={isActive('/services')}>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li className={isActive('/projects')}>
            <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          </li>
          <li className={isActive('/about')}>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li className={isActive('/contact')}>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
        <div className="mobile-social">
          <a 
            href="https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/" 
            target="_blank" 
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/gabrielerixon/" 
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a 
            href="http://www.fiverr.com/s/XL3Qbr2" 
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <SiFiverr />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;