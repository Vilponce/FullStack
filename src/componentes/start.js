import React from 'react';
import flecha from "../imagenes/circled-right-2.png";
import "../CSS/start.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';




export default class Start extends React.Component {
    render(){ 
    return (
        <div>
           <h1 className="buscador">Start browsing</h1>
        <img src = { flecha }
        className = "flecha" / >
          <p className= "Want">Want to build your own Mytinerary?</p>

         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src= {require("../imagenes/Roma.jpg")}
      alt="Roma"
    />
    <Carousel.Caption>
      <h3>Roma</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src={require("../imagenes/NY.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src={require("../imagenes/Amsterdam.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
          



         </div>)
}
}

