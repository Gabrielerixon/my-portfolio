// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Component style object with aggressive positioning fixes
  const componentStyles = {
    container: {
      paddingTop: '0px', // Very large top padding to ensure clearance
      marginTop: '40px',   // Additional margin to push content down
      position: 'relative',
      zIndex: 1
    },
    heading: {
      position: 'relative',
      zIndex: 2
    }
  };
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('Sending...');

    try {
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you'd make an actual API call like this:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setStatus('Your message has been sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSending(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again later.');
      setSending(false);
    }
  };

  return (
    <div style={{
      marginTop: '100px', 
      paddingTop: '100px', 
      position: 'relative',
      backgroundColor: '#f8fafc'
    }}>
      <div className="contact-container" style={componentStyles.container}>
        <div className="contact-content">
          <div className={`contact-info ${isLoaded ? 'animate-in' : ''}`}>
            <h1 style={componentStyles.heading}>Get In Touch</h1>
            <p>I'm always open to new projects and opportunities. Whether you have a question or just want to say hello, I'd love to hear from you!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="method-details">
                  <h3>Email</h3>
                  <p>Gabrielerixon@Gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>Jönköping, Sweden</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="method-details">
                  <h3>Freelance</h3>
                  <p>Available for freelance projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`contact-form-container ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Send Message</h2>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? (
                  <span className="sending">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                ) : 'Send Message'}
              </button>
              
              {status && <div className="status-message">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;