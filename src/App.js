import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/HomePage'
import Login from './pages/Login'

function App() {
  const baseURL = process.env.REACT_APP_BASE_URL
  console.log(baseURL)
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home baseURL={baseURL}/>}/>
        <Route path="/users/login" element={<Login baseURL={baseURL}/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
