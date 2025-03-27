import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { faCashRegister, faHotel } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useEffect } from 'react';
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  margin-bottom: 25%;
  width 100%;

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  cursor: pointer; /* Add cursor pointer for better UX */
  text-decoration: none; /* Remove underline */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 box-shadow: 0 4px 8px ${(props) => props.theme.scolor};
  
   &:hover {
    transform: scale(1.1);
  }


  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JavaProjects = () => {
  const navigate = useNavigate();  

  const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      setLoaded(true);
    }, []);


  return (
    <div className={`app-container ${loaded ? 'fade-in' : ''}`}>
    <AboutContainer>
      <h1>Java Projects <FontAwesomeIcon icon={faJava} /></h1>
      <InfoContainer>
        <StyledLink href="https://github.com/Miranviraj/hotelbooking-system--3.0" target="_blank" rel="noopener noreferrer">
          <InfoBox>
            <h3>Hotel Booking System <FontAwesomeIcon icon={faHotel} /></h3>
            <p>
              The project focuses on developing a user-friendly hotel booking system for Sandy Beach Hotel 
              to automate room reservations, and meal plan customization, and streamline hotel operations.
            </p>
            <p>
              This project is done by using Java swing and SQL, additionally, I have added External Libraries for better UI components.
              It aims to enhance the guest experience with a seamless booking interface while improving efficiency for 
              hotel staff through automation.
            </p>
            <p>
              Ensuring better operational performance and regulatory compliance.
            </p>
          </InfoBox>
        </StyledLink>
        <StyledLink href="https://github.com/Miranviraj/ATM_simulation_system_with_Acount_Creation_and_Login" target="_blank" rel="noopener noreferrer">
          <InfoBox>
            <h3>ATM Simulation System with Account Creation <FontAwesomeIcon icon={faCashRegister} /></h3>
            <p>
              I have Created an ATM Simulation System, a sophisticated and user-friendly application designed to
              emulate the functionalities of a real-world ATM.
            </p>
            <p>
              Developed using Java and integrated with a SQL local database, this system offers a seamless banking experience through its intuitive Java Swing interface.
            </p>
            <p>
              Key features include effortless bank account creation, secure user login, detailed account statement viewing,
              and easy transaction handling such as deposits, withdrawals, and checking balance and statement.
            </p>
            <p>
              The aesthetically pleasing and highly functional interface ensures users can navigate through the system effortlessly, with interactive buttons,
              responsive design, and real-time visual feedback enhancing the overall user experience.
            </p>
          </InfoBox>
        </StyledLink>
      </InfoContainer>
    </AboutContainer>
    </div>
  );
};

export default JavaProjects;
