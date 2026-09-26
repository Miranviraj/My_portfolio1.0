import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faCashRegister, faHotel } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubProject.css';

export default function JavaProjects() {
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
          Java Projects <FontAwesomeIcon icon={faJava} style={{ color: '#f89820' }} />
        </h2>
      </div>

      <div className="subproject-grid">
        <a 
          href="https://github.com/Miranviraj/hotelbooking-system--3.0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="subproject-card glass interactive"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="subproject-card-title">
            Hotel Booking System <FontAwesomeIcon icon={faHotel} />
          </h3>
          <div className="subproject-card-desc">
            <p>The project focuses on developing a user-friendly hotel booking system for Sandy Beach Hotel to automate room reservations, and meal plan customization, and streamline hotel operations.</p>
            <p>This project is done by using Java swing and SQL, additionally, I have added External Libraries for better UI components. It aims to enhance the guest experience with a seamless booking interface while improving efficiency for hotel staff through automation.</p>
            <p>Ensuring better operational performance and regulatory compliance.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>

        <a 
          href="https://github.com/Miranviraj/ATM_simulation_system_with_Acount_Creation_and_Login" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="subproject-card glass interactive"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="subproject-card-title">
            ATM Simulation System <FontAwesomeIcon icon={faCashRegister} />
          </h3>
          <div className="subproject-card-desc">
            <p>I have Created an ATM Simulation System, a sophisticated and user-friendly application designed to emulate the functionalities of a real-world ATM.</p>
            <p>Developed using Java and integrated with a SQL local database, this system offers a seamless banking experience through its intuitive Java Swing interface.</p>
            <p>Key features include effortless bank account creation, secure user login, detailed account statement viewing, and easy transaction handling such as deposits, withdrawals, and checking balance and statement.</p>
            <p>The aesthetically pleasing and highly functional interface ensures users can navigate through the system effortlessly, with interactive buttons, responsive design, and real-time visual feedback enhancing the overall user experience.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
