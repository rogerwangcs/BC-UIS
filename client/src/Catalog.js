import React, { Component } from "react";
import "./catalog.css";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let url = "http://localhost:8080/course-info?department=";
    url += document.getElementById("department").value;
    fetch(url)
      .then(parts => parts.json())
      .then(parts => {
        this.setState({
          courses: parts
        });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="catalog">
        <form onSubmit={this.handleSubmit}>
          <label>
            Department
            <input type="text" id="department" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Class Name</th>
              <th scope="col">Number</th>
              <th scope="col">Professor</th>
              <th scope="col">Time</th>
              <th scope="col">Register?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(function(course) {
              return (
                <tr>
                  <th scope="row">{course.name}</th>
                  <td>
                    {course.department} {course.number}
                  </td>
                  <td>{course.professor}</td>
                  <td>
                    {course.days} : {course.start} - {course.end} PM
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Register
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Catalogue;
