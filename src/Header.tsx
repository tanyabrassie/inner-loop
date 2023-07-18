import styled from 'styled-components';
import { Logo } from './Logo';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid black;
  padding: 40px;
`;

const AboutText = styled.p`
  font-family: monospace;
  text-align: right;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  padding: 5px;
  font-family: 'alfarn-2', sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <Links>
          <Link>Shop</Link>&#9702; <Link>Insta</Link>
        </Links>
        <div>
          <AboutText>
            A small-batch risoprinting press <br />
            Philadelphia, PA
          </AboutText>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
