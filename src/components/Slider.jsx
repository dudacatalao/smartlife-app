import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";
import "../styles/index.css";
import { register } from "swiper/element/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";

export default function Slider() {
	const data = [
		{ id: "1", image: { Banner1 } },
		{ id: "2", image: { Banner2 } },
		{ id: "3", image: { Banner3 } },
	];

	return (
		<>
			<Swiper slidesPerView={1} 
      pagination={{clickable: true}}
      navigation
      >
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<img src={item.image} alt="slider" className="slide-item" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
