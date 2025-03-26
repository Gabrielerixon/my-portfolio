// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SEO from '../components/SEO';

// Tech Logo Components
const ReactLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="60" height="60">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeJsLogo = () => (
  <svg width="60" height="60" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 8.5c-3.5 0-7 .9-10 2.6L21.4 64.5c-6.2 3.6-10 10.3-10 17.5v96c0 7.2 3.8 13.9 10 17.5l96.6 53.4c3 1.7 6.5 2.6 10 2.6s7-.9 10-2.6l96.6-53.4c6.2-3.6 10-10.3 10-17.5v-96c0-7.2-3.8-13.9-10-17.5L138 11.1c-3-1.7-6.5-2.6-10-2.6z" fill="#689f63"/>
    <path d="M128 25.3c-1.8 0-3.5.5-5 1.3l-81.4 45c-3.1 1.8-5 5.1-5 8.7v90c0 3.6 1.9 7 5 8.7l81.4 45c1.5.8 3.2 1.3 5 1.3s3.5-.5 5-1.3l81.4-45c3.1-1.8 5-5.1 5-8.7v-90c0-3.6-1.9-7-5-8.7l-81.4-45c-1.5-.8-3.2-1.3-5-1.3z" fill="#fff"/>
    <path d="M180.3 116.3c0-2.4-1.3-4.5-3.3-5.8l-54.6-31.4c-.9-.5-2-.8-3-.8h-.6c-1 0-2.1.3-3 .8l-54.6 31.4c-2 1.2-3.3 3.4-3.3 5.8l.1 84.6c0 1.2.6 2.3 1.7 2.8.5.3 1.1.4 1.6.4.7 0 1.3-.2 1.9-.6l32.4-18.6c2-1.2 3.3-3.4 3.3-5.8v-40c0-2.4 1.3-4.6 3.3-5.8l13.8-8c1-.6 2.1-.9 3.2-.9s2.2.3 3.2.9l13.8 8c2 1.2 3.3 3.4 3.3 5.8v40c0 2.4 1.3 4.6 3.3 5.8l32.4 18.6c.6.3 1.2.5 1.9.5.5 0 1.1-.1 1.6-.4 1.1-.6 1.7-1.7 1.7-2.8v-84.4z" fill="#689f63"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
    <path fill="#F7DF1E" d="M0 0h256v256H0z"/>
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
  </svg>
);

const CssLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 362.73 512">
    <path fill="#264de4" d="M362.73 100.62l-33.046 370.199L181.04 512 33.202 470.877 0 100.62z"/>
    <path fill="#2965f1" d="M301.397 447.246l28.24-316.352H181.042v349.629z"/>
    <path fill="#ebebeb" d="M75.677 268.217l4.067 45.41h101.298v-45.41zM181.042 176.305H67.763l4.12 45.411h109.159zM181.042 433.399v-47.246l-.199.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823z"/>
    <path fill="#fff" d="M281.23 268.217l8.026-89.912H181.042v45.411h63.428l-4.038 44.501h-59.39v45.41h55.626l-5.235 58.668-50.391 13.598v47.244l93.021-25.801.683-7.672 10.671-119.449z"/>
  </svg>
);

// Improved UI/UX Design Logo
const UiUxLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
    <rect width="22" height="18" x="1" y="3" rx="2" fill="#8A7FFF" fillOpacity="0.1" stroke="#8A7FFF" strokeWidth="1.5"/>
    <line x1="1" y1="7" x2="23" y2="7" stroke="#8A7FFF" strokeWidth="1.5"/>
    <circle cx="4" cy="5" r="1" fill="#8A7FFF"/>
    <circle cx="7" cy="5" r="1" fill="#8A7FFF"/>
    <circle cx="10" cy="5" r="1" fill="#8A7FFF"/>
    <rect x="4" y="10" width="7" height="7" rx="1" fill="#8A7FFF"/>
    <rect x="13" y="10" width="7" height="3" rx="1" fill="#8A7FFF" fillOpacity="0.7"/>
    <rect x="13" y="14" width="7" height="3" rx="1" fill="#8A7FFF" fillOpacity="0.7"/>
  </svg>
);

