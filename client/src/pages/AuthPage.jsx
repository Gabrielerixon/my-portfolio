// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import './AuthPage.css';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const AuthPage = () => {
  const [signInMode, setSignInMode] = useState(true);

  const handleSignInClick = () => setSignInMode(true);
  const handleSignUpClick = () => setSignInMode(false);

  return (
    <div className={`auth-container ${signInMode ? 'sign-in-mode' : 'sign-up-mode'}`}>
      {/* Sign In Panel */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#!" className="social"><FaFacebookF size={24} /></a>
            <a href="#!" className="social"><FaGoogle size={24} /></a>
            <a href="#!" className="social"><FaLinkedinIn size={24} /></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#!" className="forgot-link">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Sign Up Panel (Removed Name field) */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#!" className="social"><FaFacebookF size={24} /></a>
            <a href="#!" className="social"><FaGoogle size={24} /></a>
            <a href="#!" className="social"><FaLinkedinIn size={24} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Overlay with the "Welcome Back" & "Hello, Friend" panels */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details and start your journey with us.</p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us.</p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
