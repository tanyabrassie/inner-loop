import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #d4c7c7;
  position: absolute;
  font-family: monospace;
  bottom: 25px;
  right: 15px;
  padding: 3px 5px;
  color: black;
  font-size: 9px;

  a {
    color: black;
  }
`;
export const Footer = () => {
  return (
    <FooterContainer>
      Site Design & Code by <a href='https://tanyabrassie.com'>Tanya Brassie</a>
    </FooterContainer>
  );
};
