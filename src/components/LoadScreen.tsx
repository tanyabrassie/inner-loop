import styled, { keyframes } from 'styled-components';

const slideAway = keyframes`
  0% {
    transform: translateX(0);
    //box-shadow: 24px 4px 84px 100px #fffffff8;

  }
  100% {
    transform: translateX(100%);
   ///box-shadow: 24px 4px 84px 10px #ffffffac;
  }`;

const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: black;
  transform: translateX(122%);
  //box-shadow: 24px 4px 84px 100px #fffffff8;

  animation-delay: 0.3s;
  animation: ${slideAway} 1.3s;
`;

export const LoadScreen = () => {
  return <LoadingScreen className='loaders'></LoadingScreen>;
};
