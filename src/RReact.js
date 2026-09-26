import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faTshirt } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubProject.css';

export default function RReact() {
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
          React Projects <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB' }} />
        </h2>
      </div>

      <div className="subproject-grid">
        <a href="https://www.figma.com/design/ukjvjGtSQwOlBzApE2nEyD/Untitled?node-id=0-1&t=3qhys5u6h6NRwEnK-0" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Smart Apparel Management System (Designing phase) <FontAwesomeIcon icon={faTshirt} />
          </h3>
          <div className="subproject-card-desc">
            <p>We are currently developing an innovative AI-integrated web application as a group project to revolutionize the apparel industry. Built using React, this cutting-edge platform is designed to optimize operations with features like smart inventory management, real-time production tracking, AI-driven fabric cutting optimization, and an interactive t-shirt customization tool.</p>
            <p>Our solution empowers apparel companies to enhance efficiency, reduce waste, and embrace next-level customization. By seamlessly blending technology and fashion, we are shaping the future of smart apparel management.</p>
          </div>
          <div className="subproject-card-link">
            View on Figma <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>

        <a href="https://github.com/Miranviraj/My_portfolio1.0" target="_blank" rel="noopener noreferrer" className="subproject-card glass">
          <h3 className="subproject-card-title">
            Portfolio Website (This) <FontAwesomeIcon icon={faMedal} />
          </h3>
          <div className="subproject-card-desc">
            <p>This portfolio is a testament to creativity and technical prowess, showcasing a diverse array of skills and accomplishments. It features a clean, modern design with an intuitive layout that makes navigation a breeze.</p>
            <p>Interactive elements and responsive design ensure a seamless experience across all devices. Each section is thoughtfully organized, highlighting key achievements and expertise in a visually appealing manner. Whether you're exploring detailed descriptions or admiring the aesthetic presentation, this portfolio offers an engaging and professional glimpse into the creator's capabilities.</p>
          </div>
          <div className="subproject-card-link">
            View on GitHub <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>
  );
}
