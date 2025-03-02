// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/layout.css';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import ResponsiveAuth from './pages/ResponsiveAuth';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/auth" element={<ResponsiveAuth />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
