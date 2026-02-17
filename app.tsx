import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Futuristic Components ---

const Home = () => (
  <div className="text-center py-24 px-6">
    <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full text-[10px] text-cyan-400 uppercase tracking-widest animate-pulse">
      System Status: Fully Operational • v1.0.7
    </div>
    <h1 className="text-6xl md:text-8xl font-black orbitron mb-8 leading-tight tracking-tighter">
      HYBRID <span className="blue-glow">NEURAL</span><br />ARCHITECTURE
    </h1>
    <p className="text-zinc-500 tracking-[0.5em] text-[10px] uppercase font-bold max-w-2xl mx-auto">
      Redefining Computational Limits for 2026 Global Standard
    </p>
  </div>
);

const Articles = () => (
  <div className="max-w-5xl mx-auto p-12">
    <h1 className="text-4xl font-black orbitron blue-glow mb-12">KNOWLEDGE ARCHIVE</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/50 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Neural Sync Protocol</h2>
        <p className="text-zinc-400 leading-relaxed">V1000 chip real-time neural data ko 0.02ms latency ke saath sync karta hai.</p>
      </div>
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/50 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">RSA 8K Security Mesh</h2>
        <p className="text-zinc-400 leading-relaxed">Hardware-level encryption jo infinite scaling nodes ko secure banata hai.</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-black orbitron blue-glow mb-8">OUR MISSION (ABOUT)</h1>
    <p className="text-xl text-cyan-400 font-bold mb-6 italic">"Redefining Computational Limits for Global Innovation"</p>
    <p className="text-zinc-400 leading-relaxed text-lg">
      Supreme V1000 Project ka lakshya ek aisa hybrid ecosystem taiyar karna hai jahan hardware aur neural intelligence bina kisi rukawat ke kaam karein. Hum 2026 ke technology standards ko lead kar rahe hain.
    </p>
  </div>
);

const Privacy = () => (
  <div className="max-w-3xl mx-auto p-12 text-zinc-400 leading-loose">
    <h1 className="text-3xl font-black orbitron text-white mb-8">LEGAL & PRIVACY</h1>
    <p className="mb-6">Aapki security humari priority hai. RSA 8K Standard ke tehat hum neural data ko protect karte hain.</p>
    <div className="p-6 border-l-2 border-cyan-500 bg-white/5">
      <p>• No personal neural data storage.</p>
      <p>• Real-time end-to-end encryption.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-2xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-black orbitron blue-glow mb-10">SECURE PORTS (CONTACT)</h1>
    <div className="p-10 border border-cyan-500/20 rounded-[2rem] bg-cyan-500/5 backdrop-blur-xl">
      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">Official Uplink</p>
      <p className="text-3xl font-bold text-white mb-10">contact@supreme-v1000.io</p>
      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mb-2">Node Location</p>
      <p className="text-lg text-cyan-200">Global Hybrid Node - Alpha 01</p>
    </div>
  </div>
);

// --- Main App with Navigation ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
        <nav className="p-8 border-b border-white/5 flex flex-wrap justify-between items-center sticky top-0 bg-black/90 backdrop-blur-2xl z-50">
          <Link to="/" className="orbitron text-2xl font-black blue-glow tracking-tighter">SUPREME V1000</Link>
          <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link to="/" className="hover:text-cyan-400 transition">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition">Articles</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition text-cyan-400">Secure Ports</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-20 border-t border-white/5 text-center mt-20 bg-black/40">
          <p className="orbitron text-[9px] text-zinc-800 tracking-[0.5em]">© 2026 INFINITE HYBRID CHIP PROJECT</p>
        </footer>
      </div>
    </Router>
  );
}
