// src/components/PageTitle.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Default title suffix
    const siteName = 'Gabriel Eriksson';
    
    // Set page-specific titles
    let pageTitle;
    switch(location.pathname) {
      case '/':
        pageTitle = `${siteName} | Full Stack Developer`;
        break;
      case '/dailyui':
        pageTitle = `UI Projects | ${siteName}`;
        break;
      case '/contact':
        pageTitle = `Contact | ${siteName}`;
        break;
      case '/about':
        pageTitle = `About | ${siteName}`;
        break;
      case '/blog':
        pageTitle = `Blog | ${siteName}`;
        break;
      case '/auth':
        pageTitle = `Login | ${siteName}`;
        break;
      default:
        // For DailyUI challenge pages
        if (location.pathname.includes('/dailyui/day')) {
          const dayNumber = location.pathname.split('/').pop().replace('day', '');
          pageTitle = `UI Challenge ${dayNumber} | ${siteName}`;
        } else {
          pageTitle = `${siteName} | Portfolio`;
        }
    }
    
    // Update the document title
    document.title = pageTitle;
  }, [location]);
  
  // This component doesn't render anything
  return null;
};

export default PageTitle;