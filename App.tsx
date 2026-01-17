import React, { useState } from 'react';
// Humne import path ko ekdum simple rakha hai
import { HybridSystemData } from './types'; 

function App() {
  const [data] = useState<HybridSystemData>({
    status: "SYSTEM ONLINE",
    engine: "V1000 SOVEREIGN",
    version: "1.0.0",
    lastSync: new Date().toLocaleTimeString()
  });

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#0f0', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      <div style={{ border: '1px solid #0f0', padding: '20px' }}>
        <h1>NEXUS CORE</h1>
        <p>STATUS: {data.status}</p>
        <p>ENGINE: {data.engine}</p>
        <p>TIME: {data.lastSync}</p>
      </div>
    </div>
  );
}

export default App;  
   
