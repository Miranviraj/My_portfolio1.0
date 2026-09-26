import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Contact.css';

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.contact-wrapper',
      { y: 100, opacity: 0, rotateX: 10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo('.contact-header', 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.form-group', 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.contact-info-item', 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.8'
    );
    
    // Animate the background orb continuously
    gsap.to('.info-bg-orb', {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      scale: 'random(0.8, 1.2)',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // 3D subtle float for the whole wrapper on mouse move
    const wrapper = document.querySelector('.contact-wrapper');
    const handleWrapperMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30;
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      gsap.to(wrapper, { rotateY: x, rotateX: -y, duration: 0.5, ease: 'power2.out' });
    };
    const handleWrapperLeave = () => {
      gsap.to(wrapper, { rotateY: 0, rotateX: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
    };
    
    wrapper.addEventListener('mousemove', handleWrapperMove);
    wrapper.addEventListener('mouseleave', handleWrapperLeave);
    
    return () => {
      wrapper.removeEventListener('mousemove', handleWrapperMove);
      wrapper.removeEventListener('mouseleave', handleWrapperLeave);
    };
  }, { scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        btn.innerHTML = 'Message Sent! <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        btn.classList.add('success');
      }
    });
  };

  return (
    <div className="contact-section container" ref={containerRef}>
      <div className="contact-wrapper glass">
        
        <div className="contact-form-container">
          <div className="contact-header">
            <h2 className="section-title text-gradient">Let's Connect</h2>
            <p className="section-subtitle">Have a project in mind? Let's build something extraordinary together.</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
              <div className="input-border"></div>
            </div>
            
            <div className="form-group">
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
              <div className="input-border"></div>
            </div>
            
            <div className="form-group">
              <textarea id="message" required placeholder=" " rows="5"></textarea>
              <label htmlFor="message">Message</label>
              <div className="input-border"></div>
            </div>
            
            <div className="form-group">
              <button type="submit" className="submit-btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="contact-info">
          <div className="info-bg-orb"></div>
          
          <h3 className="info-title">Contact Information</h3>
          
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">miranvirajith@example.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">+1 (234) 567-890</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
