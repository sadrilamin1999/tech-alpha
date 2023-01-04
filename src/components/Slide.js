import { Link } from "react-router-dom";
function Slide({ image }) {
  return (
    <div className="slide " style={{ backgroundImage: `url(${image.src})` }}>
      <div className="container mx-auto h-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-8xl uppercase font-semibold text-white/75">
          Lorem, ipsum dolor.
        </h1>
        <p className="text-xl text-violet-50/75 w-2/5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link className="bg-violet-700 text-violet-50 py-3 px-8 rounded-md inline-block mt-5">
          Lorem, ipsum
        </Link>
      </div>
    </div>
  );
}

export default Slide;
