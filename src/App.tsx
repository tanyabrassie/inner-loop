import './App.css';
import { Content } from './Content';
import Header from './Header';

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
