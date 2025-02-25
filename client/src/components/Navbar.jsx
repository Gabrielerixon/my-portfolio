// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'; // from react-icons
import './Navbar.css';
import { SiFiverr } from 'react-icons/si';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      {/* This brand text is always rendered. We’ll add a conditional style if menu is open. */}
      <div className={`navbar-logo ${isMobileMenuOpen ? 'menu-open-logo' : ''}`}>
        MyPortfolio
      </div>

      {/* Desktop Nav Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/auth">Login</Link></li>
      </ul>

      {/* Desktop Socials */}
      <div className="navbar-socials">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.fiverr.com" target="_blank" rel="noreferrer">
          <SiFiverr size={24} />
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="hamburger" onClick={openMenu}>
        &#9776;
      </button>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>

          <ul className="mobile-nav-links">
            <li onClick={closeMenu}><Link to="/">Home</Link></li>
            <li onClick={closeMenu}><Link to="/projects">Projects</Link></li>
            <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
            <li onClick={closeMenu}><Link to="/auth">Login</Link></li>
          </ul>

          {/* Larger icons at the bottom */}
          <div className="mobile-menu-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={32} /> 
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={32} />
            </a>
            <a href="https://www.fiverr.com" target="_blank" rel="noreferrer">
              <SiFiverr size={32} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
