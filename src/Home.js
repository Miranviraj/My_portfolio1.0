import React from 'react';
import styled from 'styled-components';
import profilePicture from './Images/WhatsApp Image 2025-03-24 at 18.46.10_d5fade9b (1).jpg'; 
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  animation: fadeIn 2s;
  margin-top: -130px; 

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 20px;
  margin-top: 100px;
`;

const SlidingWords = styled.div`
  margin: 20px;
  height: 30px;
  overflow: hidden;
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
  }
`;

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
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.buttonBackground === '#282c34' ? '#444' : '#666'};
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [inProp, setInProp] = React.useState(true);

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <HomeContainer>
      <ProfilePicture src={profilePicture} alt="Profile" />
      <h1>Hi, I'm Miran Virajith Devinda</h1>
      <p>A dedicated software engineer with a flair for web and mobile applications development,</p>
      <p>crafting cutting-edge and scalable applications that drive innovation and efficiency.</p>
      <SlidingWords>
        <CSSTransition in={inProp} timeout={6000} classNames="slide">
          <div>
            <p>Developer</p>
            <p>Designer</p>
            <p>Creator</p>
          </div>
        </CSSTransition>
      </SlidingWords>
      <ButtonContainer>
        <Button onClick={handleViewProjects}>View Projects</Button>
        <Button onClick={handleContactMe}>Contact Me</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
