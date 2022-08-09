import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import QuotesPage from './components/QuotesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
