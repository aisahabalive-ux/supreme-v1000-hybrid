import React, { useState, useEffect } from 'react';
// Extension .tsx likhna zaruri hai taaki Vercel ko file mil jaye
import { HybridSystemData, NexusState } from './types.ts'; 

function App() {
  const [systemData, setSystemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  const [nexus, setNexus] = useState<NexusState>({
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
        <h1>🚀 NEXUS HYBRID SYSTEM</h1>
      </header>

      <main>
        <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #333' }}>
          <h2>System Diagnostics</h2>
          <p><strong>Status:</strong> {systemData.status}</p>
          <p><strong>Engine:</strong> {systemData.engine}</p>
          <p><strong>Last Sync:</strong> {systemData.lastSync}</p>
        </section>

        <section style={{ padding: '15px', border: '1px solid #333' }}>
          <h2>Core Efficiency</h2>
          <p><strong>Active:</strong> {nexus.isActive ? "YES" : "NO"}</p>
          <p><strong>Efficiency:</strong> {nexus.efficiency}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
