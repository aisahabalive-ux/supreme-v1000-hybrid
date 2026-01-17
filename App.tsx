import React, { useState } from 'react';

export default function App() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <div style={{ 
      backgroundColor: '#000', color: '#0f0', minHeight: '100vh', 
      fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' 
    }}>
      
      {/* Main Dashboard */}
      {!showPolicy ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ border: '2px solid #0f0', padding: '40px', borderRadius: '15px' }}>
            <h1 style={{ fontSize: '2.5rem' }}>🚀 NEXUS V1000</h1>
            <hr style={{ borderColor: '#0f0' }} />
            <p style={{ fontSize: '1.2rem' }}>STATUS: SYSTEM ONLINE</p>
            <p style={{ fontSize: '1.2rem' }}>ENGINE: V1000 SOVEREIGN</p>
          </div>
          <button 
            onClick={() => setShowPolicy(true)}
            style={{ marginTop: '30px', background: 'none', color: '#0f0', border: '1px solid #0f0', cursor: 'pointer', padding: '10px' }}
          >
            View Privacy Policy & Terms
          </button>
        </div>
      ) : (
        /* Privacy Policy Page */
        <div style={{ maxWidth: '800px', textAlign: 'left', lineHeight: '1.6' }}>
          <button onClick={() => setShowPolicy(false)} style={{ color: '#0f0', background: 'none', border: '1px solid #0f0', marginBottom: '20px' }}>← Back</button>
          <h2>Privacy Policy & Terms of Service</h2>
          <p>Last Updated: January 2026</p>
          <p>Your privacy is important to us. This website does not collect any personal data from its visitors. We use Google AdSense to display advertisements, which may use cookies to serve ads based on your prior visits.</p>
          <h3>Terms of Use</h3>
          <p>By using the Nexus V1000 Dashboard, you agree to use it for informational purposes only. We are not responsible for any data inaccuracies.</p>
          <p>Contact: support@supreme-v1000-hybrid.vercel.app</p>
        </div>
      )}

      {/* Footer for AdSense */}
      <footer style={{ marginTop: 'auto', padding: '20px', fontSize: '0.8rem', opacity: '0.7' }}>
        © 2026 Nexus Core | Privacy Policy | Terms of Service
      </footer>
    </div>
  );
}
 
