import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import profilePicture from './Images/WhatsApp Image 2025-03-24 at 18.46.10_d5fade9b (1).jpg'; 
import { useNavigate } from 'react-router-dom';
import './App.css'; 

const theme = {

};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SlidingWordsContainer = styled.div`
  margin: 20px;
  height: 80px;
  overflow: hidden;
  position: relative;
  width: 200px;
  text-align: center;
`;

const SlidingWord = styled.p`
  font-size: 24px;
   background: ${(props) => props.theme.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Comic Sans MS;
  transition: opacity 0.5s;
  opacity: 1;
`;

const Heading = styled.h1`
color: ${(props) => props.theme.textColor};
transition: color 0.3s ease;
font-size: 50px;
 font-family: Copperplate Gothic Light;

`;


const SlidingWords = () => {
  const words = ["Developer", "Designer", "Creator",];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlidingWordsContainer>
      <SlidingWord>{words[index]}</SlidingWord>
    </SlidingWordsContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonFontColor};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #444;
    transform: translateY(-3px);
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background: #282c34;
  color: white;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <ProfilePicture src={profilePicture} alt="Profile" />
        <Heading>Hi, I'm Miran Virajith Devinda</Heading>
        <p>A dedicated software engineer with a flair for web and mobile applications development.</p>
        <p>Crafting cutting-edge and scalable applications that drive innovation and efficiency.</p>
        <SlidingWords />
        <ButtonContainer>
          <Button onClick={() => navigate('/projects')}>View Projects</Button>
          <Button onClick={() => navigate('/contact')}>Contact Me</Button>
        </ButtonContainer>
      
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
