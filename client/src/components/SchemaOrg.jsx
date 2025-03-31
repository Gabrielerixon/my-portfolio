// src/components/SchemaOrg.jsx
import React from 'react';
import Helmet from 'react-helmet';

const SchemaOrg = () => {
  // Basic business information
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://erikssongab.com/#business",
    "name": "Eriksson G AB",
    "url": "https://erikssongab.com",
    "logo": "https://erikssongab.com/logo.png",
    "image": "https://erikssongab.com/images/gabriel-eriksson-developer.jpg",
    "description": "Professional web development services in Jönköping, Sweden specializing in React, Node.js and modern web applications.",
    "priceRange": "$$",
    "telephone": "+46707341948", // Add your actual phone number
    "email": "gabrielerixon@gmail.com", // Consider adding a business email
    "founder": {
      "@type": "Person",
      "name": "Gabriel Eriksson",
      "jobTitle": "Web Developer",
      "description": "Full stack developer specializing in React and Node.js applications",
      "sameAs": [
        "https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/",
        // Add other social profiles if applicable
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jönköping",
      "addressRegion": "Jönköping County",
      "addressCountry": "SE",
      "postalCode": "561 38" // Add your actual postal code
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "57.7826", // Jönköping coordinates - update if needed
      "longitude": "14.1618"
    },
    "sameAs": [
      "https://www.linkedin.com/in/gabriel-eriksson-7b3a9a1b0/",
      "https://www.instagram.com/gabrielerixon/",
      "http://www.fiverr.com/s/XL3Qbr2"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "15:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jönköping"
      },
      {
        "@type": "City",
        "name": "Huskvarna"  
      },
      {
        "@type": "State",
        "name": "Jönköpings län"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skräddarsydd Webbutveckling",
            "description": "Professionell skräddarsydd webbutveckling med moderna teknologier."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Applikationsutveckling",
            "description": "Utveckling av interaktiva webbapplikationer med React."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Utveckling",
            "description": "Kompletta webblösningar som använder moderna teknologier."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO-optimerade Webbplatser",
            "description": "Moderna webbplatser med rätt SEO-verktyg för att verkligen synas på nätet."
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;