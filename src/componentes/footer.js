import React from 'react';
import casita from "../imagenes/homeIcon.png";
import "../CSS/footer.css"

class CasitaHome extends React.Component {
  render(){ 
  return (
      <div>
        <div className= "losLinks">
        <p>Log in</p>
        <p>Create Account</p>
        </div>
        <img src = { casita }
        className = "casita" / >
      </div>)
  }
}

export default CasitaHome;

