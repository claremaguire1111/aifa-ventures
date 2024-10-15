import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('#ffffff');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let newCursorColor = '#ffffff';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          if (backgroundColor === 'rgb(255, 255, 255)') {
            newCursorColor = '#000000';
          }
        }
      });

      setCursorColor(newCursorColor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const ThreeDScene = () => {
    const { scene } = useGLTF('/models/scene.gltf');
    return (
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
        <primitive object={scene} />
        <Text
          position={[0, 2, 2.5]}
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          rotation={[0, 4, 0]}
        >
          AIFA Ventures
        </Text>
      </Canvas>
    );
  };

  return (
    <div className="home-page">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          backgroundColor: cursorColor,
        }}
      ></div>

      <header className="header">
        <Link to="/" className="logo">AIFA Ventures</Link>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={toggleMenu}>Our Story</a>
          <a href="#awards" onClick={toggleMenu}>Awards</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#partnerships" onClick={toggleMenu}>Partnerships</a>
          <a href="#signup" onClick={toggleMenu}>Sign Up</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </header>

      <motion.section
        className="about-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src="/videos/7677235-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="overlay">
          <h1 className="hero-text">AIFA Ventures</h1>
          <h2 className="hero-subtext">Shaping today for a brighter tomorrow</h2>
        </div>
      </motion.section>

      <motion.section
        className="about-description-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="text-content">
          <h2 className="section-header">A positive future for online entertainment</h2>
          <p>
            At AIFA Ventures, we are dedicated to building a positive future for culture and technology. We believe in
            the transformative power of the arts, technology, and entertainment, and we are passionate about supporting the creators,
            innovators, and visionaries who shape our world. By nurturing pioneering projects and groundbreaking talent,
            we aim to empower the next generation of cultural and technological leaders.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="awards-section"
        id="awards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="awards-content">
          <h1 className="awards-heading">Awards</h1>
          <p className="awards-subtext">
            We empower creators, entrepreneurs, and the future of creativity and technology through our annual awards. Our first awards were held in Lisbon in 2024, celebrating outstanding achievements in arts and technology.
          </p>
          <div className="awards-grid">
            <div className="award-item">
              <img src="/images/aifa_image_3.JPG" alt="Award Ceremony" className="award-image" />
            </div>
            <div className="award-item">
              <img src="/images/aifa-web-13.jpg" alt="Award Winner" className="award-image" />
            </div>
            <div className="award-item">
              <img src="/images/aifa-web-14.jpg" alt="Award 3" className="award-image" />
            </div>
            <div className="award-item">
              <img src="/images/aifa_image_4.JPG" alt="Award 4" className="award-image" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="partnerships-section"
        id="partnerships"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="partnerships-content">
          <div className="text-content">
            <h1>Partnerships and Events</h1>
            <p>
              Our partnerships and events drive cultural innovation and support the
              arts. We have worked with renowned institutions and participated in
              significant industry events.
            </p>
            <p>
              From collaborating with Sotheby's Institute to being a part of the ASVOFF
              Fashion and Film Festival, we continue to support creativity and
              technology at the highest levels.
            </p>
          </div>
          <div className="video-box">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="partnership-video"
            >
              <source src="/videos/video-1-aifa.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="services-section"
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h1 className="services-heading">Services</h1>
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

      <motion.section
        className="brands-section"
        id="brands"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="moving-brands">
          <div className="brand-row first-row">
            <img src="/images/brand1.png" alt="Brand 1" />
            <img src="/images/brand2.png" alt="Brand 2" />
            <img src="/images/brand3.png" alt="Brand 3" />
            <img src="/images/brand4.png" alt="Brand 4" />
          </div>
          <div className="brand-row second-row">
            <img src="/images/brand5.png" alt="Brand 5" />
            <img src="/images/brand6.png" alt="Brand 6" />
            <img src="/images/brand7.png" alt="Brand 7" />
            <img src="/images/brand8.png" alt="Brand 8" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="contact-us-section"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
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
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">X (Twitter)</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="signup-section"
        id="signup"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="three-d-container">
          <ThreeDScene />
        </div>
        <div className="signup-box">
          <h1>Sign Up</h1>
          <p>Welcome to our virtual office! Stay informed and inspired by signing up to receive the latest updates and resources directly to your inbox. Including creator grants, job offerings, interviews and more.</p>
          <form action="https://formspree.io/f/mnnqqvqd" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </motion.section>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© AIFA Ventures 2024</p>
      </div>
    </div>
  );
};

export default Home;
