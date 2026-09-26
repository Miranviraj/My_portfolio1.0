import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubProject.css';

export default function Php() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.subproject-header', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
    gsap.fromTo('.subproject-card', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.1
    });
  }, { scope: containerRef });

  return (
    <div className="subproject-section container" ref={containerRef}>
      <div className="subproject-header">
        <h2 className="subproject-title text-gradient">
          PHP Projects <FontAwesomeIcon icon={faPhp} style={{ color: '#777BB4' }} />
        </h2>
      </div>

      <div className="subproject-grid">
        <a href="https://github.com/Miranviraj/TAVOLA-Table_reservation" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Restaurant Table Reservation System <FontAwesomeIcon icon={faHome} />
          </h3>
          <div className="subproject-card-desc">
            <p>Tavola v1.1 is a simple table reservation system created using PHP, providing a straightforward solution for table reservations. Whether it's a romantic dinner, business meeting, or casual get-together with friends, our platform allows you to reserve a table within seconds.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
