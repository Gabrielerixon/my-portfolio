import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import './AuthFlipCard.css';

const AuthFlipCard = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  const toggleSignInUp = () => setIsSignIn(!isSignIn);
  
  return (
    <div className="flip-container">
      <div className={`flip-card-inner ${isSignIn ? '' : 'flipped'}`}>
        {/* FRONT side */}
        <div className="flip-card-front">
          <h1>Sign In</h1>
          <div className="social-icons">
            <div className="icon-circle"><FaFacebookF /></div>
            <div className="icon-circle"><FaGoogle /></div>
            <div className="icon-circle"><FaLinkedinIn /></div>
          </div>
          <span>or use your account</span>
          <div className="input-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot your password?</a>
          </div>
          <button className="action-btn main-btn">Sign In</button>
          
          <button className="action-btn inverted-btn" onClick={toggleSignInUp}>
            Switch to Sign Up
          </button>
        </div>
        
        {/* BACK side */}
        <div className="flip-card-back">
          <h1>Sign Up</h1>
          <div className="social-icons">
            <div className="icon-circle"><FaFacebookF /></div>
            <div className="icon-circle"><FaGoogle /></div>
            <div className="icon-circle"><FaLinkedinIn /></div>
          </div>
          <span>or use your email for registration</span>
          <div className="input-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="action-btn main-btn">Sign Up</button>
          
          <button className="action-btn inverted-btn" onClick={toggleSignInUp}>
            Switch to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthFlipCard;