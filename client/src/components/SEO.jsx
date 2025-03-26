// src/components/SEO.jsx
import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({ 
  title = 'Gabriel Eriksson | Full Stack Developer | Eriksson G AB',
  description = 'Professional web development services by Gabriel Eriksson. Eriksson G AB offers full-stack development specializing in React, Node.js, and modern web technologies.',
  keywords = 'Gabriel Eriksson, Eriksson G AB, web development, full stack developer, React, Node.js, JavaScript, Jönköping, Sweden',
  canonicalUrl,
  ogImage = '/images/gabriel-eriksson-developer.jpg', // Create a default Open Graph image
  ogType = 'website',
  children 
}) => {
  // Build the canonical URL from the current location if not provided
  const canonical = canonicalUrl || window.location.href;
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional children elements if needed */}
      {children}
    </Helmet>
  );
};

export default SEO;