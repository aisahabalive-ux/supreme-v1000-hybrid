import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Futuristic Pages Content ---

const Home = () => (
  <div className="text-center py-20 px-6">
    <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full text-cyan-400 text-xs tracking-widest uppercase bg-cyan-500/5">
      System Status: Fully Operational - v1.0.7
    </div>
    <h1 className="text-6xl md:text-8xl font-black orbitron mb-8 leading-tight text-white">
      HYBRID <span className="blue-glow">NEURAL</span><br/>ARCHITECTURE
    </h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-center">
        <h3 className="text-2xl font-bold">99.9%</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Uptime</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-center">
        <h3 className="text-2xl font-bold">0.02ms</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Latency</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-center">
        <h3 className="text-2xl font-bold">∞</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Nodes</p>
      </div>
      <div className="p-6 border border-white/5 bg-white/5 rounded-xl text-center">
        <h3 className="text-2xl font-bold">Secure</h3>
        <p className="text-[10px] text-zinc-500 uppercase">Security</p>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-5xl mx-auto p-12">
    <h1 className="text-4xl font-black orbitron blue-glow mb-12 uppercase text-white">Latest Intelligence</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Neural Synthesis v1.0</h2>
        <p className="text-zinc-400">Real-time processing optimized for Supreme V1000 hybrid chips.</p>
      </div>
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Infinite Memory</h2>
        <p className="text-zinc-400">Hardware-level integration for unlimited neural data scaling.</p>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-3xl mx-auto p-12 text-zinc-400">
    <h1 className="text-3xl font-black orbitron text-white mb-8 uppercase">Legal & Privacy</h1>
    <p className="mb-4">Supreme V1000 uses RSA 8X encryption to protect all neural data transfers.</p>
    <p>Hum aapka koi bhi personal data store nahi karte. Sabhi communication end-to-end encrypted hain.</p>
  </div>
);

const Contact = () => (
  <div className="max-w-2xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-black orbitron blue-glow mb-10 uppercase text-white">Secure Ports</h1>
    <div className="p-10 border border-cyan-500/20 rounded-[2rem] bg-cyan-500/5">
      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">Terminal Access</p>
      <p className="text-2xl font-bold text-white">contact@supreme-v1000.com</p>
    </div>
  </div>
);

// --- Main App Setup ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
        <nav className="p-8 border-b border-white/5 flex flex-wrap justify-between items-center">
          <Link to="/" className="orbitron text-2xl font-black blue-glow">SUPREME V1000</Link>
          <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            <Link to="/" className="hover:text-cyan-400 transition">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition">Articles</Link>
            <Link to="/privacy" className="hover:text-cyan-400 transition">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Ports</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
