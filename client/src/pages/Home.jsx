// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I&apos;m a Full Stack Developer specializing in <strong>React</strong> and <strong>Node.js</strong>.</p>
      </section>

      <section className="bento-grid">
        <div className="grid-item">
          <h2>Project Placeholder</h2>
          <p>Demo coming soon!</p>
          <img 
            src="https://picsum.photos/seed/project1/200/200" 
            alt="Random Project"
          />
        </div>
        <div className="grid-item">
          <h2>Blog Placeholder</h2>
          <p>Check back for articles.</p>
          <img
            src="https://picsum.photos/seed/blog1/200/200"
            alt="Random Blog"
          />
        </div>
        {/* Another Section card is a Link to /about */}
        <Link to="/about" className="grid-item link-card">
          <h2>Who am I?</h2>
          <p>Read about who I am and what I do!</p>
          <img src="https://picsum.photos/200/200?random=3" alt="Another" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
