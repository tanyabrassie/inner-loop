import styled from "styled-components";
import dataZooms from "../images/localhost.webp";
import trianglePile from "../images/triangle-pile.webp";
import spacehouse from "../images/SpaceHouse.webp";
import society from "../images/society.webp";
import natureBlur from "../images/nature-blur.webp";
import stretchPeach from "../images/stretch-peach.webp";
import toxicEarth from "../images/radioactive-land.webp";
import sexyBook from "../images/sexy-book.webp";
import spaceTrashSpread from "../images/space-trash-spread.webp";
import posturePoster from "../images/posture-scan.webp";
import learningPoster from "../images/learning.webp";
import eyePoster from "../images/eye-doctor.webp";

import userFriendly from "../images/user-friendly.png";
import eWasteSpread from "../images/e-waste-spread.png";

const ContentContainer = styled.div`
  padding: 20px;
  background-color: black;
  columns: 20rem;
`;

const Image = styled.img`
  width: 100%;
  padding: 20px;
`;

const Text = styled.strong`
  padding: 30px 10px;
  display: inline-block;
  // color: red;
`;

export const RecentPrintContent = () => {
  return (
    <ContentContainer>
      <Image loading="lazy" src={toxicEarth} alt="Radioactive Land Poster" />

      <Image
        loading="lazy"
        src={eyePoster}
        alt="image of poster with an eye inspired imagery."
      />

      <Image
        loading="lazy"
        src={spaceTrashSpread}
        alt="image of Space Trash zine."
      />

      <Image loading="lazy" src={posturePoster} alt="image of Poster poster" />

      <Image src={trianglePile} alt="triangle pile poster image" />
      <Image
        loading="lazy"
        src={stretchPeach}
        alt="image of Data Zooms poster"
      />

      <Image
        loading="lazy"
        src={learningPoster}
        alt="image of Learning Poster"
      />

      <Image
        loading="lazy"
        src={sexyBook}
        alt="image of poster with an illustration of a sexy book on it."
      />

      <Image
        loading="lazy"
        src={natureBlur}
        alt="image of Nature Blur Poster"
      />

      <Image
        loading="lazy"
        src={eWasteSpread}
        alt="scan of an inside spread of e-waste zine."
      />

      <Image loading="lazy" src={dataZooms} alt="image of Data Zooms poster" />
      <Image
        loading="lazy"
        src={spacehouse}
        alt="image of Space House poster"
      />

      <Image
        loading="lazy"
        src={userFriendly}
        alt="scan of an user friendly zine cover."
      />
      <Image loading="lazy" src={society} alt="image of Society poster" />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
