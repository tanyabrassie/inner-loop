import { useRef, useState } from 'react';
import styled from 'styled-components';
import innerLoopText from './inner-loop-text.svg';

const LogoContainer = styled.div`
  position: relative;
  margin: 10px;
  height: 90px;
  width: 150px;
`;

const Text = styled.img`
  position: absolute;
  top: -45px;
`;
export const Logo = () => {
  const leftCircleRef = useRef<HTMLDivElement>(null);
  const rightCircleRef = useRef<HTMLDivElement>(null);

  const colorsArray = ['red', 'blue', 'yellow'];

  const leftColorIndex = useState(0);
  const rightColorIndex = useState(1);

  //   const updateColorState = (currentIndex) => {
  //     if (currentIndex === colorsArray.length - 1) {

  //     }
  //   }

  const onLeftCircleClick = () => {
    console.log('leftCircle', leftCircleRef);
    if (leftCircleRef.current) {
      leftCircleRef.current.style.backgroundColor = 'red';
    }
  };

  return (
    <LogoContainer>
      <Text src={innerLoopText} />
      <div className='left-outline eye-left draggable'></div>
      <div
        onClick={onLeftCircleClick}
        ref={leftCircleRef}
        className='left-fill eye-left draggable'
      ></div>
      <div className='pupil-outline-left draggable'></div>
      <div className='pupil-left draggable'></div>

      <div className='right-outline eye-left draggable'></div>
      <div
        ref={rightCircleRef}
        className='right-fill eye-right draggable'
      ></div>
      <div className='pupil-outline-right draggable'></div>

      <div className='pupil-right draggable'></div>
    </LogoContainer>
  );
};
