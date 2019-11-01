import React from 'react';
import logo from '../imagenes/MYtineraryLogo.png';
import usuario from "../imagenes/usuario.png";
import "../CSS/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class HeaderApp extends React.Component{
  render(){
    return (
    <div className="contenedor">
      <img src={usuario} className="usuario"/>
      <img src={logo} className="Logo"/>
      <p className= "find">Find your pecfect trip, designed by insiders who know and love their cities</p>
    
      </div>)
  }
}

export default HeaderApp
