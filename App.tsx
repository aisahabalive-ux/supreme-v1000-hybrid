import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import CommercialROI from './components/CommercialROI';
import InfiniteGateway from './components/InfiniteGateway';
import NotificationCenter from './components/NotificationCenter';
import SovereignGateway from './components/SovereignGateway';
import HybridServiceNodes from './components/HybridServiceNodes';
import RTLSynthesisWorkbench from './components/CreativeStudio';
import FoundryDiagnostics from './components/IntelligenceHub'; 
import LiveCommunication from './components/LiveCommunication';
import GlobalImpact from './components/GlobalImpact';
import RealVerification from './components/RealVerification';
import SupremeSecurity from './components/SupremeSecurity';
import { autonomousNexus } from './services/autonomous';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string>(ViewType.GATEWAY);
  const [booting, setBooting] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(localStorage.getItem('NEXUS_V100_VERIFIED') === 'true');

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1000);
    const upgradeInterval = setInterval(() => {
      autonomousNexus.triggerSelfInfiniteUpgrade();
    }, 600000); // 10 min auto-evolution
    return () => {
      clearTimeout(timer);
      clearInterval(upgradeInterval);
    };
  }, []);

  if (booting) return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center space-y-6">
      <div className="w-20 h-20 border-[10px] border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin"></div>
      <p className="text-emerald-500 font-black text-[10px] tracking-[1em] animate-pulse uppercase italic">NEXUS_SYNCING_INFINITE...</p>
    </div>
  );
  
  if (!isUnlocked) return <SovereignGateway onUnlock={() => setIsUnlocked(true)} />;

  const renderView = () => {
    switch (activeView) {
      case ViewType.GATEWAY: return <InfiniteGateway />;
      case 'LIVE': return <LiveCommunication />;
      case 'DIAGNOSTICS': return <FoundryDiagnostics />; 
      case ViewType.PROFIT: return <CommercialROI />;
      case ViewType.SYNTHESIS: return <RTLSynthesisWorkbench />;
      case 'IMPACT': return <GlobalImpact />;
      case 'VERIFY': return <RealVerification />;
      case 'SECURITY': return <SupremeSecurity />;
      case 'LOGS': return <NotificationCenter />;
      case 'NODES': return <HybridServiceNodes />;
      default: return <InfiniteGateway />;
    }
  };

  const navItems = [
    { id: ViewType.GATEWAY, icon: '🏠', label: 'HOME' },
    { id: 'LIVE', icon: '🎙️', label: 'VOICE' },
    { id: 'DIAGNOSTICS', icon: '📡', label: 'PULSE' }, 
    { id: ViewType.PROFIT, icon: '💰', label: 'WEALTH' },
    { id: 'LOGS', icon: '🔔', label: 'ALERTS' }
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-black text-white font-mono overflow-hidden">
      <header className="h-16 border-b border-emerald-500/10 flex items-center justify-between px-6 bg-black/80 backdrop-blur-3xl shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-widest uppercase text-white">SUPREME_HYBRID_ENGINE</span>
            <span className="text-[7px] text-emerald-500/60 font-black uppercase italic">INFINITE_UNLIMITED_V100</span>
          </div>
        </div>
        <div className="flex gap-2">
           <button onClick={() => setActiveView(ViewType.SYNTHESIS)} className="text-[8px] border border-emerald-500/20 px-3 py-1.5 rounded-full bg-emerald-500/5 text-emerald-500 font-black hover:bg-emerald-500 hover:text-black transition-all">SYNTHESIS</button>
           <button onClick={() => setActiveView('NODES')} className="text-[8px] border border-white/5 px-3 py-1.5 rounded-full bg-zinc-900 font-black hover:bg-white hover:text-black transition-all">NODES</button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto bg-[#020202]">{renderView()}</main>
      <nav className="h-20 bg-zinc-950 border-t border-emerald-500/5 flex items-center justify-around shrink-0 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        {navItems.map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setActiveView(tab.id)} 
            className={`flex flex-col items-center flex-1 transition-all duration-300 ${activeView === tab.id ? 'text-emerald-500 scale-110' : 'text-zinc-600'}`}
          >
            <span className="text-2xl mb-1">{tab.icon}</span>
            <span className="text-[8px] font-black uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
export default App;
