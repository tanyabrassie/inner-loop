import styled, { keyframes } from "styled-components";

const ContentContainer = styled.div`
  padding: 30px 20px 20px;
`;

const bulletPointParty = keyframes`
  0% {
    color: #f86bff;
  }
  100% {
    color: #4203ff;
  }`;

const List = styled.ul`
  padding: 10px 0;
`;

const ListItem = styled.li<{ time: string }>`
  list-style-type: none;
  margin-inline-start: 5px;

  a {
    text-decoration: none;
    padding-bottom: 5px;
    color: black;

    &:hover {
      border-bottom: 1px solid black;
    }
  }

  &::before {
    content: "⎗";
    display: inline-block;
    font-weight: 800;
    font-size: 27px;
    vertical-align: sub;
    padding-right: 10px;
    color: #f86bff;
    animation: 1s linear 1s infinite alternate none running ${bulletPointParty};
    animation-delay: ${(props) => props.time};
  }
`;

export const FairContent = () => {
  return (
    <ContentContainer>
      Recent Fairs
      <List>
        <ListItem time={`0s`}>
          <a href="https://laabf2023.printedmatterartbookfairs.org/">
            LA Art Book Fair 2023
          </a>
        </ListItem>
        <s></s>
        <ListItem time={`.2s`}>
          <a href="https://bostonartbookfair.com/">Boston Art Book Fair 2023</a>
        </ListItem>
      </List>
    </ContentContainer>
  );
};
