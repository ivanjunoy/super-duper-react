import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';

// https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} /> 
          </Routes>
      </Router>
    </>
  );
}

export default App;
