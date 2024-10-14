import React from 'react';
import ThreeDScene from './ThreeDScene'; // Assuming you've placed your ThreeDScene component here

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ height: '50px', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', zIndex: 20, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
        <h1>AIFA Ventures</h1>
        <nav>
          <a href="#about" style={{ marginRight: '20px' }}>About</a>
          <a href="#contact" style={{ marginRight: '20px' }}>Contact</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>

      {/* Main 3D Scene (The Canvas area) */}
      <div style={{ flexGrow: 1, position: 'relative', zIndex: 0 }}>
        <ThreeDScene />
      </div>

      {/* Footer */}
      <footer style={{ height: '50px', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', zIndex: 20, boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
        <p>© AIFA Ventures 2024</p>
        <nav>
          <a href="#privacy" style={{ marginRight: '20px' }}>Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;


