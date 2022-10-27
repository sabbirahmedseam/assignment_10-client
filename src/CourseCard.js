import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseCard = () => {
  const course = useLoaderData();

  const { id, framework,inventor, details, img, title, total_view, year } = course;

  return (
    <div style={{ display: "flex", justifyContent: "center",marginTop:'50px', marginBottom:'30px' }}>
      <div ref={ref}>
        <Card style={{ width: '50%',margin:'0 auto' }}>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>

          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <b>Framework:{framework}</b> <br />
            <b>{inventor}</b>
            <Card.Text>{details}</Card.Text>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to="/course">
                <Button variant="primary">previous</Button>
              </Link>
              <Link to={`/premium/${id}`}>
                <Button variant="primary">Premium Access</Button>
              </Link>
             
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;
