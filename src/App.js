import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import JavaProjects from './JavaProjects';
import Html from './Html';
import Flutter from './Flutter';
import RReact from './RReact';
import Php from './Php';
import TechRain from './TechRain';
import './App.css';
import './Cursor.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0, ease: 'none' });
    };

    const onMouseEnter = () => cursor.classList.add('hovering');
    const onMouseLeave = () => cursor.classList.remove('hovering');

    window.addEventListener('mousemove', onMouseMove);
    
    // Add hover effect to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <TechRain />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/JavaProjects" element={<JavaProjects />} />
          <Route path="/Html" element={<Html />} />
          <Route path="/RReact" element={<RReact />} />
          <Route path="/Flutter" element={<Flutter />} />
          <Route path="/Php" element={<Php />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

