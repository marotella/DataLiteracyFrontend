import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const baseURL = process.env.REACT_APP_BASE_URL
  console.log(baseURL)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home baseURL={baseURL}/>}/>
        <Route path="/login" element={<Login baseURL={baseURL}/>}/>
      </Routes>
    </div>
  );
}

export default App;
