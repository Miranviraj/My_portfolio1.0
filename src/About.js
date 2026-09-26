import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePicture from './Images/profile.png';
import './About.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    // Infinite Marquee
    gsap.to('.marquee-text', {
      xPercent: -50,
      ease: 'none',
      duration: 15,
      repeat: -1
    });

    // Parallax effect on image
    gsap.to('.about-image', {
      yPercent: 15,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-image-wrapper",
        start: "top bottom", 
        end: "bottom top",
        scrub: true
      }
    });

    // Staggered reveal for text elements
    gsap.fromTo('.reveal-text', 
      { y: 50, opacity: 0, rotateX: -30 },
      { 
        y: 0, opacity: 1, rotateX: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 75%',
        }
      }
    );

    // Magnetic Skills Stagger
    gsap.fromTo('.skill-tag', 
      { scale: 0, opacity: 0, rotation: 10 },
      { 
        scale: 1, opacity: 1, rotation: 0,
        duration: 0.8, 
        stagger: 0.05, 
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 85%',
        }
      }
    );
  }, { scope: containerRef });

  const skills = [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Flutter", 
    "Dart", "Java", "Spring Boot", "PHP", "Laravel", "Node.js", 
    "Express", "MongoDB", "MySQL", "Tailwind CSS", "GSAP"
  ];

  const handleMagnetic = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(el, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMagneticLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  return (
    <div className="about-section container" ref={containerRef}>
      <div className="marquee-container">
        <div className="marquee-text">
          FULL STACK DEVELOPER • CREATIVE CODER • SOFTWARE ENGINEER • UI/UX ENTHUSIAST • FULL STACK DEVELOPER • CREATIVE CODER • SOFTWARE ENGINEER • UI/UX ENTHUSIAST •
        </div>
      </div>
      
      <div className="about-grid">
        
        <div className="about-visual">
          <div className="about-image-wrapper interactive">
            <div className="image-reveal-mask"></div>
            <img src={profilePicture} alt="Profile" className="about-image" />
            <div className="about-image-overlay"></div>
          </div>
          <div className="experience-badge glass">
            <span className="years text-accent-gradient">3+</span>
            <span className="exp-text">Years of<br/>Experience</span>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title text-gradient reveal-text">About Me</h2>
          <h3 className="about-subtitle reveal-text">Crafting digital experiences with passion & precision.</h3>
          
          <div className="about-paragraphs">
            <p className="reveal-text">
              I am a passionate Full-Stack Developer with a deep love for building intuitive, 
              scalable, and high-performance applications. I thrive in environments where I can 
              bridge the gap between design and engineering, combining my technical expertise 
              with an eye for aesthetics.
            </p>
            <p className="reveal-text">
              Over the years, I've worked across various modern technology stacks, ranging from 
              front-end frameworks like React and Flutter to robust back-end systems using Node.js, 
              Java, and PHP. My goal is to build products that not only work flawlessly but provide 
              a memorable user experience.
            </p>
          </div>
          
          <div className="skills-section reveal-text">
            <h4 className="skills-title">My Tech Stack</h4>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-tag glass interactive"
                  onMouseMove={handleMagnetic}
                  onMouseLeave={handleMagneticLeave}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
