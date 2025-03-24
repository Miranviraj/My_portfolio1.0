import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';
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
  background: '#dde0e1',
  color: '#000000',
  headerBackground: '#bcbfca',
  footerBackground: '#bcbfca',
  headerFontColor: '#000000',
  footerFontColor: '#000000',
  buttonBackground: '#5f8ae0',
  buttonFontColor: '#333',
  navButtonBackground: '#e0e0e0',
  navButtonFontColor: '#000000',
  infoBoxBackground: '#bcbfca', 
  Button1Background: '#f2f3f5',
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
};

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;

const Button1 = styled.div`
  background-color: ${(props) => props.theme.Button1Background}; 
  color: ${(props) => props.theme.color};

  `;

const Header = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerFontColor};
  padding: 20px;
  text-align: Center;
  margin-top: 0%;


 

  h1 {
    color: ${(props) => props.theme.headerFontColor};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    padding: 10px 15px;
    background-color: ${(props) => props.theme.navButtonBackground};
    color: ${(props) => props.theme.navButtonFontColor};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.navButtonBackground === '#e0e0e0' ? '#c0c0c0' : '#666'};
    }




  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setTheme(isDarkMode ? lightTheme : darkTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <header>
          <Header>
         
            <Nav> 
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Switch
                onChange={toggleTheme}
                checked={isDarkMode}
                onColor="#000000"
                uncheckedIcon={<div style={{ padding: '5px' }}> <FontAwesomeIcon icon={faSun} /></div>}
                checkedIcon={<div style={{ padding: '5px' }}> <FontAwesomeIcon icon={faMoon} /></div>}
              />
            </Nav>
          </Header>
          </header>
          <Routes>
          <Route path="/JavaProjects" element={<JavaProjects/>} />
          <Route path="/Html" element={<Html/>} />
          <Route path="/RReact" element={<RReact/>} />
          <Route path="/Flutter" element={<Flutter/>} />
          <Route path="/Php" element={<Php/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
