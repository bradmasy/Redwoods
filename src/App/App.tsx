import React from 'react';
import './App.css';
import { NavBar } from '../Components/Navbar';
import { VideoScreen } from '../Components/VideoScreen';
import { Biography } from '../Components/Pages/Biography';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../Components/Pages/Home/index';
import { FourZeroFourPage } from '../Components/Pages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<FourZeroFourPage/>}/>
          <Route path="/dates" element={<FourZeroFourPage/>}/>
          <Route path="/store" element={<FourZeroFourPage/>}/>
          <Route path="/media" element={<FourZeroFourPage/>}/>
          <Route path="/contact" element={<FourZeroFourPage/>}/>
          <Route path="*" element={<FourZeroFourPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
