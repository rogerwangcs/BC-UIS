import React, { Component } from "react";
import "./sideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sideBar">
      {this.props.selectedCourses.map(function(course) {
        return (
          <div className="myClass">
            {course.title}
          </div>
        );
      })}
      </div>
    );
  }
}

export default SideBar;
