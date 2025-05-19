import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import JavaProjects from './JavaProjects';
import Html from './Html';
import Flutter from './Flutter';
import RReact from './RReact';
import Php from './Php';
import './App.css';
import Switch from 'react-switch';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const lightTheme = {
  background: 'linear-gradient(45deg,rgb(149, 200, 255),rgb(255, 255, 255),rgb(96, 140, 236))',
  HomeGradient:'linear-gradient(45deg,rgb(97, 159, 224),rgb(255, 255, 255),rgb(97, 159, 224))',
  color: '#000000',
  headerBackground: '#bcbfca',
  footerBackground: '#bcbfca',
  headerFontColor: '#000000',
  footerFontColor: '#000000',
  buttonBackground: 'rgb(148, 210, 248)',
  buttonFontColor: '#333',
  navButtonBackground: '#e0e0e0',
  navButtonFontColor: '#000000',
  textGradient: 'linear-gradient(45deg,rgb(0, 0, 0),rgb(0, 4, 227))',
  textColor: 'rgb(3, 0, 67)',
  infoBoxBackground: 'rgb(155, 213, 250)',
  buttonhoverColor:'rgb(166, 236, 255)',
};

const darkTheme = {
  background: 'linear-gradient(45deg,rgb(3, 9, 73),rgb(0, 0, 0),rgb(5, 6, 82))',
  HomeGradient:'linear-gradient(45deg,rgb(0, 8, 91),rgb(0, 0, 0),rgb(0, 8, 91))',
  color: '#ffffff',
  headerBackground: '#323540',
  footerBackground: '#323540',
  headerFontColor: '#ffffff',
  footerFontColor: '#ffffff',
  buttonBackground: '#323540',
  buttonFontColor: '#ffffff',
  navButtonBackground: '#19203d',
  navButtonFontColor: '#ffffff',
  textGradient: 'linear-gradient(45deg,rgb(255, 230, 0),rgb(255, 255, 255))',
  textColor: 'rgb(198, 243, 243)',
  infoBoxBackground: 'rgb(0, 36, 58)', 
  buttonhoverColor:'rgb(0, 36, 58)', 
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 30px;
  margin-bottom: -20px;
  width:100%;
   margin-right: 0%;
    margin-left: 0%;
  
  
`;



const Header = styled.header`
 background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerFontColor};
  text-align: center;
  padding: 30px;
  position: relative;
  width: 100%;

  margin-bottom: 0; 
  height: 20px;
  margin-top: 0%; 

`;


 

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  

  a {
    padding: 8px 12px;
    background-color: ${(props) => props.theme.navButtonBackground};
    color: ${(props) => props.theme.navButtonFontColor};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.navButtonBackground === '#e0e0e0' ? '#c0c0c0' : '#666'};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 55px;
   right: 70px;
    width: 20%;
     display: ${(props) => (props.isOpen ? 'flex' : 'none')}; 
    background-color: ${(props) => props.theme.headerBackground};
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};  
    transition: transform 0.3s ease-in-out;
  }

   @media (max-width: 480px) {
   flex-direction: column;
    position: absolute;
    top: 55px;
    right: 30px;
    width: 30%;
     display: ${(props) => (props.isOpen ? 'flex' : 'none')}; 
    background-color: ${(props) => props.theme.headerBackground};
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};  
    transition: transform 0.3s ease-in-out;
  }

`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
    right: 80px;
  }

   @media (max-width: 480px) {
   display: block;
   right: 70px;
   
  }


`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(isDarkMode ? lightTheme : darkTheme);
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
     
        <Header>
  <div style={{  fontSize: '18px', fontWeight: 'bold', padding: '-200px' ,marginLeft:'-1000px'}}>
    My-Portfolio
  </div> 
  
  <div style={{  fontSize: '18px', fontWeight: 'bold', padding: '-200px' ,marginTop:'-15px'}}> 
  
          <Hamburger onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <Nav isOpen={isOpen}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            <Switch
              onChange={toggleTheme}
              checked={isDarkMode}
              onColor="#000000"
              uncheckedIcon={<div style={{ padding: '5px' }}> <FontAwesomeIcon icon={faSun} /></div>}
              checkedIcon={<div style={{ padding: '5px' }}> <FontAwesomeIcon icon={faMoon} /></div>}
            />
          </Nav>
          </div>
        </Header>
        <AppContainer>
       
            <Routes>
              <Route path="/JavaProjects" element={<JavaProjects />} />
              <Route path="/Html" element={<Html />} />
              <Route path="/RReact" element={<RReact />} />
              <Route path="/Flutter" element={<Flutter />} />
              <Route path="/Php" element={<Php />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        
        </AppContainer>
      </Router>
 
      

    
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
