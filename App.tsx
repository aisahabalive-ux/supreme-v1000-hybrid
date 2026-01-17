import React, { useState } from 'react';
// Extension .ts lagana yahan sabse zaroori hai
import { HybridSystemData, NexusState } from './types.ts'; 

function App() {
  const [systemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <h1 style={{ borderBottom: '2px solid #0f0' }}>🚀 NEXUS V1000 HYBRID</h1>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #333' }}>
        <p><strong>SYSTEM STATUS:</strong> {systemData.status}</p>
        <p><strong>ENGINE:</strong> {systemData.engine}</p>
        <p><strong>VERSION:</strong> {systemData.version}</p>
        <p><strong>LAST SYNC:</strong> {systemData.lastSync}</p>
      </div>
    </div>
  );
}

export default App;
