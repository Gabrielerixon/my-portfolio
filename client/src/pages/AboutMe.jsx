// src/pages/AboutMe.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './AboutMe.css';
import profilePic from '../assets/profile-pic.jpg';

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <SEO 
        title="About Gabriel Eriksson | Eriksson G AB | Full Stack Web Developer Jönköping"
        description="Learn about Gabriel Eriksson, founder of Eriksson G AB. Professional web development services in Jönköping, Sweden specializing in React, Node.js, and custom web solutions."
        keywords="Gabriel Eriksson bio, Eriksson G AB, web developer Jönköping, Swedish web development company, full-stack development Sweden, React developer"
        ogImage="/images/gabriel-eriksson-profile.jpg"
      />
      
      <div className="about-container">
        <section className="about-hero">
          <div className={`about-image ${isLoaded ? 'animate-in' : ''}`}>
            <div className="image-container">
              <div className="image-blob"></div>
              <div className="image-frame">
                <img 
                  src={profilePic}
                  alt="Gabriel Eriksson - Founder of Eriksson G AB" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
          
          <div className={`about-intro ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h1>I'm Gabriel Eriksson</h1>
            <h2>Full Stack Developer & Founder of Eriksson G AB</h2>
            <p>
              I'm a passionate web developer based in Jönköping, Sweden, with a love for creating beautiful, 
              functional user interfaces and robust backend solutions. Through my company Eriksson G AB, I provide
              comprehensive web development services for businesses across Sweden, specializing in React and Node.js applications.
            </p>
            <div className="about-cta">
              <Link to="/contact" className="contact-btn">Get In Touch</Link>
              <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>
        
        <section className={`about-tabs-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills & Expertise
              </button>
              <button 
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
            
            <div className="tabs-content">
              {activeTab === 'skills' && (
                <div className="skills-content">
                  <div className="skills-categories">
                    <div className="skills-category">
                      <h3>Frontend Development</h3>
                      <div className="skills-list">
                        <div className="skill-item">
                          <span className="skill-name">React</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">HTML5 & CSS3</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">JavaScript</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">UI Libraries</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="skills-category">
                      <h3>Backend Development</h3>
                      <div className="skills-list">
                        <div className="skill-item">
                          <span className="skill-name">Node.js</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">Express</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">SQL & Databases</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">RESTful APIs</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="skills-category">
                      <h3>UI/UX & Business Tools</h3>
                      <div className="skills-list">
                        <div className="skill-item">
                          <span className="skill-name">Web Design</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">Git & GitHub</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">Responsive Design</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div className="skill-item">
                          <span className="skill-name">Business Development</span>
                          <div className="skill-level-container">
                            <div className="skill-level" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="experience-content">
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2024 - Present</div>
                      <div className="timeline-content">
                        <h3>Founder & Full-stack Developer</h3>
                        <h4>Eriksson G AB</h4>
                        <p>
                          Founded my own web development company serving clients in Jönköping and across Sweden.
                          Developing responsive web applications using React, ensuring cross-browser compatibility and optimal performance.
                          Managing all aspects of web projects from concept to completion with a focus on client satisfaction.
                        </p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2023 - 2023</div>
                      <div className="timeline-content">
                        <h3>Highschool Physics Teacher</h3>
                        <h4>Sandagymnasiet</h4>
                        <p>
                          Lectured in Physics 1 for 1st and 2nd year students on the Science program. 
                          Helped Students understand the material, Planned and held lectures, Planned and Held Labs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2018 - 2019</div>
                      <div className="timeline-content">
                        <h3>Swim Coach Apprentice</h3>
                        <h4>Jönköpings Simsällskap</h4>
                        <p>
                          Assisted another coach with teaching young kids how to take their first steps in swimming.
                          Got to learn different ways to handle working with kids, and how to make clear communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="education-content">
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2019 - 2022</div>
                      <div className="timeline-content">
                        <h3>Highschool Diploma</h3>
                        <h4>Sandagymnasiet</h4>
                        <p>
                          Graduated the Natural Science program with highest honors. Was part of the NIU
                          swim team and swam multiple national championships.
                        </p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2023-present</div>
                      <div className="timeline-content">
                        <h3>Self-Taught Programming & Business</h3>
                        <h4>Multiple Sources</h4>
                        <p>
                          During my year of study abroad in the USA, I found a passion for programming with a course 
                          in C#. After that I started taking courses online, as well as at Swedish universities, to broaden my knowledge
                          in both development and business management for Eriksson G AB.
                        </p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">2024-2025</div>
                      <div className="timeline-content">
                        <h3>Full Stack Development Bootcamp</h3>
                        <h4>The Appbrewery</h4>
                        <p>
                          Intensive program covering both frontend and backend technologies.
                          Created full-stack applications using React, NodeJS and other modern technologies
                          that I now implement in client projects through Eriksson G AB.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className={`interests-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
          <h2>Beyond Coding at Eriksson G AB</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">🏊</div>
              <h3>Swimming</h3>
              <p>Competing on an elite national level has shaped my work ethic and approach to business challenges.</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">📚</div>
              <h3>Reading</h3>
              <p>Constantly expanding my knowledge through business and technical literature, while enjoying fantasy in my spare time.</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">📷</div>
              <h3>Photography</h3>
              <p>Capturing moments and beautiful landscapes across Sweden and other places I travel to, that inspire web design aesthetics.</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">💼</div>
              <h3>Business Development</h3>
              <p>Passionate about helping Swedish businesses grow their online presence through effective web solutions.</p>
            </div>
          </div>
        </section>
        
        <section className={`cta-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
          <h2>Let's Work Together</h2>
          <p>Looking for professional web development services in Jönköping or anywhere in Sweden? Eriksson G AB is currently taking on new clients and projects.</p>
          <Link to="/contact" className="cta-button">Contact Eriksson G AB</Link>
        </section>
      </div>
    </>
  );
};

export default AboutMe;