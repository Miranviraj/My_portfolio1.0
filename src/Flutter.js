import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faInstitution } from '@fortawesome/free-solid-svg-icons/faInstitution';
import { faDog, faPaw } from '@fortawesome/free-solid-svg-icons';
import { useEffect} from 'react';
import { useState } from 'react';

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: -200px;
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

const InfoBox = styled.div`
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


const Flutter = () => {

const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navigate = useNavigate();

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
          <h1>Flutter Projects <FontAwesomeIcon icon={faFlutter} /></h1>
            
            </td></tr>
          <tr>
            <td>
            <StyledLink href="https://github.com/Miranviraj/Tution_management_system" target="_blank" rel="noopener noreferrer">
            <InfoBox>
            <h3>
                  Tution Management Mobile Application(Ongoing) <FontAwesomeIcon icon={faInstitution} />
                 </h3>

                 <p>
currently Im creating A Mobile application with using Flutter for better responsiveness and interactive user experience
 System include Features to manage student details,Attendence details,Payment details and also feature  
 For mesege sending (student reports ) 


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

export default Flutter;
