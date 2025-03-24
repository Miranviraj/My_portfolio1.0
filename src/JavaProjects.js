import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5,faFlutter,faReact,faJava,faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import { faCashRegister, faHotel } from '@fortawesome/free-solid-svg-icons';
import './App.css';


const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 7%;
   margin-bottom: 8%;
   @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InfoBox1 = styled.div`
  background-color: ${(props) => props.theme.infoBoxBackground}; 
  color: ${(props) => props.theme.color};
  padding: 20px;
  border:3px;
  border-radius: 10px;
  width: 500px;
  height:400px;
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
  height:400px;
  background-position: center;

  border: 2px solid ${(props) => props.theme.color}; 
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;

const JavaProjects = () => {
  const navigate = useNavigate();  

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    
    <div className="center-table">
      <div className="table-container">

   <table><h1 className="centered-heading">Java Projects <FontAwesomeIcon icon={faJava} /></h1>
           <tr>
             <td>
               <InfoBox1 >
                 <h3>
                  Hotel Booking System <FontAwesomeIcon icon={faHotel} />
                 </h3>
                 <p>
                 The project focuses on developing a user-friendly hotel booking system for Sandy Beach Hotel 
                 to automate room reservations, and meal plan customization, and streamline hotel operations. </p>  <p>
                  This project is done by using Java swing and SQL, additionally, I have added External Libraries for better UI components,
                  It aims to enhance the guest experience with a seamless booking interface while improving efficiency for 
                  hotel staff through automation.  </p> <p>with ensuring better operational performance and regulatory compliance.

                 </p>
               </InfoBox1>
             </td>
             <td>
               <InfoBox2 >
                 <h3>
                  ATM Simulation System with Acount Creation <FontAwesomeIcon icon={faCashRegister} />
                 </h3>
                 
                 <p>
                 I have Created a ATM Simulation System, a sophisticated and user-friendly application designed to
                  emulate the functionalities of a real-world ATM.</p><p> Developed using Java and integrated with a SQL local
                   database, this system offers a seamless banking experience through its intuitive Java Swing interface.</p><p>  
                   Key features include effortless bank account creation, secure user login, detailed account statement viewing,
                    and easy transaction handling such as deposits, withdrawals and Check balance and statement.<br/>  The aesthetically pleasing and highly
                     functional interface ensures users can navigate through the system effortlessly, with interactive buttons,
                  responsive design, and real-time visual feedback enhancing the overall user experience.

                 </p>
               </InfoBox2>
             </td>
           </tr>
             </table>

             </div>
             </div>

  );
};

export default JavaProjects;

 