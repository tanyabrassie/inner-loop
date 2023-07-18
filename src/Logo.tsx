import { useRef } from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: relative;
  margin: 10px;
  height: 90px;
  width: 150px;
`;

export const Logo = () => {
  const leftCircleRef = useRef();
  const rightCircleRef = useRef();

  const onLeftCircleClick = () => {
    console.log('leftCircle', leftCircleRef);
  };

  return (
    <LogoContainer>
      <div className='left-outline eye-left draggable'></div>
      <div
        onClick={onLeftCircleClick}
        ref={leftCircleRef.current}
        className='left-fill eye-left draggable'
      ></div>
      <div className='pupil-outline-left draggable'></div>
      <div className='pupil-left draggable'></div>

      <div className='right-outline eye-left draggable'></div>
      <div
        ref={rightCircleRef.current}
        className='right-fill eye-right draggable'
      ></div>
      <div className='pupil-outline-right draggable'></div>

      <div className='pupil-right draggable'></div>
    </LogoContainer>
  );
};
