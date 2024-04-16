import { Carousel } from "@material-tailwind/react";
import Banner1 from '../images/banners/banner1.png'
import Banner2 from '../images/banners/banner2.png'
import Banner3 from '../images/banners/banner3.png'
 
export default function Slider() {
  return (
    <Carousel
      className="rounded-xl py-2"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={Banner1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Banner2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Banner3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}