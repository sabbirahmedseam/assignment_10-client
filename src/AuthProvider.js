import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../src/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const googleSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signInPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signLog = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const authInfo = { courses, googleSign, signInPassword, signLog };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
