import styled, { keyframes } from "styled-components";

const ContentContainer = styled.div`
  padding: 30px 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

const wackyColors = keyframes`
  0% {
    background-color: #eec3f9;
 }

  100% {
    background-color: #aefaff;
  }
`;

const Button = styled.button<{ $margin: string }>`
  font-size: 14px;

  /* box-shadow: 0px 0px 32px 10px #cdffe98c; */
  padding: 8px 16px;
  font-family: monospace;
  border-radius: 16px;
  border: 2px solid #333;
  background-color: #eec3f9;
  margin: ${(props) => props.$margin};
  animation: ${wackyColors} infinite 1.5s alternate;
  transition:
    transform 1s,
    border-radius 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    filter: saturate(2);
    border-radius: 4px;
  }
`;

export const ServicesContent = () => {
  return (
    <ContentContainer>
      Have risograph printing needs?
      <Button $margin={"30px 0"}>Learn More</Button>
    </ContentContainer>
  );
};
