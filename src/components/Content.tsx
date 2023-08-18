import styled, { keyframes } from 'styled-components';
import { SectionBox } from './SectionBox';
import { RecentPrintContent } from './RecentPrints';
import { NewsContent } from './NewsContent';
import { FairContent } from './FairContent';

const ContentSection = styled.main`
  padding: 40px;
  width: calc(100% - 5%);
  justify-content: center;
  position: relative;

  display: grid;
  margin: auto;

  grid-gap: 40px;

  grid-template-areas: 'recent sticky';
  grid-template-columns: 70% 30%;

  @media screen and (max-width: 800px) {
    display: unset;
    padding: 0px;
  }
`;

const RecentPrints = styled(SectionBox)`
  grid-area: recent;
`;

const News = styled(SectionBox)``;

// const Services = styled(SectionBox)``;

const Fairs = styled(SectionBox)``;

const StickyColumn = styled.div`
  grid-area: sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  top: 40px;
  align-self: start;

  @media screen and (max-width: 800px) {
    /* position: relative; */
    margin: 40px 0;
  }
`;

const slideAway = keyframes`
  0% {
    transform: translateX(0);
    //box-shadow: 24px 4px 84px 100px #fffffff8;

  }
  100% {
    transform: translateX(100%);
   ///box-shadow: 24px 4px 84px 10px #ffffffac;

  }`;

const LoadScreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: black;
  transform: translateX(122%);
  //box-shadow: 24px 4px 84px 100px #fffffff8;

  animation-delay: 0.3s;
  animation: ${slideAway} 1.5s;
`;

export const Content = () => {
  return (
    <>
      <LoadScreen></LoadScreen>
      <ContentSection>
        <StickyColumn>
          <News sectionNuggetTitle='extra extra!'>
            <NewsContent />
          </News>
          {/* 
        <Services
          sectionNuggetTitle='printing'
          sectionTitle='printing for you'
        /> */}
          <Fairs sectionNuggetTitle='fairs & things'>
            <FairContent />
          </Fairs>
        </StickyColumn>
        <RecentPrints sectionNuggetTitle='featured'>
          <RecentPrintContent />
        </RecentPrints>
      </ContentSection>
    </>
  );
};
