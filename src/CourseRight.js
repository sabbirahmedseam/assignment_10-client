import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AuthContext } from "./AuthProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const CourseRight = ({ course }) => {
  const { courses } = useContext(AuthContext);

  return (
    <Card key={course?.id}>
      <Card.Img
        style={{ width: "100%", height: "313.11px" }}
        variant="top"
        src={course.img}
      />

      <Card.Body>
        <Card.Title>{course.title} </Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={`/course/${course.id}`}>
            <Button variant="primary">See details</Button>
          </Link>
          <p>
            <FaCaretRight></FaCaretRight>
            <b> {course.total_view}</b>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseRight;
