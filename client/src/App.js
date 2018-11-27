import React, { Component } from "react";
import "./App.css";

import SideBar from "./SideBar.js";
import SearchBar from "./SearchBar.js";
import Catalog from "./Catalog.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      selectedCourses: []
    };

    this.addCourse = this.addCourse.bind(this);
  }

  getCourses = (event) => {
    let url = "http://www.eaglevisionapp.com/api/";
    url += document.getElementById("department").value;
    fetch(url)
      .then(classes => classes.json())
      .then(classes => {
        this.setState({
          courses: classes.subjectList
        });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  }

  addCourse = (course) => {
    this.setState(prevState => ({
      selectedCourses: [...prevState.selectedCourses, course]
    }))
  }

  render() {
    return (
      <div className="App">
        <SideBar selectedCourses={this.state.selectedCourses}/>
        <SearchBar />
        <Catalog getCourses={this.getCourses} courses={this.state.courses} addCourse={this.addCourse}/>
        {/* <div className="mainContent">
        </div> */}
      </div>
    );
  }
}

export default App;
