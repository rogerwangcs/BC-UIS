import React from 'react';

const CourseItem = (props) => {
  return (
    <tr onClick={() => props.addCourse(props.course)}>
      <th scope="row">{props.course.title}</th>
      <td>{props.course.code}</td>
      <td>{props.course.faculties}</td>
      <td>
        {props.course.day} : {props.course.start} - {props.course.end}
      </td>
      <td>{props.course.alert}</td>
      <td>
        <button type="button" className="btn btn-success">
          Register
        </button>
      </td>
    </tr>
  );
};

export default CourseItem;
