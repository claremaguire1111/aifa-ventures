// src/components/SignUp.jsx
import React from 'react';
import './SignUp.css'; // Correctly import the CSS file

const SignUp = () => {
  return (
    <section id="signup" className="signup-section">
      <h2>Sign Up</h2>
      <p>Join our newsletter and stay updated!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
