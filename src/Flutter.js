import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faInstitution } from '@fortawesome/free-solid-svg-icons/faInstitution';
import { faDog, faPaw } from '@fortawesome/free-solid-svg-icons';

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

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border: 3px;
  border-radius: 10px;
  width: 500px;
  height: 150px;
  border: 2px solid ${(props) => props.theme.color};
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);

  @media (max-width: 768px) {
    width: 400px;
    height: 200px;
    padding: 15px;
    
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
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


const Flutter = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="center-table">
      <div className="table-container">
        <table>
          <tr>
            <td>
              <h1>
               Flutter Projects <FontAwesomeIcon icon={faFlutter} />
              </h1>
            </td>
          </tr>
          <tr>
            <td>
            <StyledLink href="https://github.com/Miranviraj/Tution_management_system" target="_blank" rel="noopener noreferrer">
            <InfoBox >
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
  );
};

export default Flutter;
