import { Link } from "react-router-dom";
function Slide({ image }) {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="container mx-auto px-3 h-full flex flex-col items-start justify-center gap-3 md:gap-5">
        <h1 className="text-2xl md:text-6xl uppercase font-semibold text-white/75 sm:w-full md:w-4/5 leading-tight">
          {image.headline}
        </h1>
        <p className="text-sm md:text-xl text-violet-50/75 sm:w-full md:w-2/4">
          {image.detail}
        </p>
        <Link
          to={`/products/${image.catagory}`}
          className="bg-violet-700 text-violet-50 py-2 md:py-3 px-6 md:px-8 rounded-sm md:rounded-md inline-block mt-1 md:mt-5 uppercase text-xs md:text-xl font-normal md:font-semibold hover:bg-orange-500 hover:text-white/85 duration-300"
        >
          {image.cta}
        </Link>
      </div>
    </div>
  );
}

export default Slide;
