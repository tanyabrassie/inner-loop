import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div id='screen' className='appContainer'>
      <div className='App'>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
