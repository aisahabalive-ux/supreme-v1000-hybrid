import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Scroll to Top Logic ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Page Components ---

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
    <div className="inline-block px-4 py-1 mb-8 border border-cyan-500/30 bg-cyan-500/10 rounded-full text-cyan-400 text-[10px] orbitron tracking-[0.4em] animate-pulse">
      CORE_ENGINE_v1000_LOADED
    </div>
    <h1 className="text-7xl md:text-[150px] font-black orbitron mb-8 tracking-tighter leading-none bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent">
      SUPREME<br/><span className="text-cyan-500 glow-text">V1000</span>
    </h1>
    <p className="max-w-3xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
      The most powerful hybrid neural architecture for the next era of digital intelligence. 
      Real-world execution, 2026 ready.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      <Link to="/articles" className="px-12 py-4 bg-white text-black font-black orbitron text-xs hover:bg-cyan-500 transition-all duration-500">INITIATE_RESEARCH</Link>
      <Link to="/contact" className="px-12 py-4 border border-white/10 hover:border-cyan-500 transition-all duration-500 orbitron text-xs tracking-widest">SECURE_UPLINK</Link>
    </div>
  </div>
);

const Articles = () => (
  <div className="max-w-6xl mx-auto px-6 py-24">
    <h1 className="text-5xl font-black orbitron mb-16 border-l-8 border-cyan-500 pl-8">RESEARCH_LOGS</h1>
    <div className="grid gap-16">
      <div className="p-12 border border-white/5 bg-[#080808] rounded-[40px] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 text-cyan-500/10 orbitron text-8xl font-black">01</div>
        <h2 className="text-3xl font-bold orbitron text-white mb-8 group-hover:text-cyan-400 transition-colors">Neural-Silicon Synthesis v2.0</h2>
        <div className="text-zinc-400 space-y-6 leading-relaxed text-lg">
          <p>Supreme V1000 Hybrid Engine is not merely a processor; it is a bio-integrated computing environment designed for the complexity of 2026. Hum isme aisi technology use kar rahe hain jo hardware aur software ke gap ko khatam kar deti hai.</p>
          <p><strong>Performance Matrix:</strong> Unlike traditional chips, our Synaptic Layer operates directly on the silicon hardware. Iska matlab hai ki AI processing ab pehle se 400% fast hogi. Quantum tunneling integration ki wajah se energy consumption 45% kam ho jati hai.</p>
          <p>(Yahan aap apni 2000+ words ki baki technical details copy-paste kar sakte hain...)</p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="max-w-5xl mx-auto px-6 py-24">
    <h2 className="text-4xl font-bold orbitron mb-12 text-cyan-500">THE_MISSION</h2>
    <div className="space-y-12">
      <p className="text-4xl font-light text-zinc-200 leading-tight border-b border-white/5 pb-12">
        "Redefining the boundary between human biological intent and digital execution."
      </p>
      <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed">
        <p>Hamara lakshya hardware aur neural intelligence ko seamlessly sync karna hai. V1000 Hybrid project sirf speed ke baare mein nahi hai, balki 'Cognitive Efficiency' ke baare mein hai. Hum hardware ko itna intelligent bana rahe hain ki wo user ki needs ko anticipate kar sake.</p>
        <p>Established in early 2024, Supreme Hybrid Labs has pushed the boundaries of semiconductor industry. With the V1000, we are introducing the world's first chip that adapts its physical routing based on the software it's running.</p>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h2 className="text-4xl font-bold orbitron mb-12">SECURITY_PROTOCOL</h2>
    <div className="bg-[#0A0A0A] p-10 border border-white/5 rounded-3xl space-y-8 text-zinc-400">
      <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
        <h4 className="orbitron text-cyan-400 text-xs mb-2 tracking-widest">ADSENSE_VERIFICATION</h4>
        <p className="text-xl font-mono text-white">ca-pub-4743383342348497</p>
      </div>
      <p>Supreme V1000 operates on a 'Zero-Data' policy. We utilize end-to-end 256-bit encryption for all neural logs. Your biological identifiers and personal browsing habits are never stored on central servers.</p>
      <p>This website uses Google AdSense to serve advertisements. Google uses cookies to serve ads based on a user's prior visits. You can opt out of personalized advertising by visiting Ads Settings.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-6 py-40 text-center">
    <div className="relative inline-block p-20 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-[60px] overflow-hidden group">
      <div className="absolute inset-0 bg-cyan-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      <h2 className="text-4xl font-bold orbitron mb-8 relative">SECURE_PORTAL</h2>
      <p className="text-zinc-500 orbitron text-[10px] tracking-[0.5em] mb-8 relative uppercase">Direct Uplink Active</p>
      <a href="mailto:aisahabalive@gmail.com" className="text-3xl md:text-5xl font-black orbitron text-white hover:text-cyan-400 transition-all relative break-all">
        aisahabalive@gmail.com
      </a>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020202] text-white selection:bg-cyan-500 selection:text-black">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex justify-between items-center">
          <Link to="/" className="orbitron font-black text-2xl tracking-tighter glow-text">V1000_SUPREME</Link>
          <div className="hidden md:flex gap-10 text-[10px] orbitron font-bold tracking-[0.3em] uppercase">
            <Link to="/articles" className="hover:text-cyan-400 transition">Research</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">Mission</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Security</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Portal</Link>
          </div>
        </nav>

        {/* Routes */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 mt-20 text-center">
          <div className="orbitron text-[9px] tracking-[0.6em] text-zinc-600 uppercase">
            © 2026 Supreme Hybrid Corporation // All Rights Reserved
          </div>
        </footer>

      </div>
    </Router>
  );
}
