import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyUIs from './pages/DailyUI';
import Projects from './pages/Projects'; // Import the new Projects component
import Contact from './pages/Contact';
import './styles/layout.css';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import ResponsiveAuth from './pages/ResponsiveAuth';
import Day2Checkout from './pages/Day2Checkout';
import MountainAgencyLanding from './pages/MountainAgencyLanding';
import Calculator from './pages/Calculator';
import Day5UserProfile from './pages/Day5UserProfile';
import Day6Settings from './pages/Day6Settings';
import Day7Error from './pages/Day7Error';
import PageTitle from './components/PageTitle';
import SchemaOrg from './components/SchemaOrg';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Services from "./pages/Services";
// Wrapper component to conditionally render Navbar and Footer
function AppLayout() {
  const location = useLocation();

  // List of routes where Navbar and Footer should not be displayed
  const noNavFooterRoutes = ['/dailyui/day2', '/dailyui/day3', '/dailyui/day4', '/dailyui/day5', '/dailyui/day6', '/dailyui/day7'];

  const showNavAndFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <PageTitle />
      <SchemaOrg />
      {showNavAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> {/* New route for Projects */}
        <Route path="/dailyui" element={<DailyUIs />} /> {/* Keep this for backward compatibility */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth" element={<ResponsiveAuth />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dailyui/day2" element={<Day2Checkout />} />
        <Route path="/dailyui/day3" element={<MountainAgencyLanding />} />
        <Route path="/dailyui/day4" element={<Calculator />} />
        <Route path="/dailyui/day5" element={<Day5UserProfile />} />
        <Route path="/dailyui/day6" element={<Day6Settings />} />
        <Route path="/dailyui/day7" element={<Day7Error />} />
      </Routes>
      
      {showNavAndFooter && <Footer />}
      <Analytics/>
      <SpeedInsights/>
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