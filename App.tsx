import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- 1. Articles Component (From articles.html) ---
const Articles = () => (
  <main className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
    <h1 className="text-5xl font-bold text-white mb-16 tracking-tight">Technical Research</h1>
    <article className="mb-20 pb-12 border-b border-white/5">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase tracking-wider">The 2026 Shift: Hybrid Neural Logics</h2>
      <p className="text-lg leading-relaxed mb-6">Traditional silicon-based binary logic is reaching its physical limits.</p>
    </article>
  </main>
);

// --- 2. About Component (From about.html) ---
const About = () => (
  <main className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold text-white mb-10 uppercase tracking-tight">Our Mission</h1>
    <div className="space-y-8 text-lg leading-relaxed text-zinc-400">
      <p>Welcome to the Supreme V1000 Hybrid Project. We focus on neural evolution.</p>
    </div>
  </main>
);

// --- 3. Privacy Policy (From privacy-policy.html) ---
const Privacy = () => (
  <div className="max-w-3xl mx-auto bg-zinc-900/40 p-12 rounded-3xl border border-white/5 mt-10 text-zinc-400">
    <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
    <p>Your data is protected by RSA 8K encryption.</p>
  </div>
);

// --- 4. Contact (From contact.html) ---
const Contact = () => (
  <main className="max-w-4xl mx-auto px-6 py-24 text-center">
    <h1 className="orbitron text-4xl font-bold text-white mb-6 uppercase">Get In Touch</h1>
    <div className="p-10 bg-zinc-900/50 border border-white/5 rounded-[40px] text-white">
      <p>Email: aisahabalive@gmail.com</p>
    </div>
  </main>
);

// --- MAIN APP ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white">
        <nav className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
          <Link to="/" className="orbitron text-xl blue-glow font-bold">V1000</Link>
          <div className="space-x-6 text-[10px] uppercase font-bold text-zinc-500">
            <Link to="/" className="hover:text-cyan-400">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400">Research</Link>
            <Link to="/about" className="hover:text-cyan-400">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400">Legal</Link>
            <Link to="/contact" className="hover:text-cyan-400">Secure Ports</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<div className="text-center py-20 text-5xl">CORE ENGINE ACTIVE</div>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
