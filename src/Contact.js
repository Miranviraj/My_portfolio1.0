import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import { useEffect } from 'react';

import {  faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,  faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faContactBook } from '@fortawesome/free-solid-svg-icons/faContactBook';
import { Heading } from 'lucide-react';


const InfoContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
`;

const InfoBox1 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px solid ${(props) => props.theme.color}; 
  border-radius: 10px;
  width: 500px;
  height: 470px;
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top:-150px;

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
    padding: 10px;
  }
`;



const Button1 = styled.div`
  background-color: ${(props) => props.theme.Button1Background}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
 
  border-radius: 10px;
  width: 450px;
  height: 20px;
  gap: 10px;
  background-position: center;
  justify-content: center;
  cursor:pointer;
  margin-top: -2%;
  box-shadow: 0 4px 8px ${(props) => props.theme.scolor};
  margin-bottom: 10px; /* Added gap between buttons */
  display: flex;
  align-items: center; 
  justify-content: center; 
  
   &:hover {
    transform: scale(1.1);
  }


  @media (max-width: 768px) {
   margin-top: 4%;
    width: 300px;
    height: 15px;
    padding: 12px;
    gap:2px;
  }

   &:hover {
    transform: scale(1.1);
  }


  @media (max-width: 480px) {
   margin-top: 4%;
    width: 200px;
    height: 10px;
    padding: 10px;
     gap:2px;
  }

   &:hover {
    transform: scale(1.1);
  }

`;


const Headingc = styled.h1`
color: ${(props) => props.theme.textColor};
transition: color 0.3s ease;
font-size: 40px;
 font-family: Copperplate Gothic Light;

  @media (max-width: 768px) {
   

   
      font-size: 30px;
    }
 

  @media (max-width: 480px) {
  font-size: 20px;
    
    
    }

`;

const Heading2c = styled.h1`
color: ${(props) => props.theme.textColor};
transition: color 0.3s ease;
font-size: 30px;
 font-family:  serif;

  @media (max-width: 768px) {
   

   
      font-size: 20px;
    }
 

  @media (max-width: 480px) {
  font-size: 10px;
    
    
    }

`;

const StyledLink = styled.a`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  

   const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      setLoaded(true);
    }, []);

 
  const phoneNumber = '+94716270968'; 
  const message = 'Hello, I would like to get in touch with you!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (

    <InfoContainer>
 
    <div className="center-table">
      <div className="table-container">

        
    <div className={`app-container ${loaded ? 'bounce' : ''}`}>
        <InfoBox1>
          <Headingc><FontAwesomeIcon icon={faContactBook} /> Contact Me</Headingc>
          <Heading2c >Click To Contact me</Heading2c >
          <StyledLink href="https://www.linkedin.com/in/miran-virajith-devinda-8b5094294" target="_blank" rel="noopener noreferrer">
            <Button1>Linkedin <FontAwesomeIcon icon={faLinkedin} /></Button1>
          </StyledLink>
          <Button1 onClick={() => window.open('mailto:your-email@example.com', '_blank')}>E-mail <FontAwesomeIcon icon={faMailBulk} /></Button1>
          <Button1 onClick={() => window.open(whatsappLink, '_blank')}>WhatsApp <FontAwesomeIcon icon={faWhatsapp} /></Button1>
          <StyledLink href="https://www.facebook.com/share/16GoaocRdT/" target="_blank" rel="noopener noreferrer">
            <Button1>Facebook <FontAwesomeIcon icon={faFacebook} /></Button1>
          </StyledLink>
        </InfoBox1>
        </div>
      </div>
    </div>
 
    </InfoContainer>
  
  );
};

export default Contact;
