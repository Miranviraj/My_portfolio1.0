import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5,faFlutter,faReact,faJava,faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 


const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
   margin-bottom: 8%;
   
`;

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; // Updated to use theme
  color: ${(props) => props.theme.color};
  padding: 20px;
  border:3px;
  border-radius: 10px;
  width: 500px;
  height:70px;
  border: 2px solid ${(props) => props.theme.color}; 
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;



const Projects = () => {
  const navigate = useNavigate();  

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    
    <section id="projects">
    <InfoContainer>
      
      <table>
        <tr>
          <td><Link to="/JavaProjects">
            <InfoBox>
              <h3>
                Java Projects <FontAwesomeIcon icon={faJava} />
              </h3>
            </InfoBox>
            </Link>
            </td>
          <td><Link to="/Html">
            <InfoBox >
              <h3>
                HTML Projects <FontAwesomeIcon icon={faHtml5} />
              </h3>
            </InfoBox>
            </Link>
          </td>
        </tr>
        <tr>
          <td> <Link to="/Php">
          <InfoBox >
              <h3>
                PHP Projects <FontAwesomeIcon icon={faPhp} />
              </h3>
            </InfoBox>
          </Link>
    
          </td>
          <td>
          <Link to="/RReact">
            <InfoBox>
              <h3>
                React Projects <FontAwesomeIcon icon={faReact} />
              </h3>
            </InfoBox>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
          <Link to="/Flutter">
            <InfoBox >
              <h3>
                Flutter Projects <FontAwesomeIcon icon={faFlutter} />
              </h3>
            </InfoBox>
            </Link>
          </td>
        </tr>
      </table>
     
    </InfoContainer>
  </section>
  
);
};

export default Projects;
