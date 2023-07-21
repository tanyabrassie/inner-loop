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

  grid-template-areas: 'news recent' 'news recent' 'services recent' 'services recent' 'fairs recent' 'fairs recent';
  grid-template-columns: 35% 65%;
  grid-template-rows: repeat(6, 200px);
  /* grid-auto-rows: 200px 200px 200px 200px; */
`;

const RecentPrints = styled(SectionBox)`
  grid-area: recent;
`;

const News = styled(SectionBox)`
  position: sticky;
  top: 1rem;
  align-self: start;
  grid-area: news;
`;

const Services = styled(SectionBox)`
  grid-area: services;
`;

const Fairs = styled(SectionBox)`
  grid-area: fairs;
`;

export const Content = () => {
  return (
    <ContentSection>
      <RecentPrints
        sectionNuggetTitle='new stuff!'
        sectionTitle='Recent Prints'
      >
        <RecentPrintContent />
      </RecentPrints>

      <News sectionNuggetTitle='extra extra!' sectionTitle='News'>
        <NewsContent />
      </News>

      <Services sectionNuggetTitle='series' sectionTitle='printing for you' />
      <Fairs sectionNuggetTitle='fairs & things!' sectionTitle='Events' />
    </ContentSection>
  );
};
