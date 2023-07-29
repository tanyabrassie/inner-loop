import styled, { keyframes } from 'styled-components';
import spaceTrash from './images/space-trash.png';

const ContentContainer = styled.div`
  padding: 0 20px 20px;
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
  width: 100%;

  transform: rotate(1deg);
  mix-blend-mode: multiply;
  animation: 1s infinite alternate-reverse ${imageRotate};
`;

export const NewsContent = () => {
  return (
    <ContentContainer>
      <Image src={spaceTrash} />
      Space trash is here! A new zine about the consequences of space
      exploration.
    </ContentContainer>
  );
};
