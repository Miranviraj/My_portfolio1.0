import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faFlutter, faReact, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
  margin-bottom: 8%;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
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
  border: 3px;
  border-radius: 10px;
  width: 500px;
  height: 70px;
  border: 2px solid ${(props) => props.theme.color};
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

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section id="projects">
      <InfoContainer>
        <Link to="/JavaProjects">
          <InfoBox>
            <h3>
              Java Projects <FontAwesomeIcon icon={faJava} />
            </h3>
          </InfoBox>
        </Link>
        <Link to="/Html">
          <InfoBox>
            <h3>
              HTML Projects <FontAwesomeIcon icon={faHtml5} />
            </h3>
          </InfoBox>
        </Link>
        <Link to="/Php">
          <InfoBox>
            <h3>
              PHP Projects <FontAwesomeIcon icon={faPhp} />
            </h3>
          </InfoBox>
        </Link>
        <Link to="/RReact">
          <InfoBox>
            <h3>
              React Projects <FontAwesomeIcon icon={faReact} />
            </h3>
          </InfoBox>
        </Link>
        <Link to="/Flutter">
          <InfoBox>
            <h3>
              Flutter Projects <FontAwesomeIcon icon={faFlutter} />
            </h3>
          </InfoBox>
        </Link>
      </InfoContainer>
    </section>
  );
};

export default Projects;
