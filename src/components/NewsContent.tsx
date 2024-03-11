import styled, { keyframes } from "styled-components";
import featuredCover from "../images/toxic-lagoons-southern-edition-cover.jpg";

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

const storeLink =
  "https://store.innerloop.press/products/toxic-lagoons-southern-edition";

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
      <a href={storeLink}>
        <Image src={featuredCover} alt="image of Space Trash zine cover" />
      </a>
      Toxic Lagoons - Southern Edition is now available! The last in the Toxic
      Lagoons series, this risograph printed zine examines very polluted places
      called Superfund sites in the southern United States.
    </ContentContainer>
  );
};
