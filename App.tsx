import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages ke components
const About = () => <div className="p-20 text-white"><h1>About Us Content from your about.html</h1></div>;
const Articles = () => <div className="p-20 text-white"><h1>Articles from your articles.html</h1></div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        <nav className="p-6 border-b border-white/5 flex gap-6 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div className="p-20 text-white">Home Page</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          {/* Baaki routes bhi aise hi add karein */}
        </Routes>
      </div>
    </Router>
  );
}
