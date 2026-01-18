import { loadStripe } from '@stripe/stripe-js';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) 
  : null;

export default function PaymentButton() {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', { method: 'POST' });
    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId });
  };

  // Agar Key nahi hai toh Coming Soon dikhayega, key milte hi Pay Now
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Chip Design Service Model</h3>
      {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? (
        <button 
          onClick={handleCheckout}
          style={{ backgroundColor: '#0070f3', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Pay & Access Tool
        </button>
      ) : (
        <button disabled style={{ backgroundColor: '#ccc', color: '#666', padding: '10px 20px', borderRadius: '5px' }}>
          Banking Service: Coming Soon
        </button>
      )}
      <p style={{ fontSize: '12px', marginTop: '10px' }}>
        Status: {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? '✅ Active' : '⏳ Waiting for Banking Setup'}
      </p>
    </div>
  );
        }
 
