import React from 'react';
import './MountainAgencyLanding.css';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const MountainAgencyLanding = () => {
  return (
    <div className="landing-container">
      {/* Floating Button */}
      <Link to="/dailyui" className="floating-button">
        Return to Challengeboard
      </Link>
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TATRA EXPEDITIONS</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#excursions">Excursions</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Rest of your component stays the same */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experience Mountains Like Never Before</h1>
          <p>Discover the majestic beauty of the Tatra Mountains</p>
          <button className="primary-btn">Plan Your Adventure</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Expeditions</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🏔️</div>
            <h3>Expert Guides</h3>
            <p>Our certified mountain guides have over 15 years of experience navigating the Tatra Mountains safely.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌲</div>
            <h3>Hidden Trails</h3>
            <p>Explore hidden trails and breathtaking viewpoints in the Polish Tatras, including the famous Morskie Oko lake.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏨</div>
            <h3>Authentic Lodging</h3>
            <p>Stay in traditional mountain shelters and experience the unique culture of the Tatra region.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" id="contact">
        <div className="booking-container">
          <div className="booking-content">
            <h2>Ready to Explore?</h2>
            <p>Contact us for a personalized quote tailored to your adventure preferences.</p>
            <form className="booking-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <select>
                  <option value="">Select Trip Duration</option>
                  <option value="day">Day Trip</option>
                  <option value="weekend">Weekend Explorer (2-3 days)</option>
                  <option value="week">Full Week Adventure (5-7 days)</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your dream mountain adventure..."></textarea>
              </div>
              <button type="submit" className="primary-btn">Request Quote</button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>Who We Are</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Founded in 2010 by a group of passionate mountaineers, Tatra Expeditions has been guiding adventurers through the breathtaking landscapes of the Tatra Mountains for over a decade.</p>
            <p>Our mission is to share the natural beauty and cultural heritage of southern Poland while promoting sustainable tourism practices that preserve these treasures for future generations.</p>
            <p>With over 500 successful expeditions and thousands of satisfied adventurers, we've established ourselves as the premier mountain experience provider in the region.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Expeditions Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Adventurers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">TATRA EXPEDITIONS</div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>
              <a href="#excursions">Day Trips</a>
              <a href="#excursions">Multi-Day Treks</a>
              <a href="#excursions">Winter Expeditions</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#about">Our Team</a>
              <a href="#about">Testimonials</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p>Zakopane, Poland</p>
              <p>info@tatraexpeditions.com</p>
              <p>+48 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Tatra Expeditions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MountainAgencyLanding;