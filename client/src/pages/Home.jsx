// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I&apos;m a Full Stack Developer specializing in <strong>React</strong> and <strong>Node.js</strong>.
        </p>
      </section>

      <section className="bento-grid">
        {/* PROJECTS LINK */}
        <Link to="/projects" className="grid-item link-card">
          <h2>Project Placeholder</h2>
          <p>See what I have created!</p>
          <img 
            src="https://picsum.photos/seed/project1/200/200" 
            alt="Random Project"
          />
        </Link>

        {/* BLOG LINK */}
        <Link to="/blog" className="grid-item link-card">
          <h2>Blog Placeholder</h2>
          <p>Check back for articles!</p>
          <img
            src="https://picsum.photos/seed/blog1/200/200"
            alt="Random Blog"
          />
        </Link>

        {/* ABOUT / WHO AM I LINK */}
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
