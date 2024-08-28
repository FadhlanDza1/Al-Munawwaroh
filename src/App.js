
import './Style/App.css';
import Home from './Componen/home';
import FootNote from './Componen/footnote';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fasilitas from './Componen/fasilitas';
import Gallery from './Componen/galerry';
import VisiMisi from './Componen/visiMisi';
import Keunggulan from './Componen/keunggulan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fasilitas' element={<Fasilitas/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/visiMisi' element={<VisiMisi/>}/>
        <Route path='/keunggulan' element={<Keunggulan/>}/>
        <Route path='/contact' element={<FootNote/>}/>
      </Routes>
    </Router>
  );
}

export default App;
