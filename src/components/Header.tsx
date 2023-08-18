import styled from 'styled-components';
import { Logo } from './Logo/Logo';
import { JazzyText, Link } from './Typography';
import { EmailLink } from './EmailLink';

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

const SayHi = styled.div`
  font-family: monospace;
  text-align: right;
  padding-top: 10px;
`;

const Links = styled.div`
  display: flex;
  align-self: flex-start;
  padding-top: 3px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    align-self: center;
  }
`;

const Circle = styled.span`
  padding: 3px 10px;
  cursor: default;
`;

const AboutContainer = styled.div`
  align-self: flex-end;

  @media screen and (max-width: 800px) {
    align-self: center;
    width: 100%;
    border-top: 1px solid black;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Links>
        <Link href='https://store.innerloop.press'>
          <JazzyText text='Print Shop' />
        </Link>
        <Circle>&#9702;</Circle>
        <Link href='https://instagram.com/innerloop.press'>
          <JazzyText text='Insta' />
        </Link>
      </Links>
      <Logo />
      <AboutContainer>
        <div>
          <AboutText>
            A small-batch
            <br /> risoprinting press
            <br /> <strong>Philadelphia, PA</strong>
          </AboutText>
          <SayHi>
            <i>Say Hi:</i> <br />
            <EmailLink />
          </SayHi>
        </div>
      </AboutContainer>
    </HeaderContainer>
  );
};

export default Header;
