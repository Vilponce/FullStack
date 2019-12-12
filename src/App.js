import React from 'react';
import logo from './logo.svg';
import HeaderApp from "./componentes/header"
import './App.css';
import "./CSS/header.css";
import Start from "./componentes/start"
import CasitaHome from "./componentes/footer"
import "./CSS/start.css";
import "./CSS/footer.css";
import {Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HeaderApp></HeaderApp>
        <Start></Start>
        <CasitaHome></CasitaHome>

        <Link to="/Ejemplo">Ir a Ejemplo</Link>
        
        {/* <p>
          Find your pecfect trip, designed by insiders who know and love their cities
        </p> */}
   
      </header>
    </div>
  );
}

export default App;
