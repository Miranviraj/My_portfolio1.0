import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerFontColor};
  text-align: center;
  padding: 30px;
  position: relative;
  width: 100%;
  bottom: 0;
  margin-bottom: 0; 
  height: 20px;
  margin-top: 10px; 

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;



const Footer = () => {
  return (
   <FooterContainer>
      <p>&copy; 2025  Miran virajith,S Portfolio. All rights reserved.</p>
      </FooterContainer>
  );
};

export default Footer;
