import styled from 'styled-components';
import { Logo } from './Logo';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 4px double black;
  padding: 40px;
`;

const AboutText = styled.p`
  font-family: monospace;
  text-align: right;
`;

const SayHi = styled.p`
  font-family: monospace;
  text-align: right;
  padding-top: 10px;
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

  &:hover {
    color: #00a462;
    span {
      color: #ff00bf;
    }
  }
`;

const Shop = styled.a`
  font-family: 'alfarn-2', sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;

  &:hover {
    span {
      color: #ff00bf;
      font-family: monospace;
      text-decoration: underline;
    }
  }
  &:hover span {
    color: #ff00bf;
    font-family: monospace;
    text-decoration: underline;
  }
`;

const Circle = styled.span`
  padding: 5px;
  cursor: default;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <Links>
          <Link>
            <span>S</span>h<span>o</span>p
          </Link>
          <Circle>&#9702;</Circle>
          <Link>
            I<span>n</span>s<span>t</span>a
          </Link>
        </Links>
        <Shop></Shop>
        <div>
          <AboutText>
            A small-batch risoprinting press <br />
            Philadelphia, PA
          </AboutText>
          <SayHi>
            <i>Say Hi:</i> <br /> tanya@innerloop.press
          </SayHi>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
