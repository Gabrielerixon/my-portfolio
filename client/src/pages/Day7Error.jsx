import React, { useEffect, useRef } from 'react';
import './Day7Error.css';

const Day7Error = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Text to display
    const text = '404';
    
    // Animation variables
    let frame = 0;
    let animationId;
    
    // Colors for 3D effect
    const frontColor = '#ffffff';      // White front face
    const shadowColor = 'rgba(0, 0, 0, 0.7)';  // Dark shadow
    const rightSideColor = '#666666';  // Gray right side
    
    // Draw 3D text
    const draw3DText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate center position
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Apply bobbing motion
      const floatOffset = Math.sin(frame * 0.04) * 10;
      
      // Set font properties
      const fontSize = Math.min(canvas.width / 5, 200);
      ctx.font = `900 ${fontSize}px Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Apply rotation for 3D perspective
      ctx.save();
      ctx.translate(centerX, centerY + floatOffset);
      ctx.rotate(0.15);
      ctx.translate(-centerX, -(centerY + floatOffset));
      
      // Draw shadow
      ctx.fillStyle = shadowColor;
      ctx.fillText(text, centerX + 30, centerY + floatOffset + 30);
      
      // Only draw the right side for a cleaner 3D effect
      ctx.fillStyle = rightSideColor;
      for (let i = 30; i > 0; i--) {
        ctx.fillText(text, centerX + i * 0.7, centerY + i * 0.7 + floatOffset);
      }
      
      // Draw front face
      ctx.fillStyle = frontColor;
      ctx.fillText(text, centerX, centerY + floatOffset);
      
      // Add outline to front face
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      ctx.strokeText(text, centerX, centerY + floatOffset);
      
      // Restore canvas context
      ctx.restore();
      
      // Update animation frame
      frame++;
      animationId = requestAnimationFrame(draw3DText);
    };
    
    // Start animation
    draw3DText();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="error-page">
      <div className="diagonal-bg"></div>
      
      <nav className="navbar">
        <div className="navbar-brand">Daily UI</div>
        <ul className="navbar-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/dailyui">CHALLENGES</a></li>
          <li><a href="/about">ABOUT</a></li>
        </ul>
      </nav>
      
      <canvas ref={canvasRef} className="canvas-container"></canvas>
      
      <div className="error-message">
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/dailyui" className="back-button">Back to Challenges</a>
      </div>
    </div>
  );
};

export default Day7Error;