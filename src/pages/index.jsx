import { Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Project from "./Project";
import Partners from "./Partners";
import Production from "./Production";
import Service from "./Service";

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
    path: "/service",
    element: <Service />,
  },
  {
    id: "4",
    path: "/production",
    element: <Production />,
  },
  {
    id: "5",
    path: "/partners",
    element: <Partners />,
  },
  {
    id: "6",
    path: "/project",
    element: <Project />,
  },
  {
    id: "7",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: "8",
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
