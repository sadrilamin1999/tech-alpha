import { Link } from "react-router-dom";
function Slide({ image }) {
  return (
    <div className="slide " style={{ backgroundImage: `url(${image.src})` }}>
      <div className="container mx-auto h-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-6xl uppercase font-semibold text-white/75 w-4/5 leading-tight">
          {image.headline}
        </h1>
        <p className="text-xl text-violet-50/75 w-2/4">{image.detail}</p>
        <Link
          to={`/products/${image.catagory}`}
          className="bg-violet-700 text-violet-50 py-3 px-8 rounded-md inline-block mt-5 uppercase font-semibold hover:bg-orange-500 hover:text-white/85 duration-300"
        >
          {image.cta}
        </Link>
      </div>
    </div>
  );
}

export default Slide;
