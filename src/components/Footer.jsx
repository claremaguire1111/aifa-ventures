import React from 'react';
import './Footer.css';
// Font Awesome for React (if installed via npm)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <p>© AIFA Ventures 2024</p>
      <nav>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/aifa-ventures/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        {/* Twitter Icon */}
        <a
          href="https://x.com/aifilmacademy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/aifilm.academy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
