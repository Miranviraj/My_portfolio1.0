import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePicture from './Images/profile2.png';
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
            <span className="exp-text">Years of<br />Experience</span>
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

          <div className="reveal-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <a 
              href="https://drive.google.com/file/d/1xG4Ne03RhlOlKM5R-zRclkwQ79160AMr/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary interactive"
              style={{ display: 'inline-flex', padding: '16px 32px', borderRadius: '50px', background: 'var(--accent)', color: '#fff', fontWeight: '600', alignItems: 'center', boxShadow: '0 4px 20px var(--accent-glow)' }}
            >
              Download My CV
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
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

          <div className="journey-section reveal-text">
            <h4 className="skills-title">Journey & Milestones</h4>
            <div className="journey-grid">

              <div className="journey-card glass">
                <div className="journey-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div className="journey-details">
                  <h5>Associate Software Engineer</h5>
                  <p className="journey-meta">VVH Solutions Pvt(Ltd) Piliyandala • Current</p>
                  <p className="journey-desc">Currently working as an Associate Software Engineer, building and maintaining scalable enterprise applications. My journey here includes:</p>
                  <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li><strong>6 Months</strong> as a Software Engineering Intern</li>
                    <li><strong>6 Months</strong> as a Trainee Associate Software Engineer</li>
                  </ul>
                </div>
              </div>

              <div className="journey-card glass">
                <div className="journey-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="journey-details">
                  <h5>BSc (Hons) Software Engineering</h5>
                  <p className="journey-meta">CINEC Campus Malabe • Undergrad</p>
                  <p className="journey-desc">Reading for my undergraduate degree(Final Year Student) with a strong foundation in software development, architecture, and testing.</p>
                </div>
              </div>

              <div className="journey-card glass">
                <div className="journey-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div className="journey-details">
                  <h5>Best Poster Presenter Medal</h5>
                  <p className="journey-meta">CIRS-2024 • Achievement</p>
                  <p className="journey-desc">Awarded the Best Poster Presenter Medal in recognition of outstanding research presentation and communication skills.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
