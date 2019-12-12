import React from 'react'
import logo from './imagenes/MYtineraryLogo.png';
import casita from "./imagenes/homeIcon.png";
import {connect} from 'react-redux';
const mapStatetoProps=(state)=>{
  console.log(state);
  
  return {
      algo:state.algo
  }
}

class CreateAcount extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <img src={logo} className="Logo"/>
        <h1>{this.props.algo}</h1>
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
export default connect(mapStatetoProps,null)(CreateAcount)

