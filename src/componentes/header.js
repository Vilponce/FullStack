import React from 'react';
import logo from '../imagenes/MYtineraryLogo.png';
import "../CSS/header.css"

class HeaderApp extends React.Component{
  render(){
    return (
    <div>
      <img src={logo} className="Logo"/>
      <p className= "find">Find your pecfect trip, designed by insiders who know and love their cities</p>
      </div>)
  }
}

export default HeaderApp
