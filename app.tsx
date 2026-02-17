import React from 'react';
import { Shield, Zap, Activity, Globe } from 'lucide-react';

function App() {
  const stats = [
    { label: 'Uptime', val: '99.9%', icon: <Activity size={20}/> },
    { label: 'Latency', val: '0.02ms', icon: <Zap size={20}/> },
    { label: 'Encryption', val: 'RSA-4K', icon: <Shield size={20}/> },
    { label: 'Global Nodes', val: '14+', icon: <Globe size={20}/> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5 bg-black/60 backdrop-blur-xl p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-fill-transparent">
            SUPREME V1000
          </h1>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
            <a href="#" className="hover:text-cyan-400 transition">Core</a>
            <a href="#" className="hover:text-cyan-400 transition">Nodes</a>
            <a href="#" className="hover:text-cyan-400 transition">Security</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-500/30 rounded-full text-[10px] text-cyan-400 uppercase">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          Neural Link: Established
        </div>
        
        <h2 className="text-5xl md:text-8xl font-black mt-8 tracking-tighter leading-none">
          HYBRID <span className="text-cyan-400">NEURAL</span><br/>ARCH
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all group">
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{s.val}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

