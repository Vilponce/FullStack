import React from 'react';
import flecha from "../imagenes/circled-right-2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import "../CSS/start.css"



export default class Start extends React.Component {
    render(){ 
    return (
        <div>
           <h1 className="buscador">Start browsing</h1>
        <img src = { flecha }
        className = "flecha" / >
          <p className= "Want">Want to build your own Mytinerary?</p>

      <div className="formatoFoto">
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src= {require("../imagenes/Paris.jpg")}
      alt="Roma"
    />
    <Carousel.Caption>
      <h3>Paris</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src={require("../imagenes/Grecia.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Santorini</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src={require("../imagenes/Amsterdam.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Amsterdam</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
          
<Carousel.Item>
    <img
      className="d-block w-100 formatoFoto"
      src= {require("../imagenes/Egipto.jpg")}
      alt="Roma"
    />
    <Carousel.Caption>
      <h3>Roma</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  </div>
         </div>)
}
}

