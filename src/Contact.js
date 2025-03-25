import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import { faCashRegister, faContactCard, faHotel, faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faContactBook } from '@fortawesome/free-solid-svg-icons/faContactBook';
import { faMailReply } from '@fortawesome/free-solid-svg-icons/faMailReply';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons/faMailchimp';

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
  margin-bottom: 8%;

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 5%;
    margin-bottom: 6%;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 3%;
    margin-bottom: 4%;
  }
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
  align-items: center; /* Center the content horizontally */

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

const InfoBox2 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px solid ${(props) => props.theme.color}; 
  border-radius: 10px;
  width: 300px;
  height: 400px;
  background-position: center;
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 250px;
    padding: 10px;
  }
`;

const Button1 = styled.div`
  background-color: ${(props) => props.theme.Button1Background}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px solid ${(props) => props.theme.color}; 
  border-radius: 10px;
  width: 450px;
  height: 20px;
  gap: 10px;
  background-position: center;
  justify-content: center;
  cursor:pointer;
  margin-top: -2%;
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
  margin-bottom: 10px; /* Added gap between buttons */
  display: flex;
  align-items: center; /* Center the content vertically */
  justify-content: center; /* Center the content horizontally */

  @media (max-width: 768px) {
    width: 300px;
    height: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 10px;
    padding: 10px;
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
  const navigate = useNavigate();  

  const handleNavigation = (path) => {
    navigate(path);
  };

  const phoneNumber = '+94716270968'; 
  const message = 'Hello, I would like to get in touch with you!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="center-table">
      <div className="table-container">
        <InfoBox1>
          <h1><FontAwesomeIcon icon={faContactBook} /> Contact Me</h1>
          <h3>Click To Contact me</h3>
          <StyledLink href="https://www.linkedin.com/in/miran-virajith-devinda-8b5094294" target="_blank" rel="noopener noreferrer">
            <Button1>Linkedin <FontAwesomeIcon icon={faMailBulk} /></Button1>
          </StyledLink>
          <Button1 onClick={() => window.open('mailto:your-email@example.com', '_blank')}>E-mail <FontAwesomeIcon icon={faMailBulk} /></Button1>
          <Button1 onClick={() => window.open(whatsappLink, '_blank')}>WhatsApp <FontAwesomeIcon icon={faWhatsapp} /></Button1>
          <StyledLink href="https://www.facebook.com/share/16GoaocRdT/" target="_blank" rel="noopener noreferrer">
            <Button1>Facebook <FontAwesomeIcon icon={faFacebook} /></Button1>
          </StyledLink>
        </InfoBox1>
      </div>
    </div>
  );
};

export default Contact;
