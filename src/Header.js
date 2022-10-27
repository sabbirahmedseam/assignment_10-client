import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import pic from "./images/edtech.png";
import "../src/Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [tab, setTab] = useState(true);
  const handleTab = (event) => {
    setTab(!tab);

  };
  const handleOut = () => {
    logOut().then(() => {});
    navigate("/login").catch((error) => console.log(error));
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px",
      }}
    >
      <div>
        <Image style={{ height: "30px" }} rounded src={pic}></Image>
        <Navbar.Brand style={{ color: "orangeRed" }}>
          Coding-tutorial
        </Navbar.Brand>
      </div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "700",
            marginRight: "15px",
          }}
          to="/course"
        >
          Courses
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "700",
            marginRight: "15px",
          }}
          to="#features"
        >
          FAQ
        </Link>
        <Link style={{ textDecoration: "none", fontWeight: "700" }} to="/blog">
          Blog
        </Link>
      </div>

      <div onClick={handleTab}>
        {tab ? <Button>Light</Button> : <Button>Dark</Button>}
      </div>

      <div>
        {user?.uid ? (
          <Image
            title={user?.displayName}
            style={{ height: "40px", marginRight: "20px" }}
            roundedCircle
            src={user?.photoURL}
          ></Image>
        ) : (
          ""
        )}
        {user?.uid ? (
          <Button style={{ marginRight: "10px" }} onClick={handleOut}>
            LogOut
          </Button>
        ) : (
          <>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "15px",
              }}
              to="/login"
            >
              Login
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "15px",
              }}
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
