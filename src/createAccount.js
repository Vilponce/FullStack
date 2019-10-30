import React from 'react'
import logo from './imagenes/MYtineraryLogo.png';
import casita from "./imagenes/homeIcon.png";

class CreateAcount extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <img src={logo} className="Logo"/>

        <form>
          <input placeholder="Name" type="name" />
          <input placeholder="Email" type="email" />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        <img src = {casita} className = "casita"/>
      </div>
    )
  }
}
export default CreateAcount
