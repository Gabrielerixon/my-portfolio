import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyUIs from './pages/DailyUI';
import Contact from './pages/Contact';
import './styles/layout.css';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import ResponsiveAuth from './pages/ResponsiveAuth';
import Day2Checkout from './pages/Day2Checkout';

// Wrapper component to conditionally render Navbar and Footer
function AppLayout() {
  const location = useLocation();

  // List of routes where Navbar and Footer should not be displayed
  const noNavFooterRoutes = ['/dailyui/day2'];

  const showNavAndFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {showNavAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dailyui" element={<DailyUIs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth" element={<ResponsiveAuth />} />
        <Route path="/dailyui/day2" element={<Day2Checkout />} />
      </Routes>
      
      {showNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;