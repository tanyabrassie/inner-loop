import styled from 'styled-components';
import dataZooms from '../images/data-zooms.png';
import trangle from '../images/triangles-in-progress.png';
import spaceTrashSpread from '../images/space-trash-spread.png';
import posturePoster from '../images/posture-scan.png';
import learningPoster from '../images/learning.jpg';

const ContentContainer = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.strong`
  padding: 30px 10px;
  display: inline-block;
`;

export const RecentPrintContent = () => {
  return (
    <ContentContainer>
      <Image src={learningPoster} />
      <Image src={dataZooms} />
      <Image src={spaceTrashSpread} />
      <Image src={posturePoster} />
      <Image src={trangle} />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
