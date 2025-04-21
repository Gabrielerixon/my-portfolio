// src/pages/DailyUI.jsx - Update to redirect to Projects page
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DailyUIs = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the new Projects page
    navigate('/projects', { replace: true });
  }, [navigate]);
  
  // This won't be shown, but it's good to have something render
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      Redirecting to Projects page...
    </div>
  );
};

export default DailyUIs;