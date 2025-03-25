import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav className={isMobile ? "nav-mobile" : "nav"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
