import React, { Component } from "react";
import "./sideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sideBar centerText">
        <h1 className="white">Side Bar</h1>
        {/* Sidebar content goes here */}
      </div>
    );
  }
}

export default SideBar;
