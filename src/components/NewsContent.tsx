import styled, { keyframes } from "styled-components";
import spaceTrash from "../images/space-trash-cover.webp";

const ContentContainer = styled.div`
  padding: 0 20px 20px;
  min-height: 300px;
`;

const imageRotate = keyframes`
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1deg);
  }
`;

const Image = styled.img`
  width: 80%;
  display: block;
  margin: auto;

  transform: rotate(1deg);
  mix-blend-mode: multiply;
  animation: 1s infinite alternate-reverse ${imageRotate};

  &:hover {
    filter: saturate(1.3);
    translate: 0 2px;
    animation-duration: 0.2s;
  }
`;

export const NewsContent = () => {
  return (
    <ContentContainer>
      <a href="https://store.innerloop.press/products/space-trash">
        <Image src={spaceTrash} alt="image of Space Trash zine cover" />
      </a>
      Space trash is here! A new zine about the consequences of space
      exploration.
    </ContentContainer>
  );
};
