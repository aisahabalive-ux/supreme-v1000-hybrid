import React from 'react';

// Sab kuch isi ek file mein hai, ab error nahi aayegi
interface SystemData {
  status: string;
  engine: string;
}

export default function App() {
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
      fontFamily: 'monospace',
      textAlign: 'center'
    }}>
      <div style={{ border: '2px solid #0f0', padding: '40px', borderRadius: '15px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>🚀 NEXUS V1000</h1>
        <hr style={{ borderColor: '#0f0' }} />
        <p style={{ fontSize: '1.5rem' }}>STATUS: {data.status}</p>
        <p style={{ fontSize: '1.5rem' }}>ENGINE: {data.engine}</p>
      </div>
    </div>
  );
}
 
