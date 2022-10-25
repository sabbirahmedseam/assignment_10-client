import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseLeft from "./CourseLeft";
import CourseRight from "./CourseRight";

const Course = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CourseLeft></CourseLeft>
        </Col>
        <Col lg="9">
          <CourseRight></CourseRight>
        </Col>
      </Row>
    </Container>
  
  );
};

export default Course;
