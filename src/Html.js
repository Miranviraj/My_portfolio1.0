import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHtml5 } from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom';

import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const InfoContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 0%;
  margin-bottom: 0%;
  justify-content: center;
  align-items: center;
  text-align: center;

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


const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px;
  border-radius: 10px;
  width: 500px;
  height: 100px;
  border: 2px solid ${(props) => props.theme.color};
 box-shadow: 0 4px 8px ${(props) => props.theme.scolor};

  @media (max-width: 768px) {
    width: 400px;
    height: 80px;
    padding: 15px;
      height: 150px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 60px;
    padding: 10px;
      height: 150px;
  }

  
   &:hover {
    transform: scale(1.1);
  }

`;



const StyledLink = styled.a`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Html = () => {
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      setLoaded(true);
    }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (<InfoContainer>
    <div className={`app-container ${loaded ? 'fade-in' : ''}`}>
    <div className="center-table">
      <div className="table-container">
        <table>
          <tr>
            <td>
              <h1>
                HTML Projects <FontAwesomeIcon icon={faHtml5} />
              </h1>
            </td>
          </tr>
          <tr>
            <td> <StyledLink href="https://github.com/Miranviraj/Pet_care" target="_blank" rel="noopener noreferrer">
              <InfoBox>
                <h3>
                  Website for Pet care Center <FontAwesomeIcon icon={faPaw} />
                </h3>
                <p>
                  Developed a responsive and user-friendly website for a pet care center including services details, facilities, and contact details.
                </p>
              </InfoBox>
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

export default Html;
