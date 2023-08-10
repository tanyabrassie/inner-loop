import styled from 'styled-components';
import dataZooms from '../images/localhost.jpg';
import trangle from '../images/triangles-in-progress.png';
import spacehouse from '../images/SpaceHouse.jpg';
import society from '../images/society.jpg';
import natureBlur from '../images/nature-blur.jpg';

import spaceTrashSpread from '../images/space-trash-spread.png';
import posturePoster from '../images/posture-scan.png';
import learningPoster from '../images/learning.jpg';

const ContentContainer = styled.div`
  padding: 20px;
  background-color: black;
`;

const Image = styled.img`
  width: 100%;
  padding: 20px;
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
      <Image src={natureBlur} />
      <Image src={posturePoster} />
      <Image src={spacehouse} />
      <Image src={society} />
      <Image src={trangle} />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
