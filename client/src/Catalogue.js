import React, { Component } from 'react';
import './catalogue.css';

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
        courses: [
            {
                id: 47,
                name: "Class Name",
                department: "CSCI",
                number: "101",
                professor: "Professor Test",
                days: "M W F",
                time: "1 - 1:50 pm"
            },
            {
                id: 100,
                name: "Class Name 2",
                department: "CSCI 2",
                number: "1012",
                professor: "Professor Test 2",
                days: "M W F 2",
                time: "2 - 2:50 pm"
            }
        ]
    }
  }

  render() {
    return (
    <div >
        <table className="table table-dark">
            {}
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
                        <td>{course.department} {course.number}</td>
                        <td>{course.professor}</td>
                        <td>{course.days} : {course.time}</td>
                        <td><button type="button" className="btn btn-success">Register</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    );
  }
}

export default Catalogue;