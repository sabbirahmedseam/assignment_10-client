import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {
  const course=useLoaderData();
  console.log(course);
    return (
        <div>
            <h2>premium</h2>
            <Link></Link>
        </div>
    );
};

export default Premium;