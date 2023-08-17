import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import innerLoopText from '../../inner-loop-text.svg';
import './logo.css';
import { addEyeMotion } from './eyeMotion';

const LogoContainer = styled.div`
  position: relative;
  margin: 10px;
  height: 90px;
  width: 150px;
  justify-self: center;
`;

const Text = styled.img`
  position: absolute;
  pointer-events: none;
  top: -29px;
  max-width: 119px;
  margin-left: 16px;
`;

const leftColors = {
  purple: '#efcbff',
  yellow: '#eeff5b',
  blue: '#07dbff',
};

const rightColors = {
  lightBlue: '#adfffa',
  green: '#adffdf',
  deepPurple: '#dd86ff',
};

const ResetButton = styled.button`
  position: absolute;
  bottom: -100px;
  margin: auto;
  right: -30px;
  background-color: #ffffff;
  mix-blend-mode: multiply;
  border: 0;

  width: 30px;
  height: 30px;
  background-color: #464545;
  border-radius: 50%;
  cursor: pointer;
  transition: border 0.5s;

  &:hover {
    border: 4px solid white;
    transition: 0.5s;
  }
`;

const elementPositions: Record<
  string,
  { left: string; right: string; top: string }
> = {
  leftCircleRef: {
    top: '5px',
    left: '6px',
    right: '',
  },
  leftOutlineRef: {
    top: '0px',
    right: '0px',
    left: '0px',
  },
  leftEyeOneRef: {
    top: '20px',
    right: '0px',
    left: '',
  },
  leftEyeTwoRef: {
    top: '20px',
    right: '0x',
    left: '',
  },
  rightCircleRef: {
    top: '5px',
    right: '',
    left: '69px',
  },
  rightOutlineRef: {
    top: '0px',
    left: '65px',
    right: '',
  },
  rightEyeOneRef: {
    top: '21px',
    right: '',
    left: '125px',
  },
  rightEyeTwoRef: {
    top: '21px',
    left: '97px',
    right: '',
  },
};

const rightColorArray = Object.values(rightColors);
const leftColorArray = Object.values(leftColors);

export const Logo = () => {
  const leftCircleRef = useRef<HTMLDivElement>(null);
  const leftOutlineRef = useRef<HTMLDivElement>(null);
  const leftEyeOneRef = useRef<HTMLDivElement>(null);
  const leftEyeTwoRef = useRef<HTMLDivElement>(null);

  const rightCircleRef = useRef<HTMLDivElement>(null);
  const rightOutlineRef = useRef<HTMLDivElement>(null);
  const rightEyeOneRef = useRef<HTMLDivElement>(null);
  const rightEyeTwoRef = useRef<HTMLDivElement>(null);

  const refs: Record<string, any> = {
    leftCircleRef,
    leftOutlineRef,
    leftEyeOneRef,
    leftEyeTwoRef,
    rightCircleRef,
    rightOutlineRef,
    rightEyeOneRef,
    rightEyeTwoRef,
  };

  const [rightIndex, setRightIndex] = useState(0);
  const [leftIndex, setLeftIndex] = useState(0);

  const [isMoved, setIsMoved] = useState(false);

  const colorCount = rightColorArray.length;

  const onLeftCircleClick = () => {
    if (leftCircleRef.current) {
      const nextState = leftIndex === colorCount ? 0 : leftIndex + 1;
      setLeftIndex(nextState);
      leftCircleRef.current.style.backgroundColor = leftColorArray[nextState];
    }
  };

  const onRightCircleClick = () => {
    if (rightCircleRef.current) {
      const nextState = rightIndex === colorCount ? 0 : rightIndex + 1;
      setRightIndex(nextState);
      rightCircleRef.current.style.backgroundColor = rightColorArray[nextState];
    }
  };

  const resetPosition = () => {
    Object.keys(refs).forEach((key) => {
      const element = refs[key].current;
      const elementStyles = elementPositions[key];
      element.style.left = elementStyles.left;
      element.style.top = elementStyles.top;
      element.style.right = elementStyles.right;
    });

    setIsMoved(false);
  };

  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach((draggable) => {
      draggable.addEventListener('mouseup', () => {
        setIsMoved(true);
      });
    });

    addEyeMotion();
  }, []);

  return (
    <LogoContainer>
      {isMoved && <ResetButton onClick={resetPosition}></ResetButton>}
      <Text src={innerLoopText} />
      <div
        ref={leftOutlineRef}
        className='left-outline eye-left draggable'
      ></div>
      <div
        onMouseEnter={onLeftCircleClick}
        ref={leftCircleRef}
        className='left-fill eye-left draggable'
      ></div>
      <div
        ref={leftEyeOneRef}
        className='eye pupil-outline-left draggable'
      ></div>
      <div
        ref={leftEyeTwoRef}
        className='eye pupil-outline-left-two draggable'
      ></div>

      <div
        ref={rightOutlineRef}
        className='right-outline eye-left draggable'
      ></div>
      <div
        ref={rightCircleRef}
        onMouseEnter={onRightCircleClick}
        className='right-fill eye-right draggable'
      ></div>
      <div
        ref={rightEyeOneRef}
        className='eye pupil-outline-right draggable '
      ></div>
      <div
        ref={rightEyeTwoRef}
        className='eye pupil-outline-right-two draggable '
      ></div>
    </LogoContainer>
  );
};
