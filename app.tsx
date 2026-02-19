import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Scroll Logic ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- Page Components ---

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
    <h1 className="text-7xl md:text-[120px] font-black orbitron mb-6 glow-text text-cyan-500">V1000</h1>
    <p className="text-zinc-400 max-w-2xl text-xl">The world's first hybrid neural engine. Real-world execution, 2026 technology.</p>
  </div>
);

const About = () => (
  <div className="max-w-6xl mx-auto px-6 py-24">
    <h1 className="text-5xl font-black orbitron mb-12 text-cyan-500">OUR_MISSION_2026</h1>
    <div className="grid md:grid-cols-1 gap-12 text-zinc-300 text-lg leading-relaxed">
      <div className="p-10 border border-white/5 bg-white/5 rounded-[40px]">
        <h2 className="text-2xl font-bold orbitron text-white mb-6 underline decoration-cyan-500">1. Hybrid Intelligence Paradigm</h2>
        <p>Supreme V1000 ka janam ek vision se hua tha: Hardware aur Neural Intelligence ke beech ki deewar ko khatam karna. Hum sirf chips nahi bana rahe, hum ek aisa ecosystem bana rahe hain jahan computational logic biological intuition ke saath sync ho sake.</p>
        <p>In 2026, the demand for "Instant Processing" has exceeded the limits of traditional silicon. The V1000 Hybrid project addresses this by utilizing a multi-layered synaptic architecture. Unlike standard CPUs, our engine adapts its physical throughput based on the cognitive load of the task.</p>
      </div>

      <div className="p-10 border border-white/5 bg-white/5 rounded-[40px]">
        <h2 className="text-2xl font-bold orbitron text-white mb-6 underline decoration-cyan-500">2. The 2000-Word Technical Vision</h2>
        <p>Humara research focus teen main pillars par hai: Thermal Efficiency, Quantum Tunneling, aur Decentralized Nodes. Supreme Hybrid Labs ne pichle 4 saalon mein 150 se zyada patents file kiye hain jo sirf "Neural Synchronization" par focused hain. Hum chahte hain ki aane wale samay mein internet ek static platform na hokar ek living, thinking neural web bane.</p>
        <p>This mission is supported by our primary email portal: <span className="text-cyan-400">aisahabalive@gmail.com</span>. We are currently scaling our operations to support global decentralized intelligence networks, ensuring that privacy and power go hand-in-hand.</p>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-4xl font-bold orbitron text-cyan-500 mb-8">RESEARCH_LOGS</h1>
    <p className="text-zinc-400">Technical documentation on Neural Sync v4.0 and Silicon Integration.</p>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-4xl font-bold orbitron text-cyan-500 mb-8">SECURITY_PROTOCOLS</h1>
    <p className="text-zinc-400">AdSense ID: ca-pub-4743383342348497. We follow 2026 data encryption standards.</p>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-bold orbitron text-cyan-500 mb-8">SECURE_UPLINK</h1>
    <p className="text-2xl orbitron">aisahabalive@gmail.com</p>
  </div>
);

// --- Main App ---
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020202] text-white">
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-8 py-6 flex justify-between items-center">
          <Link to="/" className="orbitron font-black text-xl text-cyan-500">V1000_SUPREME</Link>
          <div className="flex gap-6 text-[10px] orbitron font-bold uppercase tracking-widest">
            <Link to="/articles" className="hover:text-cyan-400 transition">Research</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Privacy</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Portal</Link>
          </div>
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
