import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    updateUserProfile,
    googleSign,
    signInPassword,
    updateGithub,
    logOut,
  } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName: name, photoURL: photoURL };

    signInPassword(email, password)
      .then((result) => {
        form.reset();
        toast("register successfully");
        const user = result.user;

        updateUserProfile(profile).then((result) => {});

        logOut().catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  const handleGmail = () => {
    googleSign(provider)
      .then((result) => {
        toast("register successfully");
        const user = result.user;
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  const handleGit = () => {
    updateGithub(gitProvider)
      .then((result) => {
        toast("register successfully");
        const user = result.user;

        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter PhotoURL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p style={{ color: "red" }}>{error}</p>
        <Button
          style={{ marginRight: "15px" }}
          onClick={handleGmail}
          variant="outline-success"
        >
          Log in with gmail
        </Button>

        <Button variant="outline-success" onClick={handleGit}>
          Log in with github
        </Button>

        <div style={{ marginTop: "5px" }}>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <span>
            Already have an account <Link to="/login">Login here</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Register;
