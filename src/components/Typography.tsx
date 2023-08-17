import styled, { css } from 'styled-components';

export const DisplayType = css`
  font-family: 'alfarn-2', sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
`;

const JazzyLetters = styled.span`
  font-weight: 700;
  letter-spacing: 0.5px;

  &:hover {
    color: #464545;

    span {
      display: inline-block;
      color: #955ffb;
      transform: rotate(10deg);
    }
  }
`;

export const JazzyText = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}): JSX.Element => {
  const textArray = text.split('');

  const JazzyText = textArray
    .map((letter, index) => {
      return index % 2 ? letter : <span key={index}>{letter}</span>;
    })
    .concat();
  return (
    <JazzyLetters className={className} onClick={onClick}>
      {JazzyText}
    </JazzyLetters>
  );
};

export const Link = styled.a`
  color: unset;
  text-decoration: none;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: border 0.2s;
  &:hover {
    border-bottom: 1px solid #464545;
  }
`;
