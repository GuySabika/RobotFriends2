import React from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log(filteredrobots);
  };
  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (!this.state.robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredrobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
export default Searchbar;
