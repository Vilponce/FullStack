import React from 'react';
import casita from "../imagenes/homeIcon.png";
import "../CSS/footer.css"
import {Link} from 'react-router-dom'


class CasitaHome extends React.Component {
  render(){ 
  return (
      <div>
        <div className= "losLinks">
        <Link to= "/login">Login</Link>
        <Link to= "/CreateAccount">Create Account</Link>
      
        </div>
        <img src = { casita }
        className = "casita"/>
      </div>)
     

  }
}

export default CasitaHome;

