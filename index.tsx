import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Element ko fetch karein
const rootElement = document.getElementById('root');

// 2. Check karein ki element null toh nahi hai (Safety Check)
if (!rootElement) {
  throw new Error("Failed to find the root element. Check your index.html");
}

// 3. Root create karein aur render karein
// 'as HTMLElement' likhne se TypeScript error nahi dega
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
