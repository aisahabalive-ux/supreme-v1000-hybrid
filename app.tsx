import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Futuristic Components ---

const Home = () => (
  <div className="text-center py-24 px-6">
    <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full text-[10px] text-cyan-400 uppercase tracking-widest animate-pulse">
      System Status: Fully Operational • v1.0.7
    </div>
    <h1 className="text-6xl md:text-8xl font-black orbitron mb-8 leading-tight tracking-tighter">
      HYBRID <span className="blue-glow font-black">NEURAL</span><br />ARCHITECTURE
    </h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl">
        <h3 className="text-2xl font-bold">99.9%</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Uptime Accuracy</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-cyan-400">
        <h3 className="text-2xl font-bold">0.02ms</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Neural Latency</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-white">
        <h3 className="text-2xl font-bold">∞</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Scaling Nodes</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-white">
        <h3 className="text-2xl font-bold">RSA 8K</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Security Level</p>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-5xl mx-auto p-12">
    <h1 className="text-4xl font-black orbitron blue-glow mb-12 uppercase">Knowledge Archive</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/30 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Neural Sync Protocol</h2>
        <p className="text-zinc-400">Supreme V1000 chip real-time neural data ko 0.02ms latency ke saath sync karta hai.</p>
      </div>
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/30 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Infinite Mesh Scaling</h2>
        <p className="text-zinc-400">Hardware-level integration jo infinite scaling nodes ko secure banata hai.</p>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-3xl mx-auto p-12 text-zinc-400">
    <h1 className="text-3xl font-black orbitron text-white mb-8 uppercase tracking-tighter">Legal & Privacy</h1>
    <p className="mb-6">Supreme V1000 RSA 8K encryption ka use karta hai taaki aapka neural data secure rahe.</p>
    <div className="p-6 border-l-2 border-cyan-500 bg-white/5">
      <p>• No personal data storage.</p>
      <p>• End-to-end encrypted ports.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-2xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-black orbitron blue-glow mb-10 uppercase">Secure Ports</h1>
    <div className="p-10 border border-cyan-500/20 rounded-[2rem] bg-cyan-500/5 backdrop-blur-xl">
      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">Official Uplink</p>
      <p className="text-3xl font-bold text-white mb-6">contact@supreme-v1000.io</p>
      <p className="text-[10px] text-zinc-500 uppercase">Global Node Alpha-01</p>
    </div>
  </div>
);

// --- Main App Setup ---

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
          <Route path="/about" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-20 border-t border-white/5 text-center mt-20 opacity-40 text-[9px] orbitron tracking-[0.5em]">
          © 2026 INFINITE HYBRID CHIP PROJECT
        </footer>
      </div>
    </Router>
  );
    }
