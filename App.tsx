import React, { useState } from 'react';
// Yahan .ts extension lagana bahut zaruri hai
import { HybridSystemData, NexusState } from './types.ts'; 

function App() {
  const [systemData] = useState<HybridSystemData>({
    status: "Infinite Hybrid Active",
    engine: "V1000 Supreme Sovereign",
    version: "Nexus-Core v1.0",
    lastSync: new Date().toLocaleString()
  });

  return (
    <div style={{ backgroundColor: '#000', color: '#0f0', minHeight: '100vh', padding: '20px' }}>
      <h1>NEXUS V1000 HYBRID</h1>
      <div style={{ border: '1px solid #0f0', padding: '10px' }}>
        <p><strong>SYSTEM STATUS:</strong> {systemData.status}</p>
        <p><strong>ENGINE TYPE:</strong> {systemData.engine}</p>
        <p><strong>LAST SYNC:</strong> {systemData.lastSync}</p>
      </div>
    </div>
  );
}

export default App;
