import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

function App() {
  return (
    <div className=''>
      <Header />
      <YoutubeApiProvider>
        <Outlet />
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
