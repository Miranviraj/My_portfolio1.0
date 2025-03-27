import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerFontColor};
  text-align: center;
  padding: 30px;
  position: relative;
  width: 100%;

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
          <div style={{  fontSize: '18px', fontWeight: 'bold', padding: '-200px' ,textAlign:'center'}}>
          © 2025 Miran Virajith. All Rights Reserved.
      </div> 
      </FooterContainer>
  );
};

export default Footer;
