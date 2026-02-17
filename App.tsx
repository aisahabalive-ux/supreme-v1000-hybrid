import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Page Components ---

const Home = () => (
  <div className="text-center py-24 px-6">
    <h1 className="text-5xl md:text-8xl font-black orbitron glow-text mb-6">SUPREME V1000</h1>
    <p className="text-zinc-400 text-xl">Core Engine Status: <span className="text-cyan-400">Operational</span></p>
  </div>
);

const Articles = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold orbitron text-white mb-10">RESEARCH ARTICLES</h1>
    <div className="space-y-12">
      <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase">Neural Interface v2.0</h2>
        <p className="text-zinc-400 leading-relaxed">Supreme V1000 provides deep integration with neural networks for seamless processing.</p>
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
    <h1 className="text-4xl font-bold orbitron text-white mb-10">PRIVACY POLICY</h1>
    <p className="mb-6">Hum Google AdSense use karte hain aur aapka data secure hai.</p>
    <p>Supreme Hybrid project biological identifiers store nahi karta.</p>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold orbitron text-white mb-12">SECURE PORTAL</h1>
    <div className="p-10 border border-cyan-500/20 bg-cyan-500/5 rounded-3xl">
      <p className="text-zinc-500 uppercase text-xs mb-2">Email Address</p>
      <p className="text-2xl font-bold text-white">aisahabalive@gmail.com</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
        
        {/* Navigation */}
        <nav className="p-6 border-b border-white/5 flex flex-wrap justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <Link to="/" className="orbitron text-white mb-4 md:mb-0">V1000_HYBRID</Link>
          <div className="flex space-x-6 text-[11px] uppercase font-bold tracking-widest">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition-colors">Articles</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </nav>

        {/* Dynamic Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center mt-20">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
            © 2026 Supreme V1000 Hybrid | All Rights Reserved
          </p>
        </footer>
        
      </div>
    </Router>
  );
}

