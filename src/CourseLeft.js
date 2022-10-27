import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const CourseLeft = () => {
    const {courses}=useContext(AuthContext);

  return (
  <div>
    <h1>course name</h1>
    {courses.map((course) =><Link style={{textDecoration:'none',color:'royalBlue',fontSize:'20px'}}  to={`/course/${course.id}`}  key={course.id}> <p >{course.title}</p></Link>)}
  </div>
  )
  
};

export default CourseLeft;
