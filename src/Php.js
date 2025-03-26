import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { faBowlFood, faCashRegister, faCodeFork, faHome, faHotel, faTable } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

const InfoContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
  margin-bottom: 8%;
  display: flex;
  flex-direction: column; 
  min-height: 100vh; 
  flex: 1;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
   
  }
`;

const InfoBox1 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px;
  border-radius: 10px;
  width: 500px;
  height: 200px;
  border: 2px solid ${(props) => props.theme.color};
 box-shadow: 0 4px 8px ${(props) => props.theme.scolor};

  
   &:hover {
    transform: scale(1.1);
  }


  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }

  @media (max-width: 480px) {
    width: auto;
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


const Php = () => {
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      setLoaded(true);
    }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (

     <InfoContainer>
    <div className={`app-container ${loaded ? 'fade-in' : ''}`}>
    <div className="center-table">
      <div className="table-container">
        
        <table>
          <tr><td>
          <h1>PHP Projects <FontAwesomeIcon icon={faPhp} /></h1>
            
            </td></tr>
          <tr>
            <td>
            <StyledLink href="https://github.com/Miranviraj/TAVOLA-Table_reservation" target="_blank" rel="noopener noreferrer">
              <InfoBox1>
                <h3>
                  Restaurant Table Reservation System <FontAwesomeIcon icon={faHome} />
                </h3>
                <p>
                  Tavola v1.1 is a simple table reservation system created using PHP, providing a straightforward solution for table reservations. Whether it's a romantic dinner, business meeting, or casual get-together with friends, our platform allows you to reserve a table within seconds.
                </p>
              </InfoBox1>
              </StyledLink>
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>
    </InfoContainer>
  );
};

export default Php;
