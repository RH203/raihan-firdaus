import {createBrowserRouter} from "react-router-dom";
import App from "../pages/_layout/_app.jsx";
import {BlogPage, LandingPage} from "../pages/index.js";
import {ErrorPage} from "../components/index.js";


export const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <BlogPage/>
      },
      {
        path: "about-me",
        element: <LandingPage/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
]);