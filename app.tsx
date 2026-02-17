import React, { useState } from 'react';

// --- Components (Inmein saari details hain) ---
const Home = () => (
  <div className="text-center py-20 px-6">
    <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full text-cyan-400 text-xs tracking-widest uppercase bg-cyan-500/5">
      System Status: Fully Operational
    </div>
    <h1 className="text-6xl md:text-8xl font-black orbitron mb-8 leading-tight text-white">
      HYBRID <span className="blue-glow text-cyan-400">NEURAL</span><br/>ARCHITECTURE
    </h1>
    <p className="text-zinc-500 max-w-2xl mx-auto mb-10">Supreme V1000 is the future of hybrid chip technology, blending neural processing with military-grade security.</p>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto p-12 text-zinc-300">
    <h2 className="text-3xl font-black orbitron text-cyan-400 mb-6 uppercase">About Supreme V1000</h2>
    <p className="leading-relaxed mb-4 text-lg">
      Supreme V1000 ek revolutionary hybrid neural chip project hai. Iska maqsad computing ko hardware level par fast aur secure banana hai.
    </p>
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        <h4 className="text-white font-bold mb-2">Our Vision</h4>
        <p className="text-zinc-400 text-sm">AI processing ko direct hardware integration ke saath next level par le jana.</p>
      </div>
      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        <h4 className="text-white font-bold mb-2">Technology</h4>
        <p className="text-zinc-400 text-sm">Hybrid Chip Architecture jo power efficiency aur high speed dono deta hai.</p>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-5xl mx-auto p-12">
    <h1 className="text-4xl font-black orbitron text-white mb-12 uppercase">Latest Intelligence</h1>
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
    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
      <p className="text-sm">Hum aapka koi bhi personal biological data store nahi karte. Privacy hamari priority hai.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-2xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-black orbitron text-white mb-10 uppercase">Secure Ports</h1>
    <div className="p-10 border border-cyan-500/20 rounded-[2rem] bg-cyan-500/5">
      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mb-4">Direct Terminal Access</p>
      <p className="text-2xl font-bold text-white tracking-wide">contact@supreme-v1000.com</p>
    </div>
  </div>
);

// --- Main App Setup ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 font-sans">
      {/* Navigation - Button Based to avoid Router Errors */}
      <nav className="p-8 border-b border-white/5 flex flex-wrap justify-between items-center sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <button onClick={() => setCurrentPage('home')} className="orbitron text-2xl font-black text-white hover:text-cyan-400 transition">SUPREME V1000</button>
        <div className="flex space-x-6 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          <button onClick={() => setCurrentPage('articles')} className={`hover:text-cyan-400 transition ${currentPage === 'articles' ? 'text-cyan-400' : ''}`}>Articles</button>
          <button onClick={() => setCurrentPage('about')} className={`hover:text-cyan-400 transition ${currentPage === 'about' ? 'text-cyan-400' : ''}`}>About</button>
          <button onClick={() => setCurrentPage('privacy')} className={`hover:text-cyan-400 transition ${currentPage === 'privacy' ? 'text-cyan-400' : ''}`}>Legal</button>
          <button onClick={() => setCurrentPage('contact')} className={`hover:text-cyan-400 transition ${currentPage === 'contact' ? 'text-cyan-400' : ''}`}>Ports</button>
        </div>
      </nav>

      {/* Dynamic Content Rendering */}
      <main className="transition-all duration-300">
        {currentPage === 'home' && <Home />}
        {currentPage === 'articles' && <Articles />}
        {currentPage === 'about' && <About />}
        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <footer className="py-10 text-center border-t border-white/5 text-zinc-600 text-[10px] uppercase tracking-widest">
        © 2026 Infinite Hybrid Chip Project
      </footer>
    </div>
  );
        }

