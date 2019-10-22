import React from 'react';
import logo from './logo.svg';
import HeaderApp from "./componentes/header"
import './App.css';
import "./CSS/header.css";
import Start from "./componentes/start"
import CasitaHome from "./componentes/footer"
import "./CSS/start.css";
import "./CSS/footer.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HeaderApp></HeaderApp>
        <Start></Start>
        <CasitaHome></CasitaHome>

        {/* <p>
          Find your pecfect trip, designed by insiders who know and love their cities
        </p> */}
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
