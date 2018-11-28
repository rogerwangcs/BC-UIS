import React, { Component } from "react";
import "./catalog.css";

import CourseItem from "./CourseItem";

class Catalogue extends Component {
  render() {
    return (
      <div className="catalog">
        <form onSubmit={this.props.getCourses}>
          <div className="col-md-6">
            <h5>Department Code:</h5>
            <div>
              <button type="submit" className="submitButton btn btn-primary">
                Submit
              </button>
              <input
                type="text"
                className="form-control searchInput"
                id="department"
                aria-describedby="department"
                placeholder="Enter Department Code"
              />
            </div>
          </div>
        </form>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Class Name</th>
              <th scope="col">Number</th>
              <th scope="col">Professor</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Register?</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map(course => {
              return (
                <CourseItem course={course} addCourse={this.props.addCourse} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Catalogue;
