import styled, { keyframes } from 'styled-components';
import './App.css';
import { Content } from './components/Content';
// import { Footer } from './components/Footer';
import Header from './components/Header';

const slideAway = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }`;

const LoadScreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: black;
  transform: translateX(100%);

  -webkit-animation: ${slideAway} 1.5s;
  -moz-animation: ${slideAway} 1.5s;
  animation: ${slideAway} 1.5s;
`;

function App() {
  return (
    <div id='screen' className='appContainer'>
      <div className='App'>
        <Header />
        <Content />
        {/* <LoadScreen></LoadScreen> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
