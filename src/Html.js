import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubProject.css';

export default function Html() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.subproject-header', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
    gsap.fromTo('.subproject-card', {
      y: 80,
      opacity: 0,
      rotateX: 15
    }, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.1
    });
  }, { scope: containerRef });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--mouse-x', `-1000px`);
    card.style.setProperty('--mouse-y', `-1000px`);
  };

  return (
    <div className="subproject-section container" ref={containerRef}>
      <div className="subproject-header">
        <h2 className="subproject-title text-gradient">
          HTML Projects <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26' }} />
        </h2>
      </div>

      <div className="subproject-grid">
        <a 
          href="https://github.com/Miranviraj/Pet_care" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="subproject-card glass interactive"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="subproject-card-title">
            Website for Pet care Center <FontAwesomeIcon icon={faPaw} />
          </h3>
          <div className="subproject-card-desc">
            <p>Developed a responsive and user-friendly website for a pet care center including services details, facilities, and contact details.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
