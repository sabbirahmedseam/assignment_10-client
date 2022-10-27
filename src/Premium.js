import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Premium = () => {
  const course = useLoaderData();

  const { id, framework, inventor, details, img, title, total_view, year } =
    course;
  return (
    <div>
      <Card style={{ width: "30%", margin: "0 auto" }}>
        
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <b>Framework:{framework}</b> <br />
          <b>{inventor}</b>
          <Card.Text>We will provide you the best course with the popular framework...</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/course">
              <Button variant="primary">previous</Button>
            </Link>
           
            <Button>5500Tk</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Premium;
