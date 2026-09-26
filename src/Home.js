import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import profilePicture from './Images/profile.png';
import './Home.css';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });

    // Magnetic effect on the image
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    if (imageWrapper) {
      const rect = imageWrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = (e.clientX - centerX) / 20;
      const distY = (e.clientY - centerY) / 20;

      gsap.to(imageWrapper, {
        x: distX,
        y: distY,
        rotateX: -distY / 2,
        rotateY: distX / 2,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeaveGlobal = () => {
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    if (imageWrapper) {
      gsap.to(imageWrapper, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background Orbs Floating
    gsap.to('.glow-orb', {
      y: 'random(-50, 50)',
      x: 'random(-50, 50)',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // Custom Scramble Effect
    const chars = '!<>-_\\\\/[]{}—=+*^?#________';
    const text = 'FULL-STACK DEVELOPER';
    let frame = 0;
    const scrambleObj = { value: 0 };

    tl.to(scrambleObj, {
      value: text.length,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        if (subtitleRef.current) {
          const currentLength = Math.floor(scrambleObj.value);
          let scrambled = text.substring(0, currentLength);
          for (let i = currentLength; i < text.length; i++) {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
          subtitleRef.current.innerText = scrambled;
        }
      }
    });

    // Hero Text Entrance
    tl.fromTo('.hero-title-line',
      { y: 150, opacity: 0, rotateZ: 5 },
      { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', clipPath: 'inset(0% 0% 0% 0%)' },
      '-=1'
    )
      .fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo('.btn-group',
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)' },
        '-=0.8'
      )
      .fromTo('.hero-image-wrapper',
        { scale: 0.8, opacity: 0, rotation: -10, y: 100 },
        { scale: 1, opacity: 1, rotation: 0, y: 0, duration: 1.5, ease: 'elastic.out(1, 0.7)' },
        '-=1.2'
      )
      .fromTo('.floating-badge',
        { scale: 0, opacity: 0, rotation: 45 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.2, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=1'
      )
      .fromTo('.scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );

    gsap.to('.badge-1', { y: -15, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.badge-2', { y: 15, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

  }, { scope: containerRef });

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <div className="home-container" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeaveGlobal}>
      <div
        className="interactive-bg"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(79, 70, 229, 0.25) 0%, transparent 60%)`
        }}
      ></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-subtitle">
            <span className="accent-dot"></span> <span ref={subtitleRef}></span>
          </div>

          <h1 className="hero-title">
            <div className="hero-title-line-wrapper">
              <span className="hero-title-line">Hi, I'm</span>
            </div>
            <div className="hero-title-line-wrapper">
              <span className="hero-title-line text-gradient">Miran Virajith</span>
            </div>
            <div className="hero-title-line-wrapper">
              <span className="hero-title-line text-stroke interactive">Devinda</span>
            </div>
          </h1>

          <p className="hero-description">
            A dedicated software engineer crafting cutting-edge, scalable applications
            that drive innovation and efficiency with a flair for web & mobile development.
          </p>

          <div className="btn-group">
            <button
              className="btn btn-primary interactive"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate('/projects')}
            >
              Explore Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button
              className="btn btn-secondary glass interactive"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper glass interactive">
            <img src={profilePicture} alt="Miran Virajith Devinda" className="hero-image" />
            <div className="image-overlay"></div>

            <div className="floating-badge badge-1 glass">
              <span className="badge-number">3+</span>
              <span className="badge-text">Years<br />Experience</span>
            </div>

            <div className="floating-badge badge-2 glass">
              <span className="badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </span>
              <span className="badge-text">Full Stack<br />Mastery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </div>
  );
}