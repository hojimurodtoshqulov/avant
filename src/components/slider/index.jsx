import React from "react";
import { Carousel } from "antd";
import c from "./style.module.scss";
import Video from "../../assets/video.mp4";

const contentStyle = {
	width: "100%",
	height: "70vh",
	color: "blue",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

export default function Slider({coruseltext, coruseltitle}) {
	return (
		<div className={c.carousel}>
			<Carousel autoplay className={c.carouselDiv}>
				<div className={c.slide}>
					<video className={c.video} style={contentStyle} src={Video} muted autoPlay loop></video>
					<h1>{coruseltitle}</h1>
					<p>{coruseltext}</p>
				
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
					<h1>{coruseltitle}</h1>
					<p>{coruseltext}</p>
					<div>
				
					</div>
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
				<h1>{coruseltitle}</h1>
					<p>{coruseltext}</p>
				
				</div>
				<div className={c.slide}>
					<img
						style={contentStyle}
						src="https://cdnn21.img.ria.ru/images/07e6/08/1a/1812373086_816:0:3250:1730_1920x0_80_0_0_e1b12bb64ea11bf7a0a6e13186dc9ee4.jpg"
						alt=""
					/>
					<h1>{coruseltitle}</h1>
					<p>{coruseltext}</p>
					
				</div>
			</Carousel>
		</div>
	);
}

