import React from "react";
import { routeConfig } from "../../pages";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { routeGenerator } from "../../utils/routeGenerator";
import styles from "./layout.module.scss";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      {routeGenerator(routeConfig)}
      <Footer />
    </div>
  );
}

export default AppLayout;
