// src/components/SEO.jsx
import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({ 
  title = 'Eriksson G AB | Professionell Webbutveckling i Jönköping | Gabriel Eriksson',
  description = 'Eriksson G AB erbjuder professionell webbutveckling och webbdesign i Jönköping och Huskvarna. Specialiserad inom React, Node.js och moderna webbteknologier.',
  keywords = 'Eriksson G AB, webbyrå Jönköping, webbutvecklare Huskvarna, Gabriel Eriksson, webbdesign, webbsida företag, bygga webbsida, köp webbsida, designa webbsida, website builder, website jönköping',
  canonicalUrl,
  ogImage = '/images/eriksson-g-ab-webbutveckling.jpg',
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