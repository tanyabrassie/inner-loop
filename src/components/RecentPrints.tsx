import styled from 'styled-components';
import dataZooms from '../images/data-zooms.jpg';
import trangle from '../images/triangles-in-progress.png';
import spaceTrashSpread from '../images/space-trash-spread.png';
import posturePoster from '../images/posture-scan.png';

const ContentContainer = styled.div`
  /* width: 100%;
  height: 100%; */
`;

const Image = styled.img`
  width: 100%;
`;

export const RecentPrintContent = () => {
  return (
    <ContentContainer>
      <Image src={dataZooms} />
      <Image src={spaceTrashSpread} />
      <Image src={posturePoster} />
      <Image src={dataZooms} />
      <Image src={trangle} />
    </ContentContainer>
  );
};
