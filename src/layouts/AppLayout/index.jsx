import React from "react";
import { routeConfig } from "../../pages";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { routeGenerator } from "../../utils/routeGenerator";

function AppLayout() {
  return (
    <div className="layout">
      <Navbar />
      {routeGenerator(routeConfig)}
      <Footer />
    </div>
  );
}

export default AppLayout;
