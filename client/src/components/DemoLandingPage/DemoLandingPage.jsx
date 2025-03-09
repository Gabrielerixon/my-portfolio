import React from 'react';
import './DemoLandingPage.css';

const DemoLandingPage = ({ settings }) => {
  // Apply the accessibility settings to the landing page
  const pageClasses = [
    'demo-landing-page',
    settings.colorBlindMode ? 'colorblind-mode' : '',
    settings.highContrast ? 'high-contrast' : '',
    settings.largeText ? 'large-text' : '',
    settings.readableFont ? 'readable-font' : '',
    settings.dyslexiaFriendly ? 'dyslexia-friendly' : '',
  ].filter(Boolean).join(' ');

  // Additional styles for primary color
  const primaryColorStyle = {
    '--primary-color': settings.primaryColor
  };

  // Define some dummy data for our demo sections
  const features = [
    {
      title: 'Customizable Interface',
      description: 'Personalize the app to match your preferences and workflow.',
      icon: '⚙️'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with comprehensive data visualization tools.',
      icon: '📊'
    },
    {
      title: 'Cloud Integration',
      description: 'Seamlessly connect with your favorite cloud services.',
      icon: '☁️'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      quote: 'This platform has transformed how our team collaborates. The accessibility features are particularly impressive.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Chen',
      role: 'UX Designer',
      quote: 'As a designer, I appreciate the attention to detail in the interface. The customization options are exactly what I needed.',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <div className={pageClasses} style={primaryColorStyle}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p className="hero-subtitle">Experience the future of digital productivity with our intuitive tools.</p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Using a placeholder div instead of an external image */}
          <div className="image-placeholder">
            <div className="settings-illustration">
              <div className="gear-icon">⚙️</div>
              <div className="toggle-icon">🔘</div>
              <div className="accessibility-icons">
                <span role="img" aria-label="Accessibility">♿</span>
                <span role="img" aria-label="Vision">👁️</span>
                <span role="img" aria-label="Hearing">👂</span>
              </div>
              <h3>Settings Dashboard</h3>
              <p>Customize your experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied users and take your productivity to the next level.</p>
        <button className="primary-button large">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="demo-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="#twitter" aria-label="Twitter">🐦</a>
              <a href="#linkedin" aria-label="LinkedIn">💼</a>
              <a href="#instagram" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

      {/* Accessibility Visualization (if screen reader optimization is enabled) */}
      {settings.screenReaderOptimized && (
        <div className="a11y-visualization">
          <div className="a11y-info">
            <p>Screen Reader Optimization: ON</p>
            <p className="a11y-detail">Enhanced semantic structure and ARIA attributes applied</p>
          </div>
        </div>
      )}

      {/* Keyboard Focus Visualization (if keyboard focus highlight is enabled) */}
      {settings.keyboardFocusHighlight && (
        <div className="keyboard-focus-hint">
          <p>Press Tab to navigate with enhanced focus indicators</p>
        </div>
      )}

      {/* Audio Feedback Indicator (if audio feedback is enabled) */}
      {settings.audioFeedback && (
        <div className="audio-feedback-indicator">
          <p>Audio feedback is enabled. Interact with elements to hear cues.</p>
        </div>
      )}
    </div>
  );
};

export default DemoLandingPage;