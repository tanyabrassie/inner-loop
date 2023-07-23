import styled from 'styled-components';
import spaceTrash from './images/space-trash.png';

const ContentContainer = styled.div`
  /* width: 100%;
  height: 100%;
  overflow: scroll; */
  padding: 0 20px 20px;
`;

const Image = styled.img`
  width: 100%;
`;

export const NewsContent = () => {
  return (
    <ContentContainer>
      <Image src={spaceTrash} />
      Space trash is here!
    </ContentContainer>
  );
};
