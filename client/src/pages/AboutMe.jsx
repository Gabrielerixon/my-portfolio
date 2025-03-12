// src/pages/AboutMe.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className={`about-image ${isLoaded ? 'animate-in' : ''}`}>
          <div className="image-container">
            <div className="image-blob"></div>
            <div className="image-frame">
              <img 
                src="https://picsum.photos/400/400" 
                alt="Gabriel Eriksson" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
        
        <div className={`about-intro ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <h1>I'm Gabriel Eriksson</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I'm a passionate web developer based in Stockholm, Sweden, with a love for creating beautiful, 
            functional user interfaces and robust backend solutions. With expertise in React and Node.js, 
            I bring ideas to life through clean code and thoughtful design.
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
                        <span className="skill-name">SCSS/SASS</span>
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
                        <span className="skill-name">SQL</span>
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
                    <h3>UI/UX & Tools</h3>
                    <div className="skills-list">
                      <div className="skill-item">
                        <span className="skill-name">Figma</span>
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
                        <span className="skill-name">R&D</span>
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
                      <h3>Full-stack Developer</h3>
                      <h4>Eriksson G AB</h4>
                      <p>
                        Developing responsive web applications using React, ensuring cross-browser compatibility and optimal performance.
                        Working the whole stack by myself to fully satisfy the needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2023 - 2023</div>
                    <div className="timeline-content">
                      <h3>Highschool Physics Teacher</h3>
                      <h4>Sanda Gymnasiet</h4>
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
                    <div className="timeline-date">2015 - 2018</div>
                    <div className="timeline-content">
                      <h3>Bachelor's in Computer Science</h3>
                      <h4>Stockholm University</h4>
                      <p>
                        Focused on software development, algorithms, and web technologies.
                        Graduated with honors and completed several practical projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2020</div>
                    <div className="timeline-content">
                      <h3>Advanced React Certification</h3>
                      <h4>Online Learning Platform</h4>
                      <p>
                        In-depth study of React, Redux, and modern frontend architecture.
                        Built several projects showcasing advanced concepts and best practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021</div>
                    <div className="timeline-content">
                      <h3>Full Stack Development</h3>
                      <h4>Tech Bootcamp</h4>
                      <p>
                        Intensive program covering both frontend and backend technologies.
                        Created full-stack applications using the MERN stack.
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
        <h2>Beyond Coding</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">🏊</div>
            <h3>Swimming</h3>
            <p>Competing on an elite national level certainly shape my life.</p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon">📚</div>
            <h3>Reading</h3>
            <p>Avid reader of science fiction and technical books.</p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon">📷</div>
            <h3>Photography</h3>
            <p>Capturing moments and beautiful landscapes during my travels.</p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon">🎮</div>
            <h3>Gaming</h3>
            <p>Enjoying sandbox and battle royale games in my free time.</p>
          </div>
        </div>
      </section>
      
      <section className={`cta-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
        <h2>Let's Work Together</h2>
        <p>Interested in collaborating or have a project in mind? I'm currently available for freelance work.</p>
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </section>
    </div>
  );
};

export default AboutMe;