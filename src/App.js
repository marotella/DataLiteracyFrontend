import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Login from ./pages/Login

function App() {
  const baseURL = process.env.REACT_APP_BASE_URL
  console.log(baseURL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
