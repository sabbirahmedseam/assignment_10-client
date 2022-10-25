import { createBrowserRouter } from "react-router-dom";
import Course from "./Course";
import CourseCard from "./CourseCard";
import Error from "./Error";
import LogIn from "./LogIn";
import Main from "./Main";
import Register from "./Register";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/course", element: <Course></Course> },
      {
        path: "/course/:id",
        element: <CourseCard></CourseCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
