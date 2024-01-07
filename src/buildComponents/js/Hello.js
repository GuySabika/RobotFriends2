// import React, { Component } from "react";
import "../css/Hello.css";


const Hello = (props) => {
    return (
      <div className = "f1 tc">
        <h1>Hello World!</h1>
        <p>{props.greeting}</p>
        <p>don't forget your man {props.smulik}</p>
      </div>
    );


// just a simple 
//class Hello extends Component {
//   render() {
//     return (
//       <div className = "f1 tc">
//         <h1>Hello World!</h1>
//         <p>{this.props.greeting}</p>
//         <p>don't forget your man {this.props.smulik}</p>
//       </div>
//     );
//   }
}

export default Hello;
