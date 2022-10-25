import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const CourseCard = () => {
  const course = useLoaderData();
  console.log(course);
  const { id, inventor, details, img, title, total_view, year } = course;
  console.log(id);
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to="/course">
            
              <Button variant="primary">Go somewhere</Button>
            </Link>
            <Link to={`/premium/${id}`}>
              <Button variant="primary">Premium</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CourseCard;
