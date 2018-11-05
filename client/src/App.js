import React, { Component } from "react";
import "./App.css";

import SideBar from "./SideBar.js";
import SearchBar from "./SearchBar.js";
import Catalog from "./Catalog.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <SearchBar />
        <Catalog />
        {/* <div className="mainContent">
        </div> */}
      </div>
    );
  }
}

export default App;
