import React, { useState } from 'react';
// Yahan extension (.ts) nahi hona chahiye
import { HybridSystemData, NexusState } from './types'; 

function App() {
  const [systemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <h1>🚀 NEXUS V1000</h1>
      <p>STATUS: {systemData.status}</p>
      <p>ENGINE: {systemData.engine}</p>
    </div>
  );
}

export default App;         
