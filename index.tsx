import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Element ko fetch karein
const rootElement = document.getElementById('root');

// 2. Check karein ki element null toh nahi hai
if (!rootElement) {
  throw new Error("Failed to find the root element. Check your index.html");
}

// 3. Root create karein aur render karein
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
