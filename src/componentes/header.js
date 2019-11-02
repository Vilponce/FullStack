import React from 'react';
import logo from '../imagenes/MYtineraryLogo.png';
import usuario from "../imagenes/usuario.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {slide as Menu} from 'react-burger-menu'
import "../CSS/header.css"

class HeaderApp extends React.Component{
  render(){
    return (
    <div className="contenedor">
      <img src={usuario} className="usuario"/>


      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>

      <img src={logo} className="Logo"/>
      <p className= "find">Find your pecfect trip, designed by insiders who know and love their cities</p>
    
      </div>)
  }
}

export default HeaderApp
