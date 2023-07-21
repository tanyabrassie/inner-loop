import styled from 'styled-components';
import dataZooms from './images/data-zooms.jpg';

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
      <Image src={dataZooms} />

      <Image src={dataZooms} />

      <Image src={dataZooms} />
      <Image src={dataZooms} />
      <Image src={dataZooms} />
      <Image src={dataZooms} />
      <Image src={dataZooms} />
      <Image src={dataZooms} />
      <Image src={dataZooms} />
    </ContentContainer>
  );
};
