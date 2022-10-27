import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseLeft from "./CourseLeft";
import CourseRight from "./CourseRight";
import { AuthContext } from "./AuthProvider";
import "./Course.css";

const Course = () => {
  const { courses } = useContext(AuthContext);
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CourseLeft></CourseLeft>
        </Col>
        <Col lg="9">
          <h1 style={{textAlign:'center',marginBottom:'20px'}}>Courde Details</h1>
          <div
            className="course"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "10px",
            }}
          >
          
            {courses.map((course) => (
              <CourseRight key={course.id} course={course}></CourseRight>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
