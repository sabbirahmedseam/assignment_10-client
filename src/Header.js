import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import pic from "./images/edtech.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [tab, setTab] = useState(true);
  const handleTab = (event) => {
    setTab(!tab);
    console.log(event);
  };
  const handleOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <Navbar bg="light" variant="light">
      <Image style={{ height: "30px" }} rounded src={pic}></Image>
      <Navbar.Brand href="#home">Coding-tutorial</Navbar.Brand>

      <div onClick={handleTab}>
        {tab ? <Button>Light</Button> : <Button>Dark</Button>}
      </div>
      {/* {<h5>{user?.displayName}</h5>} */}
      {user?.uid ? (
        <Button onClick={handleOut}>LogOut</Button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {user?.uid ? (
        <Image title={user?.displayName}
          style={{ height: "40px" }}
          roundedCircle
          src={user?.photoURL}
        ></Image>
      ) : (
        "pic"
      )}

      <Link to="/course">Courses</Link>
      <Link to="#features">FAQ</Link>
      <Link to="/blog">Blog</Link>
    </Navbar>
  );
};

export default Header;
