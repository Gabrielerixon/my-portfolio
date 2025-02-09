// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a Full Stack Developer specializing in <strong>React</strong> and <strong>Node.js</strong>.
        </p>
      </section>

      {/* Bento Grid Section */}
      <section className="bento-grid">
        <div className="grid-item">
          <h2>Project Placeholder</h2>
          <p>Demo coming soon!</p>
        </div>
        <div className="grid-item">
          <h2>Blog Placeholder</h2>
          <p>Check back for articles.</p>
        </div>
        <div className="grid-item">
          <h2>Another Section</h2>
          <p>Could be anything!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
