// import { Carousel } from "antd";
// import c from './style.module.scss'
// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
// const Slider = () => (
//   <Carousel  className={c.Carousel} autoplay>
//     <div className={c.Carousel__card}>
//       <img width={'100%'} style={contentStyle} src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ype8x0zkqbv239asgx9p/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg" alt="" />
//     </div>
//     <div>
//       <img width={'100%'} style={contentStyle}  src="https://www.gazeta.uz/media/img/2020/12/IFGs3f16070668110919_b.jpg" alt="" />
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );
// export default Slider;


import React from "react";
import { Carousel } from "antd";
import c from "./style.module.scss";
import Button from '../Button';
import Video from "../../assets/video.mp4";

const contentStyle = {
	width: "100%",
	height: "70vh",
	color: "blue",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

export default function Slider() {
	return (
		<div className={c.carousel}>
			<Carousel autoplay className={c.carouselDiv}>
				<div className={c.slide}>
					<video className={c.video} style={contentStyle} src={Video} muted autoPlay loop></video>
					<h1>tkani dlya platya</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<Button
						btnTitle={"Banner Button"}
						btnClassName="buttonDenger"
						link="/blabla"
					/>
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
					<h1>Tkani dlya doma</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<Button
						btnTitle={"bla Button"}
						btnClassName="buttonDenger"
						link="/blablass"
					/>
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
					<h1>furnitura </h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<Button
						btnTitle={"Banner Button"}
						btnClassName="buttonDenger"
						link="/blablass"
					/>
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
					<h1>gatovi fasoni</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<Button
						btnTitle={"Banner Button"}
						btnClassName="buttonDenger"
						link="/blablass"
					/>
				</div>
			</Carousel>
		</div>
	);
}

