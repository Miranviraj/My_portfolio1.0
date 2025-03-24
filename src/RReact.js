import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5,faFlutter,faReact,faJava,faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { faMedal, faTshirt } from '@fortawesome/free-solid-svg-icons';

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
   margin-bottom: 8%;
`;

const InfoBox1 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border:3px;
  border-radius: 10px;
  width: 500px;
  height:300px;
  border: 2px solid ${(props) => props.theme.color}; 
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;

const InfoBox2 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border:3px;
  border-radius: 10px;
  width: 500px;
  height:300px;
  background-position: center;

  border: 2px solid ${(props) => props.theme.color}; 
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;
const RReact = () => {
  const navigate = useNavigate();  

  const handleNavigation = (path) => {
    navigate(path);
  };
  return ( 
   
  

    
    <div className="center-table">
      
      <div className="table-container">
        
   <table> <center><h1 className="centered-heading">React Projects <FontAwesomeIcon icon={faReact} /></h1></center>
           <tr>
             <td>
               <InfoBox1 >
                 <h3>
                   Smart apparel Management System <FontAwesomeIcon icon={faTshirt} />
                 </h3>
                 <p>
                 We are currently developing an innovative AI-integrated web application as a group project to revolutionize
                  the apparel industry. Built using React, this cutting-edge platform is designed to optimize operations with 
                  features like smart inventory management, real-time production tracking, AI-driven fabric cutting optimization,
                   and an interactive t-shirt customization tool. Our solution empowers apparel companies to enhance efficiency,
                  reduce waste, and embrace next-level customization. 
                 By seamlessly blending technology and fashion, we are shaping the future of smart apparel management.
                 </p>
               </InfoBox1>
             </td>
             <td>
               <InfoBox2 >
                 <h3>
                   Portfolio Website (This)<FontAwesomeIcon icon={faMedal} />
                 </h3>
                 <p>This portfolio is a testament to creativity and technical prowess, showcasing a diverse
                   array of skills and accomplishments. </p><p>It features a clean, modern design with an intuitive layout
                    that makes navigation a breeze. Interactive elements and responsive design ensure a seamless experience
                     across all devices.</p> Each section is thoughtfully organized, highlighting key achievements and expertise
                      in a visually appealing manner.<p> Whether you're exploring detailed descriptions or admiring the aesthetic presentation,
                   this portfolio offers an engaging and professional glimpse into the creator's capabilities.</p>
               </InfoBox2>
             </td>
           </tr>
          
             </table>
             </div>
             </div>
             
  );
};

export default RReact;

 