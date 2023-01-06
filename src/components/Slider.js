import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7649578/pexels-photo-7649578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Capture Lifelike Images with Our DSLR Cameras",
    detail:
      "Take your photography to the next level with a DSLR camera from our selection. These professional-grade cameras are perfect for capturing crisp, high-resolution images that will blow your friends and followers away. With a variety of brands and models to choose from, you'll find the perfect DSLR camera for your needs and budget.",
    cta: "Shop Now",
    catagory: "cameras",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1642718923354-81f09fb51d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    headline: "Upgrade Your TV Experience with a Smart TV",
    detail:
      "Experience the latest and greatest in home entertainment with a smart TV from our selection. These innovative TVs allow you to connect to the internet, stream your favorite shows and movies, and access a wide range of apps and games. With a variety of sizes and features to choose from, you'll find the perfect smart TV to fit your needs and budget.",
    cta: "Shop Now",
    catagory: "tvs",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Experience Exceptional Sound Quality with Our Headphones",
    detail:
      "Take your audio to the next level with a pair of headphones from our selection. Whether you're looking for wireless earbuds or over-ear headphones, you'll find a variety of styles and features to choose from. With top brands like Bose, Sony, and Beats, you can trust that you're getting top-quality sound and durability.",
    cta: "Shop Now",
    catagory: "headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/10389703/pexels-photo-10389703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Experience Exceptional Sound Quality with Our Headphones",
    detail:
      "Elevate your gaming experience with a top-quality video game controller from our selection. With a variety of styles and features to choose from, you'll find the perfect controller to fit your needs and budget. From classic wired controllers to sleek wireless options, we've got you covered.",
    cta: "Shop Now",
    catagory: "consoles",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay Connected and On-Trend with Our Smart Watches",
    detail:
      "Stay connected and on-trend with a smart watch from our selection. These innovative devices allow you to stay connected to your phone, track your fitness, and even make payments right from your wrist. With a variety of styles and features to choose from, you'll find the perfect smart watch to fit your needs and budget.",
    cta: "Shop Now",
    catagory: "smart-watches",
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
