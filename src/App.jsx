import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';  // Home page with the 3D scene
import About from './components/About';  // About page
import Contact from './components/Contact';  // Contact page
import SignUp from './components/SignUp';  // Sign Up page
import Awards from './components/Awards';  // Awards page
import './App.css';  // Importing global styles including font

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page with the 3D scene */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;


