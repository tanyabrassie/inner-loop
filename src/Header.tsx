import styled from 'styled-components';
import { Logo } from './Logo/Logo';

const HeaderContainer = styled.nav`
  display: grid;

  position: sticky;
  top: 0;
  grid-template-rows: 0.5fr 1.5fr 1fr;

  align-items: center;
  justify-content: flex-end;

  padding: 30px;
  flex-basis: 20%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    grid-gap: 100px;
  }
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
  align-self: flex-start;
  padding-top: 5px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    align-self: flex-start;
  }
`;

const Link = styled.a`
  padding: 5px 0;
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
  padding: 6px 10px;
  cursor: default;
`;

const AboutContainer = styled.div`
  align-self: flex-end;
`;

const EmailText = (): JSX.Element => {
  const email = 'tanya@innerloop.press'.split('');

  const Letters = email
    .map((letter, index) => {
      return index % 2 ? letter : <span key={index}>{letter}</span>;
    })
    .concat();
  return <Email>{Letters}</Email>;
};

const Email = styled.span`
  padding-bottom: 5px;
  font-weight: 700;
  letter-spacing: 0.5px;

  &:hover {
    color: black;

    span {
      display: inline-block;
      color: #955ffb;
      transform: rotate(10deg);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
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
      <Logo />
      <AboutContainer>
        <Shop></Shop>
        <div>
          <AboutText>
            A small-batch
            <br /> risoprinting press
            <br /> <strong>Philadelphia, PA</strong>
          </AboutText>
          <SayHi>
            <i>Say Hi:</i> <br />
            <EmailText />
          </SayHi>
        </div>
      </AboutContainer>
    </HeaderContainer>
  );
};

export default Header;
