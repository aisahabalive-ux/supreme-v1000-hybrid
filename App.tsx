import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Page Components ---
const Home = () => (
  <div className="text-center py-24 px-6">
    <h1 className="text-6xl md:text-8xl font-black orbitron blue-glow mb-8 text-white uppercase">Hybrid V1000</h1>
    <p className="text-zinc-400 text-xl">Core Engine Status: Operational</p>
  </div>
);

const Articles = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold orbitron text-white mb-10">RESEARCH PUBLICATIONS</h1>
    <div className="space-y-12">
      <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase">Hybrid Neural Logics</h2>
        <p className="text-zinc-400 leading-relaxed">Supreme V1000 provides real-time neural data synchronization for decentralized nodes.</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold orbitron text-white mb-10">OUR MISSION</h1>
    <p className="text-xl text-zinc-300 leading-relaxed">
      Humara lakshya hardware aur neural intelligence ko seamlessly sync karna hai. 
      V1000 Hybrid project 2026 ki computing technology ko redefine kar raha hai.
    </p>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-400">
    <h1 className="text-3xl font-bold text-white mb-8">PRIVACY POLICY</h1>
    <p className="mb-6">Hum Google AdSense use karte hain aur aapka data RSA 8K encryption se secure hai.</p>
    <p>Supreme Hybrid project biological identifiers store nahi karta.</p>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold orbitron text-white mb-12">SECURE PORTS</h1>
    <div className="p-10 border border-cyan-500/20 bg-cyan-500/5 rounded-[40px]">
      <p className="text-zinc-500 uppercase text-xs mb-2">Email Address</p>
      <p className="text-2xl font-bold text-white">aisahabalive@gmail.com</p>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        {/* Navigation */}
        <nav className="p-6 border-b border-white/5 flex flex-wrap justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
          <Link to="/" className="orbitron text-xl blue-glow font-bold">V1000</Link>
          <div className="flex space-x-6 text-[11px] uppercase font-bold tracking-widest text-zinc-400">
            <Link to="/" className="hover:text-white transition">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition">Research</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Connect</Link>
          </div>
        </nav>

        {/* Dynamic Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-12 border-t border-white/5 text-center mt-20">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">© 2026 INFINITE HYBRID CHIP PROJECT</p>
        </footer>
      </div>
    </Router>
  );
}
