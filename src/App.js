import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import CalculatorPage from './pages/Calculator';
import QoutesPage from './pages/QoutesPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QoutesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
