import { Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export const routeConfig = [
  {
    id: "1",
    path: "/home",
    element: <HomePage />,
  },
  {
    id: "2",
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: "3",
    path: "/not-found",
    element: <NotFound />,
  },
  {
    id: "-1",
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    id: "-2",
    path: "*",
    element: <Navigate to={"/not-found"} />,
  },
];
