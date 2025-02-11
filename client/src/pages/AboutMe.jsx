// src/pages/AboutMe.jsx
import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header">
      <img 
         src="https://picsum.photos/300/300" 
            alt="Me" 
            className="aboutme-image"
        />
        <h1>I&apos;m Gabriel Eriksson</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce quis nulla et ipsum tempor tincidunt. Pellentesque 
        habitant morbi tristique senectus et netus et malesuada 
        fames ac turpis egestas. 
      </p>
      <p>
        Vivamus eget risus ac leo dictum accumsan. Integer bibendum
        suscipit tortor, at facilisis eros luctus sed. 
      </p>
      {/* Add more paragraphs or smaller images, etc. */}
    </div>
  );
};

export default AboutMe;
