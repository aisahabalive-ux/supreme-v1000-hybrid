import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Main App Setup
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        <nav className="p-8 border-b border-white/5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400">V1000</Link>
          <div className="flex space-x-6">
            {/* Ye links wahi hain jo aapki files ke naam hain */}
            <Link to="/articles" className="hover:text-cyan-400">Articles</Link>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400">Privacy</Link>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </div>
        </nav>

        <Routes>
          {/* Yahan hum sirf un files ko define kar rahe hain */}
          <Route path="/" element={<div className="p-20 text-center text-4xl">HOME PAGE ACTIVE</div>} />
          <Route path="/articles" element={<div className="p-20 text-center">Loading Articles...</div>} />
          <Route path="/about" element={<div className="p-20 text-center">Loading About...</div>} />
          <Route path="/privacy-policy" element={<div className="p-20 text-center">Loading Privacy...</div>} />
          <Route path="/contact" element={<div className="p-20 text-center">Loading Contact...</div>} />
        </Routes>
      </div>
    </Router>
  );
}
