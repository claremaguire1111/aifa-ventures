import React, { useState } from 'react';
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
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ThreeDScene = () => {
    const { scene } = useGLTF('/models/scene.gltf');
    return (
      <Canvas
        camera={{ position: [-9.662, 1.661, -1.543], fov: 50 }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2 }}
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
      {/* Header Section */}
      <header className="header">
        <div className="logo">AIFA Ventures</div>
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

      {/* Section 1: About AIFA Ventures */}
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

      {/* Section 2: About AIFA Ventures Description */}
      <motion.section
        className="about-description-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ backgroundColor: '#ffffff', padding: '100px 80px' }}
      >
        <div className="text-content">
          {/* Header with updated style */}
          <h2 className="section-header">A positive future for online entertainment</h2>
          <p>
            At AIFA Ventures, we are dedicated to building a positive future for culture and technology. We believe in
            the transformative power of the arts and entertainment, and we are passionate about supporting the creators,
            innovators, and visionaries who shape our world. By nurturing pioneering projects and groundbreaking talent,
            we aim to empower the next generation of cultural and technological leaders.
          </p>
        </div>
      </motion.section>

{/* Section 3: Awards */}
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

    {/* Awards Image Grid */}
    <div className="awards-grid">
      <div className="award-item">
        <img src="/images/aifa_image_3.JPG" alt="Award Ceremony" className="award-image" />
      </div>
      <div className="award-item">
        <img src="/images/aifa_image_1.JPG" alt="Award Winner" className="award-image" />
      </div>
      <div className="award-item">
        <img src="/images/aifa_image_2.JPG" alt="Award 3" className="award-image" />
      </div>
      <div className="award-item">
        <img src="/images/aifa_image_4.JPG" alt="Award 4" className="award-image" />
      </div>
    </div>
  </div>
</motion.section>




      {/* Section 4: Recent Partnerships and Events */}
      <motion.section
        className="partnerships-section"
        id="partnerships"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ backgroundColor: '#000', color: '#fff', padding: '100px 80px' }}
      >
        <h1>Recent Partnerships and Events</h1>
        <div className="partnership">
          <h2>Sotheby's Institute</h2>
          <p>We partnered with Sotheby's to provide insights on the intersection of art and technology, fostering new opportunities for creators and innovators in the cultural space.</p>
          <img src="/images/aifa-web-12.png" alt="Sotheby's Institute Partnership" />
        </div>

        <div className="partnership">
          <h2>ASVOFF Fashion and Film Festival</h2>
          <p>Fashion icon Diane Pernet announced Michèle Lamy as an honoree, celebrating her contributions to the world of fashion and creativity at the ASVOFF Festival.</p>
          <img src="/images/aifa-web-12.png" alt="ASVOFF Festival" />
        </div>

        <div className="partnership">
          <h2>Buckingham Palace</h2>
          <p>AIFA Co-Founder Leo Crane represented us at Buckingham Palace's Royal Garden Party, celebrating the contributions of leaders in the UK creative industries.</p>
          <img src="/images/aifa-web-12.png" alt="Buckingham Palace Event" />
        </div>
      </motion.section>

      {/* Section 5: Services */}
      <motion.section
        className="services-section"
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ backgroundColor: '#fff', color: '#000', padding: '100px 80px' }}
      >
        <h1>Services</h1>
        <div className="services-grid">
          <div className="service-item">
            <h2>Brand Strategy</h2>
            <p>Advising at the intersection of entertainment and technology, we help you and your company scale with the latest trends and innovations.</p>
          </div>
          <div className="service-item">
            <h2>Creative Strategy</h2>
            <p>Consulting and advisory in the worlds of arts, fashion, music, tech, and entertainment.</p>
          </div>
          <div className="service-item">
            <h2>Event Activations</h2>
            <p>Creating unique events at the heart of technology and culture.</p>
          </div>
          <div className="service-item">
            <h2>Advisors</h2>
            <p>Advising startups and brands on the latest technology and trends in consumer markets.</p>
          </div>
          <div className="service-item">
            <h2>Creative Consulting</h2>
            <p>Producing and directing with the future in mind, elevating your goals with a fresh perspective on culture and creativity via our bespoke consultancy.</p>
          </div>
        </div>
      </motion.section>

      {/* Section 6: Brands Carousel */}
      <motion.section
        className="brands-section"
        id="brands"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ backgroundColor: '#000', color: '#fff', padding: '50px 80px' }}
      >
        <h1>Brands We've Worked With</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          infinite
          keyBoardControl
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
        >
          <img src="/images/brand1.png" alt="Brand 1" />
          <img src="/images/brand2.png" alt="Brand 2" />
          <img src="/images/brand3.png" alt="Brand 3" />
        </Carousel>
      </motion.section>

      {/* Section 7: Sign Up with 3D Scene */}
      <motion.section
        className="signup-section"
        id="signup"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ position: 'relative', padding: '100px 80px', overflow: 'hidden' }}
      >
        <div className="text-content">
          <h1>Sign Up</h1>
          <p>We are on a mission to support the arts, including through our weekly newsletter that shares creator grants, work, and opportunities. Stay informed and inspired by signing up to receive the latest updates and resources directly to your inbox.</p>
          <form action="https://formspree.io/f/mnnqqvqd" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="three-d-container" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <ThreeDScene />
        </div>
      </motion.section>

      {/* Section 8: Combined Contact Us and Footer */}
      <motion.section
        className="contact-footer-section"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{ backgroundColor: '#000', color: '#fff', padding: '50px', borderRadius: '20px', border: '5px solid var(--black)', margin: '40px auto', width: '80%' }}
      >
        <div className="text-content">
          <h1>Contact Us</h1>
          <p>For further inquiries, please reach out using the form below or through our social channels.</p>
          <form action="https://formspree.io/f/mdkoozod" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <nav>
            <a href="https://www.linkedin.com/company/aifa-ventures/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="https://x.com/aifilmacademy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="https://www.instagram.com/aifilm.academy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </nav>
          <p>© AIFA Ventures 2024</p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
