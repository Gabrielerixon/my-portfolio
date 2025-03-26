// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
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
      paddingTop: '0px', 
      marginTop: '40px',   
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
    setStatus('');

    try {
      // Make the API call to our serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error sending message');
      }
      
      setStatus('Your message has been sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus(`Error sending message: ${error.message}. Please try again later.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Eriksson G AB | Gabriel Eriksson | Web Development Services Jönköping"
        description="Get in touch with Eriksson G AB for professional web development services in Jönköping, Sweden. Contact Gabriel Eriksson to discuss your next web project or business requirements."
        keywords="contact Eriksson G AB, Gabriel Eriksson contact, web development Jönköping, hire web developer Sweden, React developer contact, website development quote"
        ogType="website"
      />
      
      <div style={{
        marginTop: '100px', 
        paddingTop: '100px', 
        position: 'relative',
        backgroundColor: '#f8fafc'
      }}>
        <div className="contact-container" style={componentStyles.container}>
          <div className="contact-content">
            <div className={`contact-info ${isLoaded ? 'animate-in' : ''}`}>
              <h1 style={componentStyles.heading}>Get In Touch with Eriksson G AB</h1>
              <p>Ready to discuss your web development needs? Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you and discuss how Eriksson G AB can help your business succeed online.</p>
              
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
                    <h3>Business Services</h3>
                    <p>Eriksson G AB - Full-Service Web Development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`contact-form-container ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Send Message to Eriksson G AB</h2>
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
                    placeholder="Web Development Project Inquiry"
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
                    placeholder="Describe your project needs or questions for Eriksson G AB..."
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
    </>
  );
};

export default Contact;