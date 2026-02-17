import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- 1. Articles Component ---
const Articles = () => (
  <main className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
    <h1 className="text-5xl font-bold text-white mb-16 tracking-tight">Technical Research</h1>
    <article className="mb-20 pb-12 border-b border-white/5">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">The 2026 Shift: Hybrid Neural Logics</h2>
      <p className="text-lg leading-relaxed mb-6">Traditional silicon-based binary logic is reaching its physical limits. Our 2nm hybrid architecture handles complex neural data.</p>
    </article>
    <article className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Security Protocols for Decentralized Nodes</h2>
      <p className="text-lg leading-relaxed mb-6">As data becomes more decentralized, the risk of interception increases. We use RSA 8K encryption.</p>
    </article>
  </main>
);

// --- 2. About Component ---
const About = () => (
  <main className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold text-white mb-10 uppercase tracking-tight">Our Mission</h1>
    <div className="space-y-8 text-lg leading-relaxed text-zinc-400">
      <p>Welcome to the Supreme V1000 Hybrid Project. We are a research-driven initiative focused on the next evolution of computing.</p>
      <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
        <h2 className="orbitron text-white text-xl mb-4">Why Supreme V1000?</h2>
        <p>As we move into 2026, the demand for decentralized data repositories and infinite scaling has never been higher.</p>
      </div>
    </div>
  </main>
);

// --- 3. Privacy Policy Component ---
const Privacy = () => (
  <div className="max-w-3xl mx-auto bg-zinc-900/40 p-12 rounded-3xl border border-white/5 mt-10">
    <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
    <p className="mb-6 text-zinc-400">Last Updated: February 2026. We use Google AdSense and follow strict data protection protocols.</p>
    <h2 className="text-xl font-bold text-white mt-8 mb-4">Data Protection</h2>
    <p className="text-zinc-400">Our Supreme Hybrid project does not collect or store personal biological identifiers.</p>
  </div>
);

// --- 4. Contact Component ---
const Contact = () => (
  <main className="flex-grow max-w-4xl mx-auto px-6 py-24 text-center">
    <h1 className="orbitron text-4xl font-bold text-white mb-6 uppercase">Get In Touch</h1>
    <div className="inline-block p-10 bg-zinc-900/50 border border-white/5 rounded-[40px] text-left">
      <div className="mb-6">
        <h3 className="text-xs uppercase text-zinc-500 mb-1">Email Address</h3>
        <p className="text-xl font-medium text-white">aisahabalive@gmail.com</p>
      </div>
      <div>
        <h3 className="text-xs uppercase text-zinc-500 mb-1">Project Repository</h3>
        <p className="text-xl font-medium text-cyan-400">github.com/supreme-v1000-hybrid</p>
      </div>
    </div>
  </main>
);

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        <nav className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
          <Link to="/" className="orbitron text-xl blue-glow font-bold">SUPREME V1000</Link>
          <div className="space-x-6 text-[10px] uppercase font-bold tracking-widest text-zinc-500">
            <Link to="/" className="hover:text-cyan-400 transition">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition">Research</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Secure Ports</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<div className="text-center py-20"><h1 className="text-5xl orbitron blue-glow">CORE ENGINE ACTIVE</h1></div>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

