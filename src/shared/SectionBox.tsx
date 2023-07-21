import styled from 'styled-components';
import { DisplayType } from '../Typography';

const Container = styled.section`
  position: relative;
  border: 3px solid black;
`;

const NuggetTitle = styled.strong`
  background-color: black;
  color: white;
  position: absolute;
  padding: 10px;
  font-family: monospace;
  left: 20px;
  top: -20px;
`;

const Title = styled.h1`
  font-size: 21px;
  padding: 40px 30px 0px;
  ${DisplayType}
`;

interface Props {
  sectionNuggetTitle: string;
  sectionTitle: string;
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
      <Title>{sectionTitle}</Title>
      {children}
    </Container>
  );
};
