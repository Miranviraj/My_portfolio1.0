import React, { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilePicture from './Images/WhatsApp Image 2025-03-24 at 18.46.10_d5fade9b (1).jpg'; 
import coverPhoto from './Images/cover.jpg'; 

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const CoverPhoto = styled.div`
  margin-top: -20px;
  width: 100%;
  height: 300px;
  background: url(${coverPhoto}) no-repeat center center;
  background-size: cover;
  margin-bottom: -100px;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
  margin-bottom: 10px;
  cursor: pointer;

`;

const Modal = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;


const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; // Updated to use theme
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;

const ResumeButton = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  background-color: #0073b1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005582;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #0073b1;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #005582;
    }
  }
`;

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://1drv.ms/b/c/363538784efa83c6/Ed0dlIn-gK9IkfeDaDy3UoEBrViK2ACaWLxPkjupAfncKw?e=CGT5ud';
    link.download = 'filename.ext'; // Optional: specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResumeButton onClick={handleDownload}>Download Resume</ResumeButton>
  );
}

const About = () => {

  
  const [showModal, setShowModal] = useState(false);

  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AboutContainer>
      <CoverPhoto />
      <ProfilePicture src={profilePicture} alt="Profile" onClick={handleProfileClick}  />
      <h2>Miran Virajith Devinda</h2>
      <p>Hello! I'm a web developer with a passion for creating beautiful and functional websites.</p>
      <DownloadButton />

      <InfoContainer>
        <table>
          <tr>
            <td>
              <InfoBox>
                <h2>Education</h2>
                <p>BSc (Hons) in Software Engineering at CINEC Campus, currently in my 3rd year.</p>
              </InfoBox>
            </td>
            <td>
              <InfoBox>
                <h2>Skills</h2>
                <p>Enthusiastic about crafting scalable, high-performance web,
                   Java, and mobile applications using cutting-edge technologies. 
                   Driven by a strong sense of innovation and self-motivation, I excel in Java,
                    React, JavaScript, Node.js, Firebase, and Flutter. My critical thinking skills
                     enable me to tackle complex problems effectively, while my collaborative spirit
                      ensures successful teamwork and project execution. Always eager to push boundaries
                       and bring fresh ideas to life, I thrive in dynamic environments
                   where creativity and technical expertise intersect.</p>
              </InfoBox>
            </td>
          </tr>
          <tr>
            <td>
              <InfoBox>
                <h2>Interests</h2>
                <p>I'm passionate about web development and mobile application development, 
                  constantly exploring new technologies and frameworks to enhance my skills. Currently, 
                  I'm diving into the fascinating world of AI and machine learning, eager to understand and
                   leverage these powerful tools for future projects. My curiosity drives me to learn from every
                   experience and source, always seeking to expand my knowledge and innovate.
                </p>
              </InfoBox>
            </td>
            <td>
              <InfoBox>
                <h2>Current Projects</h2>
                <p>Currently, I'm working on an AI-driven Smart Apparel Management Web Application, a Tuition Management mobile application (Back-end), and researching my upcoming project (Augmented Reality Empowered Ancient Ruins Virtually Reconstructing Application).</p>
              </InfoBox>
            </td>
          </tr>
        </table>
      </InfoContainer>
      <SocialLinks>
        <a href="https://www.linkedin.com/in/miran-virajith-devinda-8b5094294" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Miranviraj?tab=overview&from=2025-02-01&to=2025-02-28" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </SocialLinks>

      
      <Modal show={showModal} onClick={handleCloseModal}>
        <ModalContent src={profilePicture} alt="Profile" />
      </Modal>

    </AboutContainer>
  );
};

export default About;
