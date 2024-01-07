// import logo from "./logo.svg";
import "../css/App.css";
import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>RobotFriends</h1>
      <SearchBox />
      <CardList robots={robots}></CardList>
    </div>
  );
};

export default App;
