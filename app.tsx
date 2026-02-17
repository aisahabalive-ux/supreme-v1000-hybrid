import React, { useState } from 'react';

// --- Components ---
const Home = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-black orbitron blue-glow text-white">SUPREME V1000</h1>
    <p className="text-zinc-500 mt-4 tracking-[0.2em]">HYBRID NEURAL ARCHITECTURE</p>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto p-12 text-zinc-300">
    <h2 className="text-3xl font-black orbitron text-cyan-400 mb-6 uppercase">About Project</h2>
    <p className="leading-relaxed mb-4">
      SUPREME V1000 ek next-generation hybrid chip project hai jo neural processing aur hardware integration ko merge karta hai. 
    </p>
    <p className="leading-relaxed">
      Hamara mission AI computing ko faster, secure aur accessible banana hai. Hum hardware-level encryption aur high-speed data protocols ka use karte hain.
    </p>
  </div>
);

const Articles = () => (
  <div className="max-w-4xl mx-auto p-12">
    <h2 className="text-3xl font-black orbitron text-cyan-400 mb-8 uppercase">Latest Intelligence</h2>
    <div className="space-y-6">
      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        <h3 className="text-xl font-bold text-white mb-2">Neural Synthesis v1.0</h3>
        <p className="text-zinc-400">Real-time processing optimized for supreme efficiency.</p>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto p-12 text-zinc-400">
    <h2 className="text-3xl font-black orbitron text-white mb-6 uppercase">Privacy Policy</h2>
    <p className="mb-4">Aapka data RSA 8X encryption ke saath puri tarah safe hai.</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Zero Personal Data Storage</li>
      <li>End-to-End Encrypted Nodes</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto p-20 text-center">
    <h2 className="text-3xl font-black orbitron text-white mb-6 uppercase">Secure Ports</h2>
    <p className="text-2xl font-bold text-cyan-400">contact@supreme-v1000.com</p>
  </div>
);

// --- Main App ---
export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="p-8 border-b border-white/5 flex flex-wrap justify-between items-center">
        <button onClick={() => setPage('home')} className="orbitron text-2xl font-black blue-glow">SUPREME V1000</button>
        <div className="flex space-x-6 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          <button onClick={() => setPage('home')} className={`hover:text-cyan-400 ${page === 'home' ? 'text-cyan-400' : ''}`}>Core</button>
          <button onClick={() => setPage('articles')} className={`hover:text-cyan-400 ${page === 'articles' ? 'text-cyan-400' : ''}`}>Articles</button>
          <button onClick={() => setPage('about')} className={`hover:text-cyan-400 ${page === 'about' ? 'text-cyan-400' : ''}`}>About</button>
          <button onClick={() => setPage('privacy')} className={`hover:text-cyan-400 ${page === 'privacy' ? 'text-cyan-400' : ''}`}>Legal</button>
          <button onClick={() => setPage('contact')} className={`hover:text-cyan-400 ${page === 'contact' ? 'text-cyan-400' : ''}`}>Ports</button>
        </div>
      </nav>

      {/* Content Rendering */}
      <main className="animate-in fade-in duration-500">
        {page === 'home' && <Home />}
        {page === 'articles' && <Articles />}
        {page === 'about' && <About />}
        {page === 'privacy' && <Privacy />}
        {page === 'contact' && <Contact />}
      </main>
    </div>
  );
          }
