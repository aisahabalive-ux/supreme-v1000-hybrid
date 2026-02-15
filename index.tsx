import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Yahan 'as HTMLElement' add karne se error chala jayega
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
