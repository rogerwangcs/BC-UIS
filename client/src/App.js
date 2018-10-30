import React, { Component } from 'react';

import SideBar from "./SideBar.js"
import SearchBar from "./SearchBar.js"
import Catalogue from "./Catalogue.js"

class App extends Component {
  render() {
    return (
      <div className="App">
       BC UIS App
        <Catalogue/>
        <SearchBar/>
        <SideBar/>
      </div>
    );
  }
}

export default App;
