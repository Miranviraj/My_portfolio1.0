import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

gsap.registerPlugin(useGSAP);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.section-header', 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    
    gsap.fromTo('.project-card', 
      { y: 80, opacity: 0, rotateX: 20, scale: 0.9 },
      {
        y: 0, opacity: 1, rotateX: 0, scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: containerRef });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set variables for the CSS spotlight effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--mouse-x', `-1000px`); // hide spotlight
    card.style.setProperty('--mouse-y', `-1000px`);
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)'
    });
  };

  const projectCategories = [
    { title: 'React Projects', path: '/RReact', icon: faReact, color: '#61DAFB', span: 2 },
    { title: 'Flutter Projects', path: '/Flutter', icon: faFlutter, color: '#02569B', span: 1 },
    { title: 'Java Projects', path: '/JavaProjects', icon: faJava, color: '#f89820', span: 1 },
    { title: 'HTML Projects', path: '/Html', icon: faHtml5, color: '#E34F26', span: 1 },
    { title: 'PHP Projects', path: '/Php', icon: faPhp, color: '#777BB4', span: 1 }
  ];

  return (
    <div className="projects-section container" ref={containerRef}>
      <div className="section-header">
        <h2 className="section-title text-gradient">My Expertise</h2>
        <p className="section-subtitle">Explore my projects categorized by technology.</p>
      </div>

      <div className="bento-grid">
        {projectCategories.map((cat, index) => (
          <Link 
            to={cat.path} 
            key={index} 
            className={`project-card glass span-${cat.span}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-content">
              <FontAwesomeIcon icon={cat.icon} className="card-icon" style={{ color: cat.color }} />
              <h3 className="card-title">{cat.title}</h3>
              <div className="card-hover-indicator">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
