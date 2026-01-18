export default function Success() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#28a745' }}>✅ Payment Successful!</h1>
      <h2>Welcome to Infinite Chip Design Service</h2>
      <p>Aapka account ab activate ho gaya hai. Aap saare banking tools use kar sakte hain.</p>
      <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
        Go to Home
      </button>
    </div>
  );
  }
 
