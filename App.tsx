import React, { useState } from 'react';
/**
 * DHAYAN DEIN: Yahan './types.ts' likhna bahut zaruri hai 
 * taaki Vercel ko file mil sake.
 */
import { HybridSystemData, NexusState } from './types.ts'; 

function App() {
  const [systemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  const [nexus] = useState<NexusState>({
    isActive: true,
    loadFactor: 0.85,
    efficiency: "99.9%"
  });

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#00ff41', 
      minHeight: '100vh', 
      padding: '20px', 
      fontFamily: 'monospace' 
    }}>
      <header style={{ borderBottom: '2px solid #00ff41', marginBottom: '20px' }}>
        <h1>🚀 SUPREME V1000 HYBRID</h1>
      </header>

      <main>
        <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #333' }}>
          <h2>System Status</h2>
          <p><strong>Current Mode:</strong> {systemData.status}</p>
          <p><strong>Engine Power:</strong> {systemData.engine}</p>
          <p><strong>Last Sync:</strong> {systemData.lastSync}</p>
        </div>

        <div style={{ padding: '15px', border: '1px solid #333' }}>
          <h2>Performance Metrics</h2>
          <p><strong>Nexus Core:</strong> {nexus.isActive ? "ONLINE" : "OFFLINE"}</p>
          <p><strong>Efficiency:</strong> {nexus.efficiency}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
