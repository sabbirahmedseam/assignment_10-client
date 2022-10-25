import React from "react";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pic from "./images/edtech.png";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Image style={{ height: "30px" }} rounded src={pic}></Image>
      <Navbar.Brand href="#home">Coding-tutorial</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Courses</Nav.Link>
        <Nav.Link href="#features">FAQ</Nav.Link>
        <Nav.Link href="#pricing">Blog</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
