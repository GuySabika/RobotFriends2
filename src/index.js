import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import Hello from "./buildComponents/js/Hello.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// import Card from "./buildComponents/js/Card.js";
// import {robots} from "./buildComponents/js/robots.js";
// import CardList from "./buildComponents/js/CardList.js";
import Searchbar from "./buildComponents/js/Searchbar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // first lesson - hello world - write
  // <React.StrictMode>
  //   <h1>first lesson - hello world - write</h1>
  //   <Hello />
  // </React.StrictMode>

  // second lesson - props
  // <Hello smulik ={'this is smulik the king'} greeting={'Hello React Ninja!'}/>

  //third lesson - Card
  // <CardList robots={robots}></CardList>

  //fourth lesson - Searchbar
  <Searchbar></Searchbar>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
