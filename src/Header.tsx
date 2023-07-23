import styled from 'styled-components';
import { Logo } from './Logo/Logo';

const HeaderContainer = styled.nav`
  display: grid;

  position: sticky;
  top: 0;
  grid-template-rows: 0.5fr 1.5fr 1fr;

  align-items: center;
  justify-content: space-between;

  padding: 20px;
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
  justify-content: center;
`;

const Link = styled.a`
  padding: 5px;
  cursor: pointer;
  font-family: monospace;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
  border-bottom: 1px solid white;

  transition: border 0.2s;
  &:hover {
    color: black;
    border-bottom: 1px solid black;

    span {
      display: inline-block;
      color: #955ffb;
      transform: rotate(10deg);
    }
  }
`;

const Shop = styled.a`
  font-family: monospace;
  /* font-family: 'alfarn-2', sans-serif; */
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;

  &:hover {
    span {
      color: black;
      font-family: monospace;
      text-decoration: underline;
    }
  }
  &:hover span {
    color: #bab1e7;
    font-family: monospace;
    text-decoration: underline;
  }
`;

const Circle = styled.span`
  padding: 3px 10px;
  cursor: default;
`;

const Email = styled.span`
  padding-bottom: 5px;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const AboutContainer = styled.div`
  align-self: flex-end;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Links>
          <Link>
            <span>P</span>r<span>i</span>n<span>t</span>&nbsp;
            <span>S</span>h<span>o</span>p
          </Link>
          <Circle>&#9702;</Circle>
          <Link>
            I<span>n</span>s<span>t</span>a
          </Link>
        </Links>
      </div>
      <Logo />
      <AboutContainer>
        <Shop></Shop>
        <div>
          <AboutText>
            A small-batch
            <br /> risoprinting press <strong>Philadelphia, PA</strong>
          </AboutText>
          <SayHi>
            <i>Say Hi:</i> <br />
            <Email>tanya@innerloop.press</Email>
          </SayHi>
        </div>
      </AboutContainer>
    </HeaderContainer>
  );
};

export default Header;
