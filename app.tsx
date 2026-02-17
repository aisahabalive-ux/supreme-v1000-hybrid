import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Apne components import karein

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
