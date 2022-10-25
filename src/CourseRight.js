import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AuthContext } from "./AuthProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseRight = () => {
  const { courses } = useContext(AuthContext);
  console.log(courses);

  return (
    <div>
      {courses.map((course) => (
        <Card key={course.id}>
          <p>{course.id}</p>
          <Card.Img style={{ width: "100%" }} variant="top" src={course.img} />
          <Card.Body>
            <Card.Title>{course.title} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={`/course/${course.id}`}>
             
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CourseRight;
