import React from "react";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import pic from "./images/edtech.png";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Image style={{ height: "30px" }} rounded src={pic}></Image>
      <Navbar.Brand href="#home">Coding-tutorial</Navbar.Brand>

      <Link to="/course">Courses</Link>
      <Link to="#features">FAQ</Link>
      <Link to="#pricing">Blog</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Navbar>
  );
};

export default Header;
