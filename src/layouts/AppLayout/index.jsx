import React from "react";
import { routeConfig } from "../../pages";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { routeGenerator } from "../../utils/routeGenerator";
import styles from "./layout.module.scss";
import Slider from "../../components/slider";
import Homecateg from "../../components/homecateg";
import OurProject from "../../components/OurProject";
import Mincateg from "../../components/mincateg";


function AppLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      {routeGenerator(routeConfig)}
      {/* <Homecateg />
      <OurProject 
      subtitle={'УНИКАЛЬНЫЕ ЗДАНИЯ И СООРУЖЕНИЯ / МЕТАЛЛОКОНСТРУКЦИИ'}
      title={'Magic city'}
      line={'black'}
      img={'https://repost.uz/storage/uploads/8-1623848387-adves-post-material.png'}
      theme
      location={'Г. Ташкент, Улица Бобура, 174'}
      text={'Каркасная часть многих зданий внутри парка построен на основе металлоконструкций нашего производство.'}
       />
      <Slider  coruseltext={'HelloWorld'}  coruseltitle={'Helloworld'}/>
      <Mincateg  img={'https://cdn-icons-png.flaticon.com/512/99/99072.png'} title={'qwerty'} />
    <Mincateg  img={'https://cdn-icons-png.flaticon.com/512/99/99072.png'} title={'qwerty'} /> */}
    <Footer />
    </div>
  );
}

export default AppLayout;
