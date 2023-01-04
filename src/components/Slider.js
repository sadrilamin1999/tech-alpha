import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7649578/pexels-photo-7649578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Digital camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/5197107/pexels-photo-5197107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // alt: "Super disply smart tv",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // alt: "Black and Silver Headphones on Black Surface",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/10389703/pexels-photo-10389703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // alt: "Navy Blue Toned Image of a Game Console",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/325871/pexels-photo-325871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // alt: "Close-up View of Black Background",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0
        ? data.length - 1
        : (previousSlide) => previousSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1
        ? 0
        : (previousSlide) => previousSlide + 1
    );
  };
  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute z-[1] text-gray-50 flex  gap-10 left-0 right-0 bottom-20 m-auto w-fit">
        <button
          onClick={previousSlide}
          className="prev-button h-10 w-14 bg-gray-700/50 flex justify-center items-center  hover:bg-white/75 hover:text-black duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-button h-10 w-14 bg-gray-700/50 flex justify-center items-center  hover:bg-white/75 hover:text-black duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
