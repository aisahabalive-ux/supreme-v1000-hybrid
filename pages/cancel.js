export default function Cancel() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#dc3545' }}>❌ Payment Cancelled</h1>
      <p>Aapne payment cancel kar di hai. Koi paisa nahi kata gaya.</p>
      <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  );
}
  
