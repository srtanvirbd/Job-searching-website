import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import About from "./../About/About";
import Jobs from "../Jobs/Jobs";
import Contact from "../Contact/Contact";
import Favorite from "../Favorite/Favorite";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Notfound from "../Notfound/Notfound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default routes;
