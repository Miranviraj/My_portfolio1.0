import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHtml5,faFlutter,faReact,faJava,faPhp } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import { faBowlFood, faCashRegister, faCodeFork, faHome, faHotel } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';


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
  height:200px;
  border: 2px solid ${(props) => props.theme.color}; 
  box-shadow: 0 4px 8px rgba(227, 210, 210, 0.1);
`;


const Php = () => {
  const navigate = useNavigate();  

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    
    <div className="center-table">
      <div className="table-container">

   <table>
    <h1>PHP Projects <FontAwesomeIcon icon={faPhp} /></h1>
           <tr>
            
             <td>
               <InfoBox1 >
                 <h3>
                  Restaurant Table reservation System <FontAwesomeIcon icon={faHome} />
                 </h3>
                 <p>
                 Tavola v1.1 is simple table reservations system  created by using Php with including simple table
                  reservation solution. No matter whether this is a romantic dinner, business meeting or just a casual 
                  get together with friends all you need is to use our platform and reserve the table within seconds.
                 

                 </p>
               </InfoBox1>
             </td>
            
           </tr>
             </table>

             </div>
             </div>

  );
};

export default Php;

 