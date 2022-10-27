import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Course from "./Course";
import CourseCard from "./CourseCard";
import Error from "./Error";
import First from "./First";
import LogIn from "./LogIn";
import Main from "./Main";
import Premium from "./Premium";
import PrivateRoute from "./PrivateRoute";
import Register from "./Register";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path:'/',element:<First></First>},
      { path: "/course", element: <Course></Course> },
      {
        path: "/course/:id",
        element: (
         
            <CourseCard></CourseCard>
        
        ),
        loader: ({ params }) =>
          fetch(`https://coding-server.vercel.app/courses/${params.id}`),
      },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/premium/:id",
        element:<PrivateRoute><Premium></Premium></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://coding-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
