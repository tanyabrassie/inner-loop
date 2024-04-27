import styled from "styled-components";
import { Logo } from "./Logo/Logo";
import { JazzyText, Link } from "./Typography";
import { EmailLink } from "./EmailLink";

const HeaderContainer = styled.nav`
  display: grid;
  position: sticky;
  top: 0;
  grid-template-rows: 0.5fr 1.5fr 1fr;

  align-items: center;
  justify-content: flex-end;

  padding: 30px 15px;
  flex-basis: 20%;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    grid-gap: 100px;
  }
`;

const AboutText = styled.p`
  font-family: monospace;
  text-align: right;
  line-height: 1.8;
  font-size: 12px;
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

  @media screen and (max-width: 1024px) {
    align-self: center;
  }
`;

const Circle = styled.span`
  padding: 3px 10px;
  cursor: default;
`;

const AboutContainer = styled.div`
  align-self: flex-end;

  @media screen and (max-width: 1024px) {
    align-self: center;
    width: 100%;
    border-top: 1px solid black;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Links>
        <Link href="https://store.innerloop.press">
          <JazzyText text="Store" />
        </Link>
        <Circle>&#9702;</Circle>
        <Link href="https://instagram.com/innerloop.press">
          <JazzyText text="Insta" />
        </Link>
      </Links>
      <Logo />
      <AboutContainer>
        <div>
          <AboutText>
            <i>Printing information as art</i>
            <br></br>
            A small-batch risograph press
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
