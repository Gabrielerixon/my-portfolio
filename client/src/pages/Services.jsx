// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // This useEffect will trigger the animation after component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <SEO 
        title="Eriksson G AB | Professionell Webbutveckling Jönköping & Huskvarna"
        description="Eriksson G AB erbjuder professionell webbutveckling och webbdesign i Jönköping och Huskvarna. Gabriel Eriksson specialiserar sig inom React, Node.js och moderna webbteknologier för att skapa effektiva och attraktiva webbplatser för företag."
        keywords="Eriksson G AB, webbyrå Jönköping, webbutvecklare Huskvarna, Gabriel Eriksson, webbdesign, webbsida företag, webbutveckling, bygga webbsida, köp webbsida, designa webbsida"
        ogImage="/images/eriksson-g-ab-jönköping-webbutveckling.jpg"
      />
      
      <div className="services-container">
        <section className={`services-hero ${isLoaded ? 'animate-in' : ''}`}>
          <div className="services-hero-content">
            <h1>Web Development & Design Services</h1>
            <p className="services-subtitle">Custom Digital Solutions for Growing Businesses</p>
            <p className="services-description">
              Eriksson G AB provides professional web development and design services in Jönköping, 
              helping businesses create effective digital presence with modern technologies and user-focused design.
            </p>
            <div className="services-cta">
              <Link to="/contact" className="primary-btn">Get a Free Consultation</Link>
              <Link to="/dailyui" className="secondary-btn">View Our Work</Link>
            </div>
          </div>
        </section>
        
        <section id="webbutveckling" className={`services-list ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '100ms' }}>
          <h2 className="section-title">Our Services</h2>
          
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <div className="service-content">
              <h3>Web Development</h3>
              <p>Custom web development using modern technologies like React and Node.js. We build responsive, performance-optimized websites that work perfectly on all devices.</p>
              <ul className="service-features">
                <li>Fully responsive design</li>
                <li>SEO optimized structure</li>
                <li>Fast loading speeds</li>
                <li>User-friendly CMS</li>
              </ul>
              <Link to="/contact?service=webbutveckling" className="learn-more-btn">Learn More</Link>
            </div>
          </div>
          
          <div id="webbdesign" className="service-card">
            <div className="service-icon">🎨</div>
            <div className="service-content">
              <h3>Web Design</h3>
              <p>Modern web design that reflects your brand and builds trust with your visitors. We focus on user experience and conversion optimization.</p>
              <ul className="service-features">
                <li>User-centric design (UX/UI)</li>
                <li>Brand-aligned visuals</li>
                <li>Conversion-optimized structure</li>
                <li>Accessibility compliant</li>
              </ul>
              <Link to="/contact?service=webbdesign" className="learn-more-btn">Learn More</Link>
            </div>
          </div>
          
          <div id="seo" className="service-card">
            <div className="service-icon">🚀</div>
            <div className="service-content">
              <h3>SEO Optimization</h3>
              <p>Get your website to rank higher in search engines and attract more visitors. We offer both technical SEO and content optimization.</p>
              <ul className="service-features">
                <li>Local SEO for Jönköping businesses</li>
                <li>Technical SEO optimization</li>
                <li>Content strategy</li>
                <li>Keyword research</li>
              </ul>
              <Link to="/contact?service=seo" className="learn-more-btn">Learn More</Link>
            </div>
          </div>
          
          <div id="support" className="service-card">
            <div className="service-icon">🔄</div>
            <div className="service-content">
              <h3>Maintenance & Support</h3>
              <p>We offer ongoing maintenance and support for your website so you can focus on your business. Let us handle updates and security.</p>
              <ul className="service-features">
                <li>Regular updates</li>
                <li>Security monitoring</li>
                <li>Performance optimization</li>
                <li>Technical support</li>
              </ul>
              <Link to="/contact?service=support" className="learn-more-btn">Learn More</Link>
            </div>
          </div>
        </section>
        
        <section className={`process-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '200ms' }}>
          <h2 className="section-title">Our Process</h2>
          
          <div className="process-timeline">
            {/* Main horizontal timeline bar */}
            <div className="timeline-bar"></div>
            
            {/* Purple connection line between first two circles */}
            <div className="timeline-purple"></div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We start by understanding your needs, goals and vision for your website.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Planning & Design</h3>
                <p>We create a detailed plan and design that matches your brand.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Development</h3>
                <p>We build your website with focus on functionality and performance.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Testing & Launch</h3>
                <p>We ensure everything works perfectly before launching.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Support & Follow-up</h3>
                <p>We're here to help after launch and ensure continued success.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={`cta-section ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '300ms' }}>
          <h2>Ready to Take Your Website to the Next Level?</h2>
          <p>Contact us today for a free consultation and let us help you create a website that drives sales.</p>
          <Link to="/contact" className="primary-btn">Contact Us</Link>
        </section>
      </div>
    </>
  );
};

export default Services;