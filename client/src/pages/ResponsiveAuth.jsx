// src/pages/ResponsiveAuth.jsx
import React, { useState, useEffect } from 'react';
import AuthPage from './AuthPage';        // your overlay-based component
import AuthFlipCard from './AuthFlipCard'; // the 3D flip version

const ResponsiveAuth = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial width
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    
    // Listen for resize events
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <>
      {isMobile ? <AuthFlipCard /> : <AuthPage />}
    </>
  );
};

export default ResponsiveAuth;
