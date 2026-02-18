import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple Router setup using the same sections as index.html
export default function App() {
  return (
    <Router>
      <div className="bg-[#050505] text-white">
        {/* Navigation logic yahan index.html wali hi rahegi */}
        <Routes>
          <Route path="/" element={<HomeContent />} />
          {/* React Router will handle these paths if user navigates via JS */}
        </Routes>
      </div>
    </Router>
  );
}

function HomeContent() {
  return (
    <div>
       {/* React automatically hooks into the #root div */}
       {/* User ko index.html wala content dikhta rahega jab tak React hydrate nahi hota */}
    </div>
  );
}
