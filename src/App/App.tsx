import React from 'react';
import './App.css';
import { NavBar } from '../Components/Navbar';
import { VideoScreen } from '../Components/VideoScreen';
import { Biography } from '../Components/Pages/Biography';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../Components/Pages/Home/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/boys" element={<Biography/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
