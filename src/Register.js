import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const {
    verifyEmail,
    updateUserProfile,
    googleSign,
    signInPassword,
    updateGithub,
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
    // console.log(name, photoURL, email, password);

    signInPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(profile)
          .then((result) => {})
          .catch((error) => console.log(error));
        // verifyEmail()
        //   .then((result) => {})
        //   .catch((error) => console.log(error));
        // alert("check your email");
      })
      .catch((error) => console.log(error));
  };

  const handleGmail = () => {
    googleSign(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleGit = () => {
    updateGithub(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Full Name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter PhotoURL"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Button onClick={handleGmail}>Log in with gmail</Button>
        <Button onClick={handleGit}>Log in with github</Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Register;