// Improved Responsive Design Logo
const ResponsiveDesignLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
    <rect x="2" y="4" width="16" height="12" rx="1" fill="#4A5568" stroke="#4A5568" strokeWidth="1"/>
    <rect x="3" y="5" width="14" height="10" rx="0.5" fill="#E2E8F0"/>
    <rect x="6" y="16" width="8" height="1" rx="0.5" fill="#4A5568"/>
    <rect x="18" y="8" width="4" height="8" rx="1" fill="#4A5568" stroke="#4A5568" strokeWidth="1"/>
    <rect x="18.5" y="9" width="3" height="6" rx="0.3" fill="#E2E8F0"/>
    <path d="M11 19H9c-.6 0-1 .4-1 1v0h6v0c0-.6-.4-1-1-1h-2z" fill="#4A5568"/>
  </svg>
);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle animations on load
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <SEO 
        title="Gabriel Eriksson | Full Stack Developer | Eriksson G AB | Web Development Jönköping"
        description="Eriksson G AB provides professional web development services by Gabriel Eriksson. Specialized in React, Node.js and modern web technologies in Jönköping, Sweden."
        keywords="Gabriel Eriksson, Eriksson G AB, web development Jönköping, full stack developer, React developer, Node.js developer, Swedish web agency"
        ogImage="/images/gabriel-eriksson-developer.jpg"
      />
      
      <div className="modern-home">
        {/* Hero section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`}>
              Gabriel Eriksson
            </h1>
            
            <h2 className={`hero-subtitle ${isLoaded ? 'animate-in' : ''}`}>
              Full Stack Developer & Founder of Eriksson G AB
            </h2>
            
            <div className={`hero-description ${isLoaded ? 'animate-in' : ''}`}>
              <p>Crafting intuitive digital experiences with modern web technologies for businesses in Jönköping and across Sweden.</p>
              <p>Specialized in <span className="highlight">React</span> and <span className="highlight">Node.js</span> development with Eriksson G AB.</p>
            </div>
            
            <div className={`hero-cta ${isLoaded ? 'animate-in' : ''}`}>
              <Link to="/dailyui" className="primary-btn">
                View Projects
              </Link>
              <Link to="/contact" className="secondary-btn">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className={`hero-graphic ${isLoaded ? 'animate-in' : ''}`}>
            <div className="graphic-element circle"></div>
            <div className="graphic-element square"></div>
            <div className="graphic-element triangle"></div>
            <div className="code-block">
              <pre>{`function Portfolio() {
  return (
    <Experience 
      company="Eriksson G AB"
      skills={['React', 'Node.js']}
      passion="Beautiful UIs"
    />
  )
}`}</pre>
            </div>
          </div>
        </section>
        
        {/* Skills section - unchanged */}
        <section className="skills-section">
          <div className="skills-container">
            <h2 className={`section-title ${scrollPosition > 100 ? 'animate-in' : ''}`}>
              My Skills
            </h2>
            
            <div className="skills-grid">
              {[
                { name: 'React', icon: <ReactLogo />, level: 90 },
                { name: 'Node.js', icon: <NodeJsLogo />, level: 85 },
                { name: 'JavaScript', icon: <JavaScriptLogo />, level: 92 },
                { name: 'CSS/SCSS', icon: <CssLogo />, level: 88 },
                { name: 'UI/UX Design', icon: <UiUxLogo />, level: 80 },
                { name: 'Responsive Design', icon: <ResponsiveDesignLogo />, level: 95 }
              ].map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`skill-card ${scrollPosition > 200 ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ 
                        width: scrollPosition > 300 ? `${skill.level}%` : '0%',
                        transition: `width 1s ease-out ${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects preview section with updated section title */}
        <section className="projects-preview">
          <div className="projects-container">
            <h2 className={`section-title ${scrollPosition > 500 ? 'animate-in' : ''}`}>
              Featured Projects by Eriksson G AB
            </h2>
            
            <div className="featured-projects">
              {[
                {
                  title: 'Mountaineering Landing Page',
                  description: 'A landing page I made for a fictional company in the Polish Tatra mountains.',
                  image: 'mountain-landing-preview',
                  link: '/dailyui/day3'
                },
                {
                  title: '404 Error Page',
                  description: 'I created a fun error page, because why not? No one said it had to be boring!',
                  image: 'error-page-preview',
                  link: '/dailyui/day7'
                },
                {
                  title: 'User Profile Dashboard',
                  description: 'A gaming-inspired user profile with detailed stats and a modern interface.',
                  image: 'profile-dashboard-preview',
                  link: '/dailyui/day5'
                }
              ].map((project, index) => (
                <div 
                  key={project.title}
                  className={`project-preview-card ${scrollPosition > 600 ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`project-image ${project.image}`}></div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link to={project.link} className="view-project-btn">
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`view-all-container ${scrollPosition > 800 ? 'animate-in' : ''}`}>
              <Link to="/dailyui" className="view-all-btn">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        
        {/* About section preview - updated with Eriksson G AB mentions */}
        <section className="about-preview">
          <div className={`about-text ${scrollPosition > 900 ? 'animate-in' : ''}`}>
            <h2>About Eriksson G AB</h2>
            <p>I'm Gabriel Eriksson, founder of Eriksson G AB, a web development company based in Jönköping, Sweden, focused on creating engaging web experiences that combine aesthetic appeal with functional design.</p>
            <p>With expertise in modern frontend frameworks and backend technologies, I build full-stack applications for businesses across Sweden that are both beautiful and performant.</p>
            <Link to="/about" className="learn-more-btn">
              Learn More About Eriksson G AB
            </Link>
          </div>
          
          <div className={`about-image ${scrollPosition > 900 ? 'animate-in' : ''}`}>
            <div className="profile-placeholder">
              <div className="profile-circle"></div>
              <div className="profile-square"></div>
            </div>
          </div>
        </section>
        
        {/* Contact call-to-action - updated with Eriksson G AB mentions */}
        <section className="contact-cta">
          <h2 className={`${scrollPosition > 1100 ? 'animate-in' : ''}`}>
            Let's Work Together
          </h2>
          
          <p className={`${scrollPosition > 1150 ? 'animate-in' : ''}`}>
            Have a project for Eriksson G AB? I'd love to hear about it and discuss how we can help your business grow online.
          </p>
          
          <div className={`${scrollPosition > 1200 ? 'animate-in' : ''}`}>
            <Link to="/contact" className="contact-now-btn">
              Contact Eriksson G AB
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;