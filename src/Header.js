import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom
import Switch from 'react-switch'; // Assuming you are using react-switch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming FontAwesome
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Assuming FontAwesome
import MiranLogo from './_logo.png'; // <--- Import your logo here

// Dummy components for the example to work
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Projects = () => <div>Projects Page</div>;
const Contact = () => <div>Contact Page</div>;
const JavaProjects = () => <div>Java Projects Page</div>;
const Html = () => <div>HTML Projects Page</div>;
const RReact = () => <div>React Projects Page</div>;
const Flutter = () => <div>Flutter Projects Page</div>;
const Php = () => <div>PHP Projects Page</div>;

// Dummy styled components for the example to work
const Header = ({ children }) => <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>{children}</header>;
const Hamburger = ({ onClick, children }) => <div onClick={onClick} style={{ cursor: 'pointer', fontSize: '24px' }}>{children}</div>;
const Nav = ({ isOpen, children }) => <nav style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}>{children}</nav>;
const Main = ({ children }) => <main style={{ padding: '20px' }}>{children}</main>;
const Routes = ({ children }) => <div>{children}</div>;
const Route = ({ path, element }) => null; // This is a placeholder, actual routing logic is handled by react-router-dom

const MyHeaderComponent = () => { // Renamed from Header to avoid conflict with styled component
  const [isOpen, setIsOpen] = useState(false); // Changed from isMobile for menu toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You'd typically update a class on the body or root element here
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <Header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Your logo here */}
        <img src={MiranLogo} alt="Miran Logo" style={{ height: '50px', marginRight: '15px' }} /> 
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Building the future, one line of code at a time!
        </div>
      </div>
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

      <Main>
        {/*
          The Routes and Route components should be within a <Router> component
          from 'react-router-dom' in your actual application.
          For this example, they are just placeholders.
        */}
        {/* <Routes>
          <Route path="/JavaProjects" element={<JavaProjects />} />
          <Route path="/Html" element={<Html />} />
          <Route path="/RReact" element={<RReact />} />
          <Route path="/Flutter" element={<Flutter />} />
          <Route path="/Php" element={<Php />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home /> {/* Displaying Home component directly for simplicity in this example */}
      </Main>
    </Header>
  );
};

export default MyHeaderComponent;