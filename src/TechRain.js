import React, { useEffect, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faHtml5, 
  faFlutter, 
  faJava, 
  faPhp, 
  faNodeJs, 
  faCss3Alt, 
  faJs, 
  faFigma, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import './TechRain.css';

export default function TechRain() {
  const containerRef = useRef(null);

  const icons = useMemo(() => [
    { icon: faReact, color: '#61DAFB' },
    { icon: faHtml5, color: '#E34F26' },
    { icon: faFlutter, color: '#02569B' },
    { icon: faJava, color: '#f89820' },
    { icon: faPhp, color: '#777BB4' },
    { icon: faNodeJs, color: '#339933' },
    { icon: faCss3Alt, color: '#1572B6' },
    { icon: faJs, color: '#F7DF1E' },
    { icon: faFigma, color: '#F24E1E' },
    { icon: faGithub, color: 'var(--text-secondary)' }
  ], []);

  const droplets = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        ...randomIcon,
        left: `${Math.random() * 100}vw`,
        animationDuration: 15 + Math.random() * 25, 
        delay: Math.random() * -30, 
        scale: 0.6 + Math.random() * 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 360
      };
    });
  }, [icons]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      droplets.forEach((drop, i) => {
        gsap.fromTo(`.drop-${i}`, 
          { y: '-10vh', rotation: drop.rotation },
          { 
            y: '110vh', 
            rotation: drop.rotation + drop.rotationSpeed,
            duration: drop.animationDuration, 
            ease: 'none', 
            repeat: -1,
            delay: drop.delay 
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, [droplets]);

  return (
    <div className="tech-rain-container" ref={containerRef}>
      {droplets.map((drop, i) => (
        <div 
          key={drop.id} 
          className={`tech-drop drop-${i}`}
          style={{
            left: drop.left,
            transform: `scale(${drop.scale})`,
            color: drop.color,
          }}
        >
          <FontAwesomeIcon icon={drop.icon} />
        </div>
      ))}
    </div>
  );
}
