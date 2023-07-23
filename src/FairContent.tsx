import styled from 'styled-components';
import spaceTrash from './images/space-trash.png';

const ContentContainer = styled.div`
  /* width: 100%;
  height: 100%;
  overflow: scroll; */
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

export const FairContent = () => {
  return (
    <ContentContainer>
      Upcoming Fairs!
      <ul>
        <li>LA Art Book Fair 2023</li>
        <li>Boston Art Book Fair 2023</li>
      </ul>
    </ContentContainer>
  );
};
