import styled from 'styled-components';
import dataZooms from '../images/localhost.webp';
import trianglePile from '../images/triangle-pile.webp';
import spacehouse from '../images/SpaceHouse.webp';
import society from '../images/society.webp';
import natureBlur from '../images/nature-blur.webp';

import spaceTrashSpread from '../images/space-trash-spread.webp';
import posturePoster from '../images/posture-scan.webp';
import learningPoster from '../images/learning.webp';

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
      <Image src={trianglePile} alt='triangle pile poster image' />
      <Image
        loading='lazy'
        src={learningPoster}
        alt='image of Learning Poster'
      />
      <Image loading='lazy' src={dataZooms} alt='image of Data Zooms poster' />
      <Image
        loading='lazy'
        src={spaceTrashSpread}
        alt='image of Space Trash zine.'
      />
      <Image
        loading='lazy'
        src={natureBlur}
        alt='image of Nature Blur Poster'
      />
      <Image loading='lazy' src={posturePoster} alt='image of Poster poster' />
      <Image
        loading='lazy'
        src={spacehouse}
        alt='image of Space House poster'
      />
      <Image loading='lazy' src={society} alt='image of Society poster' />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
