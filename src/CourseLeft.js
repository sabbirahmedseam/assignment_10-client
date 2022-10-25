import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const CourseLeft = () => {
    const {courses}=useContext(AuthContext);
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/courses")
//       .then((res) => res.json())
//       .then((data) => setCourses(data));
//   }, []);
  console.log(courses);
  return (
  <div>
    <h3>course name</h3>
    {courses.map((course) =><Link to={`/course/${course.id}`}  key={course.id}> <p >{course.title}</p></Link>)}
  </div>
  )
  
};

export default CourseLeft;
