import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import profilePicture from "./Images/profile.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./App.css";

const HomeContainer = styled.div`
  display: flex;
  background: ${(p) => p.theme.HomeGradient};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: min(900px, 90%);
  text-align: center;
  overflow: hidden;
  border-radius: 20px;
  padding: 48px 32px;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
`;

const ProfilePicture = styled.img`
  width: 300px;
  height: 800px;
  object-fit: cover;
  filter: ${(p) => p.theme.dsColor};
  transform-origin: center;
  cursor: default;

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const PageCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ProfilePicContainer = styled.div`
  width: 300px;
  height: 800px;
  margin-top: 0px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.textColor};
  font-size: 44px;
  margin: 6px 0 0;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Segoe UI", Roboto, system-ui, -apple-system;

  span {
    display: inline-block;
    will-change: transform, opacity;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Sub = styled.h2`
  color: ${(p) => p.theme.textColor};
  font-size: 18px;
  margin: 8px 0;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: ${(p) => p.theme.textColor};
  max-width: 760px;
  margin: 6px 0;
  line-height: 1.45;
`;

const SlidingWordsContainer = styled.div`
  margin: 12px 0;
  height: 36px;
  overflow: hidden;
  position: relative;
  width: auto;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlidingWord = styled.div`
  font-size: 20px;
  background: ${(p) => p.theme.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: ${(p) => p.theme.buttonBackground};
  color: ${(p) => p.theme.buttonFontColor};
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transform-origin: center;
  outline: none;
`;

export default function Home({ isDarkMode, darkTheme, lightTheme }) {
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const buttonRefs = useRef([]);
  const wordRef = useRef(null);
  const indexRef = useRef(0);
  const words = ["Developer", "Designer", "Creator", "Engineer", "Problem Solver"];
  const swapIntervalRef = useRef(null);

  // helper to collect refs in arrays
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) refArray.current.push(el);
  };

  useEffect(() => {
    const headingEl = headingRef.current;
    const headingText = headingEl?.textContent?.trim() || "";
    if (headingEl) {
      headingEl.textContent = "";
      const chars = Array.from(headingText);
      chars.forEach((ch) => {
        const span = document.createElement("span");
        span.textContent = ch === " " ? "\u00A0" : ch;
        headingEl.appendChild(span);
      });
    }

    if (wordRef.current) {
      wordRef.current.textContent = words[0];
      const swapWord = () => {
        if (wordRef.current) {
          gsap.to(wordRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => {
              if (wordRef.current) {
                indexRef.current = (indexRef.current + 1) % words.length;
                wordRef.current.textContent = words[indexRef.current];
                gsap.fromTo(
                  wordRef.current,
                  { y: 20, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
                );
              }
            },
          });
        }
      };
      swapIntervalRef.current = setInterval(swapWord, 2200);
    }

    return () => {
      if (swapIntervalRef.current) clearInterval(swapIntervalRef.current);
      gsap.killTweensOf([
        profileRef.current,
        headingEl,
        ...paragraphRefs.current,
        ...buttonRefs.current,
        wordRef.current,
      ]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBtnEnter = (idx) => {
    const el = buttonRefs.current[idx];
    if (!el) return;
    gsap.to(el, { scale: 1.04, y: -4, duration: 0.15, ease: "power2.out" });
  };
  
  const handleBtnLeave = (idx) => {
    const el = buttonRefs.current[idx];
    if (!el) return;
    gsap.to(el, { scale: 1, y: 0, duration: 0.18, ease: "power2.out" });
  };

  // Select theme based on isDarkMode prop
  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <PageCenter>
        <ProfilePicContainer>
          <ProfilePicture ref={profileRef} src={profilePicture} alt="Profile" />
        </ProfilePicContainer>
        <HomeContainer>
          <Heading ref={headingRef}>Hi, I'm Miran Virajith Devinda</Heading>

          <Sub ref={addToRefs(paragraphRefs)}>Full-Stack Developer</Sub>

          <Paragraph ref={addToRefs(paragraphRefs)}>
            A dedicated software engineer with a flair for web and mobile applications development.
          </Paragraph>

          <Paragraph ref={addToRefs(paragraphRefs)}>
            Crafting cutting-edge and scalable Applications that drive innovation and efficiency.
          </Paragraph>

          <SlidingWordsContainer>
            <SlidingWord ref={wordRef}>Developer</SlidingWord>
          </SlidingWordsContainer>

          <ButtonContainer>
            <Button
              ref={(el) => {
                if (el && !buttonRefs.current.includes(el)) buttonRefs.current.push(el);
              }}
              onMouseEnter={() => handleBtnEnter(0)}
              onMouseLeave={() => handleBtnLeave(0)}
              onClick={() => navigate("/projects")}
            >
              View Projects
            </Button>

            <Button
              ref={(el) => {
                if (el && !buttonRefs.current.includes(el)) buttonRefs.current.push(el);
              }}
              onMouseEnter={() => handleBtnEnter(1)}
              onMouseLeave={() => handleBtnLeave(1)}
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </Button>
          </ButtonContainer>
        </HomeContainer>
      </PageCenter>
    </ThemeProvider>
  );
}