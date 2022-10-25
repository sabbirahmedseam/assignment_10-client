import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseLeft from "./CourseLeft";
import CourseRight from "./CourseRight";
import { AuthContext } from "./AuthProvider";
import Stack from "react-bootstrap/Stack";

const Course = () => {
  const { courses } = useContext(AuthContext);
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CourseLeft></CourseLeft>
        </Col>
        <Col lg="9">
          {/* <CourseRight></CourseRight> */}
          <Stack  direction="horizontal" gap={3}>
            {courses.map((course) => (
              <CourseRight key={course.id} course={course}></CourseRight>
            ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
