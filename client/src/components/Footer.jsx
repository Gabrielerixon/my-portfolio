// src/components/Footer.jsx
import React from 'react';
import './Footer.css';



const Footer = () => {
    
  var year = new Date().getFullYear();
    

  return (
    <footer className="footer">
      <p>© {year} Gabriel's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
