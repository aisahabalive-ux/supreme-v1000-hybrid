import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// In components ko khali rakhein ya unme "Loading..." likhein 
// kyunki aap unhe static files se connect karna chahte hain
const Articles = () => <div className="p-20 text-center">Articles Loading...</div>;
const About = () => <div className="p-20 text-center">About Mission Loading...</div>;
const Privacy = () => <div className="p-20 text-center">Privacy Policy Loading...</div>;
const Contact = () => <div className="p-20 text-center">Contact Loading...</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        {/* Navigation Bar - Matching your index.html */}
        <nav className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
          <Link to="/" className="orbitron text-xl blue-glow font-bold">V1000</Link>
          <div className="space-x-6 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
            <Link to="/" className="hover:text-white transition">Core</Link>
            {/* Ye links aapki files (articles.html, about.html) ke raste hain */}
            <Link to="/articles" className="hover:text-cyan-400 transition">Articles</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Secure Ports</Link>
          </div>
        </nav>

        {/* Routes setup jo error hatayega */}
        <Routes>
          <Route path="/" element={<div className="text-center py-24 text-4xl orbitron blue-glow">CORE ENGINE ACTIVE</div>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
