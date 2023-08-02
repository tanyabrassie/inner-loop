import './App.css';
import { Content } from './components/Content';
// import { Footer } from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div id='screen' className='appContainer'>
      <div className='App'>
        <Header />
        <Content />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
