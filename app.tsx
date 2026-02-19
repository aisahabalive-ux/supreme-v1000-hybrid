import React, { useState } from 'react';
import InfiniteGateway from './components/InfiniteGateway';
import SovereignCore from './components/SovereignCore';
import FileManager from './components/FileManager';
import UniversalBanking from './components/UniversalBanking';
import SupremeSecurity from './components/SupremeSecurity';

export default function App() {
  const [view, setView] = useState('GATEWAY');
  const render = () => {
    switch(view) {
      case 'GATEWAY': return <InfiniteGateway />;
      case 'CORE': return <SovereignCore />;
      case 'FILES': return <FileManager />;
      case 'BANKING': return <UniversalBanking />;
      case 'SECURITY': return <SupremeSecurity />;
      default: return <InfiniteGateway />;
    }
  };
  return <div className="bg-black min-h-screen text-white">{render()}</div>;
}
