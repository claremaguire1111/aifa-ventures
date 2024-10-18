// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import AIPage from './components/AIPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<AIPage />} />
    </Routes>
  );
};

export default App;
