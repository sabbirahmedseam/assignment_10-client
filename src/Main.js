import React from "react";
import { Outlet } from "react-router-dom";
import Course from "./Course";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
  return (
    <div>
      
      <Header></Header>
     
     <Outlet></Outlet>
    </div>
  );
};

export default Main;
