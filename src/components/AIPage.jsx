import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import axios from 'axios';
import './AIPage.css';

// Use Vite's import.meta.env to access environment variables
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

console.log('OpenAI Key:', openaiApiKey);

const AIPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textInputAI, setTextInputAI] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const imageRefs = useRef([]);
  const cursorRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Generate AI text response with OpenAI
  const generateTextResponse = async () => {
    if (!textInputAI.trim()) return;

    const newChatEntry = { role: 'user', content: textInputAI };
    setChatHistory((prev) => [...prev, newChatEntry]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...chatHistory, newChatEntry],
          max_tokens: 150,
        },
        { headers: { Authorization: `Bearer ${openaiApiKey}` } }
      );

      const aiMessage = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
      };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating text:', error);
    }

    setTextInputAI('');
  };

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="ai-page">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>

      {/* AI Text Completion Section */}
      <motion.section className="ai-text-section">
        <h1>Ask your filmmaking questions here!</h1>
        <div className="chat-container">
          {chatHistory.map((entry, index) => (
            <div
              key={index}
              className={`chat-entry ${entry.role === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <p>{entry.content}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={textInputAI}
          onChange={(e) => setTextInputAI(e.target.value)}
          placeholder="Enter your message..."
          className="text-input"
        />
        <button onClick={generateTextResponse} className="ai-button">Send</button>
      </motion.section>

      {/* Header */}
      <header className="header">
        <Link to="/" className="logo">AIFA</Link>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#brands" onClick={toggleMenu}>Brands</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="#signup" onClick={toggleMenu}>Sign Up</a>
        </nav>
      </header>

      {/* Services Section */}
      <motion.section
        className="services-section"
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h1 className="services-heading parallax-image">Services</h1>
        <div className="services-grid">
          <div className="service-box">
            <h2>Brand Strategy</h2>
            <p>
              Advising at the intersection of entertainment and technology, we help
              you and your company scale with the latest trends and innovations.
            </p>
          </div>
          <div className="service-box">
            <h2>Creative Strategy</h2>
            <p>
              Consulting and advisory in the worlds of arts, fashion, music, tech, and
              entertainment.
            </p>
          </div>
          <div className="service-box">
            <h2>Event Activations</h2>
            <p>
              Creating unique events at the heart of technology and culture.
            </p>
          </div>
          <div className="service-box">
            <h2>Advisors</h2>
            <p>
              Advising startups and brands on the latest technology and trends in
              consumer markets.
            </p>
          </div>
          <div className="service-box">
            <h2>Creative Consulting</h2>
            <p>
              Producing and directing with the future in mind, elevating your goals
              with a fresh perspective on culture and creativity via our bespoke
              consultancy.
            </p>
          </div>
          <div className="service-box">
            <h2>Digital Transformation</h2>
            <p>
              Leading digital transformation initiatives to help companies embrace
              cutting-edge technology, innovation, and improve operational efficiency.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Brands Section */}
    <motion.section
  className="brands-section"
  id="brands"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }}
>
  <div className="moving-brands">
    <div className="brand-row">
      <img src="/partners/01_Galxe_B_White Full Logo.png" alt="Galxe" />
      <img src="/partners/BrightLogo-IconText-White.png" alt="BrightLogo" />
      <img src="/partners/Casa Nua 3 wh tr.png" alt="Casa Nua" />
      <img src="/partners/DressX lighter.png" alt="DressX" />
      <img src="/partners/Muse Frame wh text.png" alt="Muse Frame" />
      <img src="/partners/Non Fun Gerbils Wh tr.png" alt="Non Fun Gerbils" />
      <img src="/partners/object_subject_form_mark_wht.png" alt="Object Subject" />
      <img src="/partners/sedition logo wh long.png" alt="Sedition" />
      <img src="/partners/W3S-Light-Logo-x3 wh.png" alt="W3S" />
    </div>
  </div>
</motion.section>


      {/* Contact Section */}
      <motion.section
        className="contact-us-section"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <ul>
            <li><a href="mailto:aifa@aifilm.academy">aifa@aifilm.academy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#partnerships">Partnerships</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li><a href="https://www.instagram.com/aifilm.academy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://x.com/aifilmacademy" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            <li><a href="https://www.linkedin.com/company/aifa-ventures" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </motion.section>

      {/* Sign-Up Section */}
      <motion.section
        className="signup-section"
        id="signup"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="three-d-container">
          <Canvas
            camera={{ position: [-9.662, 1.661, -1.543], fov: 50 }}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
              backgroundImage: `url('/images/aifa_background_2.jpg')`,
              backgroundSize: 'cover',
            }}
            onCreated={({ camera }) => {
              camera.lookAt(0, 0, 0);
            }}
          >
            <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <primitive object={useGLTF('/models/scene.gltf').scene} />
            <Text
              position={[0, 2, 2.5]}
              fontSize={0.5}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
              rotation={[0, 4, 0]}
            >
              AIFA
            </Text>
          </Canvas>
        </div>

        <div className="signup-box">
          <h1>Sign Up</h1>
          <p>
            Welcome to our virtual office! Stay informed and inspired by signing up to receive the latest updates and resources directly to your inbox. Including creator grants, job offerings, interviews, and more.
          </p>
          <form action="https://formspree.io/f/mnnqqvqd" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </motion.section>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© AIFA 2024</p>
      </div>
    </div>
  );
};

export default AIPage;




