import React from "react";
import { routeConfig } from "../../pages";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { routeGenerator } from "../../utils/routeGenerator";
import styles from "./layout.module.scss";
import SimpleSlider from "../../components/slider";
import Slider from "react-slick";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      {routeGenerator(routeConfig)}
      <SimpleSlider />
      <Footer />
    </div>
  );
}

export default AppLayout;
