import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/templates/Default";
import { One } from "../pages/one";
import { Two } from "../pages/two";
import { Three } from "../pages/three";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/three",
        element: <Three />,
      },
    ],
  },
]);
