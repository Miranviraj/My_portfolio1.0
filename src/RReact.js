import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { faMedal, faTshirt } from '@fortawesome/free-solid-svg-icons';


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
  margin-bottom:25%;

  
    align-items: center;
  }

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
  height: 200px;
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);

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

const RReact = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (

    <AboutContainer>
         <h2 >React Projects <FontAwesomeIcon icon={faReact} /></h2>
    <InfoContainer>
    <StyledLink href="https://www.figma.com/design/ukjvjGtSQwOlBzApE2nEyD/Untitled?node-id=0-1&t=3qhys5u6h6NRwEnK-0" target="_blank" rel="noopener noreferrer">
      <InfoBox>
      <h3>
                      Smart Apparel Management System(Designing phase) <FontAwesomeIcon icon={faTshirt} />
      </h3>
            <p>
                      We are currently developing an innovative AI-integrated web application as a group project to revolutionize the apparel industry. Built using React, this cutting-edge platform is designed to optimize operations with features like smart inventory management, real-time production tracking, AI-driven fabric cutting optimization, and an interactive t-shirt customization tool. Our solution empowers apparel companies to enhance efficiency, reduce waste, and embrace next-level customization. By seamlessly blending technology and fashion, we are shaping the future of smart apparel management.
            </p>
        </InfoBox>
        </StyledLink>
        <StyledLink href="https://github.com/Miranviraj/My_portfolio1.0" target="_blank" rel="noopener noreferrer">
        <InfoBox>
        <h3>
                      Portfolio Website (This) <FontAwesomeIcon icon={faMedal} />
                    </h3>
                    <p>
                      This portfolio is a testament to creativity and technical prowess, showcasing a diverse array of skills and accomplishments. It features a clean, modern design with an intuitive layout that makes navigation a breeze. Interactive elements and responsive design ensure a seamless experience across all devices. Each section is thoughtfully organized, highlighting key achievements and expertise in a visually appealing manner. Whether you're exploring detailed descriptions or admiring the aesthetic presentation, this portfolio offers an engaging and professional glimpse into the creator's capabilities.
                    </p>
        </InfoBox>
        </StyledLink>
          

    </InfoContainer>
  </AboutContainer>
  );
};

export default RReact;
