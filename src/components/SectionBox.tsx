import styled from 'styled-components';
import { DisplayType } from './Typography';

const Container = styled.section`
  position: relative;
  border: 2px solid #464545;
  background-color: white;
`;

const NuggetTitle = styled.strong`
  background-color: #464545;
  border: 1px solid white;
  color: white;
  position: absolute;
  padding: 5px 10px;
  font-family: monospace;
  font-weight: normal;
  font-size: 11px;
  right: 20px;
  top: -12px;

  &::nth-letter(odd) {
    transform: rotate(20deg);
  }
`;

const Title = styled.h1`
  font-size: 21px;
  padding: 20px 30px 0px;
  ${DisplayType}
`;

interface Props {
  sectionNuggetTitle: string;
  sectionTitle?: string;
  className?: string;
  children?: JSX.Element;
}

export const SectionBox = ({
  sectionNuggetTitle,
  sectionTitle,
  className,
  children,
}: Props): JSX.Element => {
  return (
    <Container className={className}>
      <NuggetTitle>{sectionNuggetTitle}</NuggetTitle>
      {sectionTitle && <Title>{sectionTitle}</Title>}
      {children}
    </Container>
  );
};
