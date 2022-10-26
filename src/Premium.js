import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {
  const course=useLoaderData();
  console.log(course);
    return (
        <div>
            <h2>premium{course.id}</h2>
            <Link to={`/course/${course.id}`}>
            <Button>previous</Button>
            </Link>
        </div>
    );
};

export default Premium;