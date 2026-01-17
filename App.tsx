import React, { useState } from 'react';
// Yahan humne extension hata diya hai, Vite ise apne aap dhund lega
import { HybridSystemData, NexusState } from './types'; 

function App() {
  const [systemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#0f0', 
      minHeight: '100vh', 
      padding: '20px', 
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        border: '2px solid #0f0', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 0 15px #0f0'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>🚀 SUPREME V1000</h1>
        <div style={{ fontSize: '1.2rem', lineHeight: '2' }}>
          <p><strong>SYSTEM:</strong> {systemData.status}</p>
          <p><strong>ENGINE:</strong> {systemData.engine}</p>
          <p><strong>CORE:</strong> {systemData.version}</p>
          <p><strong>SYNC:</strong> {systemData.lastSync}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
