import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);



  return (
   
     <Header>
  <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', padding: '10px' }}>
    Building the future, one line of code at a time!
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
  </Header>
 
  );
};

export default Header;
