import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlutter } from '@fortawesome/free-brands-svg-icons';
import { faInstitution, faWalking, faBrain } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubProject.css';

export default function Flutter() {
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
          Flutter Projects <FontAwesomeIcon icon={faFlutter} style={{ color: '#02569B' }} />
        </h2>
      </div>

      <div className="subproject-grid">
        <a href="https://github.com/Miranviraj/Tution_management_system" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Tution Management Mobile Application <FontAwesomeIcon icon={faInstitution} />
          </h3>
          <div className="subproject-card-desc">
            <p>A Mobile application with using Flutter for better responsiveness and interactive user experience.</p>
            <p>System include Features to manage student details, Attendence details, Payment details and also feature For mesege sending (student reports).</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>

        <a href="https://github.com/Miranviraj/Employee_management_Mobile_App" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Employee Management System <FontAwesomeIcon icon={faWalking} />
          </h3>
          <div className="subproject-card-desc">
            <p>A Mobile application for Employee management (Registration, Admin dashboard, Collecting Feedbacks) with using Flutter for better responsiveness and interactive user experience.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>

        <a href="https://github.com/Miranviraj/Zencycle_mental_health_mobile_Application" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Zencycle - Mental Health and well being Mobile Application (Ongoing) <FontAwesomeIcon icon={faBrain} />
          </h3>
          <div className="subproject-card-desc">
            <p>A Mobile application for Mental Health and well being with using Flutter for better responsiveness and interactive user experience.</p>
            <p>System include Features to habit and mood tracking, personal jurnal, meditation, mind relaxing exercises.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
