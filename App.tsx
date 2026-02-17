import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- 1. HOME COMPONENT ---
const Home = () => (
  <div className="text-center py-24 px-6">
    <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
      System Status: Fully Operational v1.0.7
    </div>
    <h1 className="text-6xl md:text-8xl font-black orbitron mb-8 leading-tight text-white">
      HYBRID <span className="blue-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">V1000</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
      <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">Neural Link</h3>
        <p className="text-zinc-400 text-sm uppercase italic">Biometric Integration</p>
      </div>
      <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">RSA-8K</h3>
        <p className="text-zinc-400 text-sm uppercase italic">Military Grade Security</p>
      </div>
      <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">Global Node</h3>
        <p className="text-zinc-400 text-sm uppercase italic">Zero Latency Sync</p>
      </div>
    </div>
  </div>
);

// --- 2. ARTICLES COMPONENT ---
const Articles = () => (
  <div className="max-w-5xl mx-auto p-12">
    <h1 className="text-4xl font-bold orbitron text-white blue-glow mb-12 uppercase">Latest Articles</h1>
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/50 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Future of Neural Sync</h2>
        <p className="text-zinc-400 leading-relaxed">Exploring how Supreme V1000 is bridging the gap between human consciousness and digital architecture.</p>
      </div>
      <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-cyan-500/50 transition">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Hardware Integration</h2>
        <p className="text-zinc-400 leading-relaxed">A deep dive into the next generation of global node alpha connectivity and RSA encryption.</p>
      </div>
    </div>
  </div>
);

// --- 3. ABOUT COMPONENT ---
const About = () => (
  <div className="max-w-4xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-bold orbitron text-white blue-glow mb-8 uppercase">About Us</h1>
    <p className="text-xl text-cyan-400 font-bold mb-6 italic">Redefining Human-Machine Symbiosis</p>
    <p className="text-zinc-300 leading-relaxed text-lg">
      Founded in 2026, Supreme V1000 is a pioneer in neural intelligence. We develop high-end hardware solutions 
      that allow seamless data synchronization between biological and digital systems. Our goal is to make 
      technology feel like a natural extension of the self.
    </p>
  </div>
);

// --- 4. PRIVACY POLICY COMPONENT ---
const Privacy = () => (
  <div className="max-w-4xl mx-auto p-12 text-zinc-400 leading-relaxed text-left">
    <h1 className="text-4xl font-bold text-white orbitron mb-10 uppercase">Privacy Policy</h1>
    <section className="mb-10 p-8 border border-white/10 bg-white/5 rounded-2xl">
      <h2 className="text-white text-2xl font-bold mb-4">Data Protection</h2>
      <p className="mb-4">Supreme V1000 uses RSA 8K encryption to ensure your neural data is never compromised.</p>
      <h2 className="text-white text-2xl font-bold mb-4">Information Usage</h2>
      <p>We do not store personal memories or biological identifiers on public cloud servers. All processing is done locally on the V1000 Hybrid chip.</p>
    </section>
  </div>
);

// --- 5. CONTACT COMPONENT ---
const Contact = () => (
  <div className="max-w-4xl mx-auto p-20 text-center">
    <h1 className="text-4xl font-bold orbitron text-white blue-glow mb-10 uppercase">Connect With Us</h1>
    <div className="p-10 border border-cyan-500/30 rounded-3xl bg-cyan-500/5">
      <p className="text-zinc-400 uppercase text-xs tracking-widest mb-4">Global Communication Hub</p>
      <h3 className="text-3xl font-bold text-white mb-6">support@v1000-hybrid.ai</h3>
      <p className="text-zinc-500 italic">Expected Response Time: &lt; 2ms (Neural Link Required)</p>
    </div>
  </div>
);

// --- MAIN APP SETUP ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
        {/* Navigation Bar */}
        <nav className="p-8 border-b border-white/5 flex flex-wrap justify-between items-center bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
          <Link to="/" className="orbitron text-2xl font-bold blue-glow">V1000</Link>
          <div className="flex space-x-8 text-[13px] font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-cyan-400 transition">Core</Link>
            <Link to="/articles" className="hover:text-cyan-400 transition">Articles</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Privacy</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>
        </nav>

        {/* Content Routes */}
        <main className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 text-center bg-black">
          <p className="orbitron text-zinc-600 text-[10px] tracking-[0.5em]">© 2026 INFINITE HYBRID SYSTEM</p>
        </footer>
      </div>
    </Router>
  );
        }
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-20 border-t border-white/5 text-center mt-20 opacity-40">
          <p className="orbitron text-[9px] tracking-[0.5em]">© 2026 INFINITE HYBRID CHIP PROJECT</p>
        </footer>
      </div>
    </Router>
  );
            }

