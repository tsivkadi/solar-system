import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photos from './pages/Photos';
import Planets from './pages/Planets';
import Random from './pages/Random';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/solar-system' element={<Home/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='/:planet' element={<Planets /> } />
        <Route path='/random' element={<Random /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
