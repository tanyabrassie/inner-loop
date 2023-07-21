import styled from 'styled-components';
import { SectionBox } from './shared/SectionBox';
import { RecentPrintContent } from './RecentPrints';
import { NewsContent } from './NewsContent';

const ContentSection = styled.main`
  padding: 5% 2%;
  height: 100%;
  width: calc(100% - 5%);
  justify-content: center;

  display: grid;
  margin: auto;

  grid-gap: 40px;

  /* grid-row-end: recent 3 */

  grid-template-areas: 'sticky recent';
  grid-template-columns: 35% 65%;
  /* grid-auto-rows: 200px 200px 200px 200px; */
`;

const RecentPrints = styled(SectionBox)`
  grid-area: recent;
`;

const News = styled(SectionBox)``;

const Services = styled(SectionBox)`
  /* grid-area: services; */
`;

const Fairs = styled(SectionBox)`
  /* grid-area: fairs; */
`;

const StickyColumn = styled.div`
  grid-area: sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  top: 0;
  align-self: start;
`;

export const Content = () => {
  return (
    <ContentSection>
      <StickyColumn>
        <News sectionNuggetTitle='extra extra!' sectionTitle='News'>
          <NewsContent />
        </News>

        <Services sectionNuggetTitle='series' sectionTitle='printing for you' />
        <Fairs sectionNuggetTitle='fairs & things!' sectionTitle='Events' />
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
