import React from "react";
// import sect_2_img from '../../assets/sect_2img.png';
import Homecateg from "../../components/homecateg";
import c from './style.module.scss'
import TextCard from "../../components/TextCard";

function HomePage() {
    return (
        <div> 
            <div>
                <div>
                    <div className={c.homeContainer}>
                        <TextCard btnCN={'red'}    subtitle={"КОРОТКО О НАС"} title={"Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше."} text={'OOO ENGINEERING Avant Metal Group - компания, которая зарекомендовала себя как надежного и ответственного производителя. Также, тесно сотрудничает с различными локальными и лидирующими зарубежными компаниями в таких странах как Корея, Турция, Китай, Россия.'}/>
                    </div>
                    <div>
                        {/* <img src={} alt="" /> */}
                    </div>
                </div> 
            </div>
            <div className={c.homeContainer}>   
                <Homecateg  />
            </div>
        </div>
    );
}

export default HomePage;
