import React from 'react';
import './Footer.css';
import logoImg from './logo.png';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src={logoImg} alt="MVD Logo" style={{ height: '35px', width: 'auto' }} />
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Miran Virajith Devinda. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
