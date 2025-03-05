// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Left Section: Brand */}
      <div className="navbar-left">
        <div className="navbar-logo">Gabriel&apos;s Portfolio</div>
      </div>

      {/* Center Section: Nav Links (desktop) */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DailyUI">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/auth">Login</Link></li>
        </ul>
      </div>

      {/* Right Section: Social Icons + Hamburger */}
      <div className="navbar-right">
        <div className="navbar-socials">
          <a 
            href="https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/gabrielerixon/" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="http://www.fiverr.com/s/XL3Qbr2" 
            target="_blank" 
            rel="noreferrer"
          >
            <SiFiverr size={24} />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="hamburger" onClick={openMenu}>
          &#9776; {/* “trigram for menu” character */}
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>

          <ul className="mobile-nav-links">
            <li onClick={closeMenu}><Link to="/">Home</Link></li>
            <li onClick={closeMenu}><Link to="/DailyUI">Projects</Link></li>
            <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
            <li onClick={closeMenu}><Link to="/auth">Login</Link></li>
          </ul>

          {/* Larger icons at the bottom */}
          <div className="mobile-menu-socials">
            <a 
              href="https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin size={32} /> 
            </a>
            <a 
              href="https://www.instagram.com/gabrielerixon/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a 
              href="http://www.fiverr.com/s/XL3Qbr2" 
              target="_blank" 
              rel="noreferrer"
            >
              <SiFiverr size={32} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
