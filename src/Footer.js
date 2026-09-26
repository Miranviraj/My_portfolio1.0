import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="text-accent-gradient">M</span>V
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Miran Virajith Devinda. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
