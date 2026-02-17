import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Page Components ---

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
    <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase animate-pulse">
      System Status: Online
    </div>
    <h1 className="text-6xl md:text-9xl font-black orbitron mb-6 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
      V1000 <span className="text-cyan-500 glow-text">HYBRID</span>
    </h1>
    <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
      Next-generation neural architecture engineered for the 2026 digital frontier. 
      Speed. Security. Supreme Intelligence.
    </p>
    <div className="mt-10 flex gap-4">
      <Link to="/articles" className="px-8 py-3 bg-white text-black font-bold orbitron hover:bg-cyan-400 transition-all duration-300">GET STARTED</Link>
      <Link to="/about" className="px-8 py-3 border border-white/20 hover:border-cyan-500 transition-all duration-300">LEARN MORE</Link>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold orbitron mb-12 border-l-4 border-cyan-500 pl-4">RESEARCH_LOGS</h1>
    <div className="grid md:grid-cols-2 gap-8">
      {[1, 2].map((i) => (
        <div key={i} className="group p-8 border border-white/5 bg-[#0A0A0A] hover:border-cyan-500/50 transition-all duration-500">
          <div className="text-cyan-500 text-xs mb-4 orbitron">00{i} // CATEGORY: NEURAL_LINK</div>
          <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400">Advanced Bio-Sync Protocols</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">Supreme V1000 ki nayi update mein neural processing speed ko 40% tak improve kiya gaya hai.</p>
          <button className="text-xs font-bold orbitron tracking-widest border-b border-cyan-500 pb-1">READ FULL LOG</button>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-4xl font-bold orbitron mb-8">MISSION_STATEMENT</h1>
    <p className="text-2xl text-zinc-300 font-light leading-relaxed mb-8">
      "Hamara maqsad technology aur insani zehen ke darmiyan ki deewar ko khatam karna hai."
    </p>
    <div className="grid grid-cols-2 gap-4 text-sm text-zinc-500">
      <div className="p-4 border border-white/5">ESTABLISHED: 2026</div>
      <div className="p-4 border border-white/5">CORE: HYBRID_CHIP</div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-6 py-24 text-zinc-400">
    <h1 className="text-4xl font-bold orbitron text-white mb-10">DATA_ENCRYPTION_POLICY</h1>
    <div className="space-y-6 border-l border-white/10 pl-8">
      <p>Aapka data 256-bit encryption ke saath secure kiya jata hai.</p>
      <p>Google AdSense cookies hamari site par user experience improve karne ke liye use hoti hain.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <div className="relative p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 orbitron text-6xl">V1000</div>
      <h1 className="text-4xl font-bold orbitron mb-6">SECURE_CHANNEL</h1>
      <p className="text-zinc-400 mb-8">Direct communication line for encrypted queries.</p>
      <a href="mailto:aisahabalive@gmail.com" className="text-3xl font-light hover:text-cyan-400 transition-colors break-all">
        aisahabalive@gmail.com
      </a>
    </div>
  </div>
);

// --- Main Layout ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        
        <nav className="sticky top-0 z-50 flex justify-between items-center p-8 backdrop-blur-xl border-b border-white/5">
          <Link to="/" className="orbitron font-black text-xl tracking-tighter">S_V1000</Link>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
            <Link to="/" className="hover:text-cyan-500 transition-colors">Home</Link>
            <Link to="/articles" className="hover:text-cyan-500 transition-colors">Articles</Link>
            <Link to="/about" className="hover:text-cyan-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-cyan-500 transition-colors">Secure_Link</Link>
          </div>
        </nav>

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="p-12 border-t border-white/5 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] orbitron tracking-widest">
            <p>© 2026 SUPREME HYBRID CORP</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy">PRIVACY</Link>
              <a href="#">SYSTEM_LOGS</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
      }
