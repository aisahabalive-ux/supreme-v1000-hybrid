import React from 'react';

// Simple interface taaki error na aaye
interface SystemData {
  status: string;
  engine: string;
}

function App() {
  const data: SystemData = {
    status: "SYSTEM ONLINE",
    engine: "V1000 SOVEREIGN"
  };

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#0f0', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'monospace' 
    }}>
      <div style={{ border: '2px solid #0f0', padding: '20px', textAlign: 'center' }}>
        <h1>🚀 NEXUS V1000</h1>
        <p>STATUS: {data.status}</p>
        <p>ENGINE: {data.engine}</p>
      </div>
    </div>
  );
}

export default App;
 
