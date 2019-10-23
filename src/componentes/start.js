import React from 'react';
import flecha from "../imagenes/circled-right-2.png";
import "../CSS/start.css"

export default class Start extends React.Component {
    render(){ 
    return (
        <div>
           <h1 className="buscador">Start browsing</h1>
        <img src = { flecha }
        className = "flecha" / >
          <p className= "Want">Want to build your own Mytinerary?</p>
         </div>)
}
}

