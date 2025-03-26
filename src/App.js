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
  background: 'linear-gradient(45deg,rgb(255, 0, 0),rgb(0, 4, 227))',
  color: '#000000',
  headerBackground: '#bcbfca',
  footerBackground: '#bcbfca',
  headerFontColor: '#000000',
  footerFontColor: '#000000',
  buttonBackground: 'rgb(148, 210, 248)',
  buttonFontColor: '#333',
  navButtonBackground: '#e0e0e0',
  navButtonFontColor: '#000000',
  infoBoxBackground: '#bcbfca', 
  Button1Background: '#f2f3f5',
  textGradient: 'linear-gradient(45deg,rgb(0, 0, 0),rgb(0, 4, 227))',
  textGradien: 'rgb(133, 180, 255),rgb(255, 255, 255),rgb(149, 190, 248))',
  textColor:'rgb(3, 0, 67)',
  scolor:'rgb(3, 26, 62)',
};

const darkTheme = {
  background: '#19203d',
  color: '#ffffff',
  headerBackground: '#323540',
  footerBackground: '#323540',
  headerFontColor: '#ffffff',
  footerFontColor: '#ffffff',
  buttonBackground: '#323540',
  buttonFontColor: '#ffffff',
  navButtonBackground: '#19203d',
  navButtonFontColor: '#ffffff',
  infoBoxBackground: '#323540', 
  infoBoxBorderColor: '#ffffff',
  textGradient: 'linear-gradient(45deg,rgb(255, 230, 0),rgb(255, 255, 255))',
  textGradien: 'linear-gradient(45deg,rgb(9, 1, 67),rgb(0, 0, 0),rgb(4, 31, 97))',
  textColor:'rgb(198, 243, 243)',
  scolor:'rgb(150, 179, 225)',
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the container takes full viewport height */
  background: ${(props) => props.theme.textGradien};
  color: ${(props) => props.theme.color};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Main = styled.main`
  flex: 1; /* Makes the main content stretch to fill available space */
`;

const Button1 = styled.div`
  background-color: ${(props) => props.theme.Button1Background}; 
  color: ${(props) => props.theme.color};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerFontColor};
  padding: 20px;
  text-align: center;
  margin-top: -20px;
  position: relative;
  width:100%;
  margin-left:-20px;
  height:25px;

  h1 {
    color: ${(props) => props.theme.headerFontColor};
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 0%;

  a {
    padding: 8px 12px;
    background-color: ${(props) => props.theme.navButtonBackground};
    color: ${(props) => props.theme.navButtonFontColor};
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.navButtonBackground === '#e0e0e0' ? '#c0c0c0' : '#666'};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 55px;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 30%;
    background-color: ${(props) => props.theme.headerBackground};
    transition: right 0.3s;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2.0rem;

  @media (max-width: 768px) {
    display: block;
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
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Header>
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
          </Header>
          <Main>
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
          </Main>
          <Footer />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
