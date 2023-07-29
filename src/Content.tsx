import styled from 'styled-components';
import { SectionBox } from './shared/SectionBox';
import { RecentPrintContent } from './RecentPrints';
import { NewsContent } from './NewsContent';
import { FairContent } from './FairContent';

const ContentSection = styled.main`
  padding: 40px;
  width: calc(100% - 5%);
  justify-content: center;

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
    position: relative;
  }
`;

export const Content = () => {
  return (
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
        <Fairs sectionNuggetTitle='fairs & things!'>
          <FairContent />
        </Fairs>
      </StickyColumn>
      <RecentPrints
        sectionNuggetTitle='new stuff!'
        sectionTitle='Recent Prints'
      >
        <RecentPrintContent />
      </RecentPrints>
    </ContentSection>
  );
};
