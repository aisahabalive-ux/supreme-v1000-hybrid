import React, { useState, useEffect } from 'react';

export default function App() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Live Clock Effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#000', color: '#0f0', minHeight: '100vh', 
      fontFamily: 'monospace', display: 'flex', flexDirection: 'column', padding: '20px' 
    }}>
      
      {!showPolicy ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ border: '2px solid #0f0', padding: '40px', borderRadius: '15px', boxShadow: '0 0 15px #0f0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀 NEXUS CORE V1000</h1>
            <p style={{ color: '#0a0' }}>HYBRID CHIP ARCHITECTURE ACTIVE</p>
            <hr style={{ borderColor: '#0f0', margin: '20px 0' }} />
            
            <div style={{ fontSize: '1.2rem', textAlign: 'left' }}>
              <p>● SYSTEM STATUS: <span style={{color: '#fff'}}>ONLINE</span></p>
              <p>● ENGINE: <span style={{color: '#fff'}}>SOVEREIGN AI</span></p>
              <p>● CURRENT TIME: <span style={{color: '#fff'}}>{time}</span></p>
              <p>● SECURITY: <span style={{color: '#fff'}}>ENCRYPTED</span></p>
            </div>
          </div>

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
            <button onClick={() => setShowPolicy(true)} style={{ background: 'none', color: '#0f0', border: '1px solid #0f0', padding: '10px 20px', cursor: 'pointer' }}>
              Legal Policy
            </button>
            <a href="https://www.google.com/adsense" target="_blank" style={{ textDecoration: 'none', color: '#000', backgroundColor: '#0f0', padding: '10px 20px', fontWeight: 'bold' }}>
              AdSense Setup
            </a>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button onClick={() => setShowPolicy(false)} style={{ color: '#0f0', background: 'none', border: '1px solid #0f0', padding: '5px 15px', marginBottom: '20px' }}>← BACK TO CORE</button>
          <h2>PRIVACY POLICY & TERMS</h2>
          <p>This hybrid interface provides real-time system monitoring. We do not store user data. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</p>
          <p>For inquiries: support@supreme-v1000-hybrid.vercel.app</p>
        </div>
      )}

      <footer style={{ textAlign: 'center', fontSize: '0.8rem', opacity: '0.6', padding: '20px' }}>
        DEPLOYED ON VERCEL & NETLIFY | VERSION 2.0.1
      </footer>
    </div>
  );
}
 
