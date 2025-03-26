// First, install React Helmet:
// npm install react-helmet-async

// In your index.js, wrap your app with HelmetProvider:
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);