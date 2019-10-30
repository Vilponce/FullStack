import React from 'react';
import logo from './imagenes/MYtineraryLogo.png';

class login extends React.Component{
    render(){
       return(
         <div>
          <img src={logo} className="Logo"/>
         
          <form>
            <input placeholder="User" type="name" />
            <input placeholder="Password" type="email" />
            <button onClick={this.onSubmit}>LOGIN</button>
          </form>
      </div>
       )
    }
}
export default login