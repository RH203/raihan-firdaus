import {createBrowserRouter} from "react-router-dom";
import App from "../pages/_layout/_app.jsx";
import {LandingPage} from "../pages/index.js";


export const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "",
        element: <LandingPage/>
      }
    ]
  }
]);