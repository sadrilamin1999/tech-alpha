import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utlities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl">
      <div className="img">
        <img src={product.image} alt="{product.name}" />
      </div>
      <div className="texts  flex flex-col gap-2 px-5 pb-5">
        <span className="catagory-tag uppercase text-xs font-semibold tracking-widest text-orange-500">
          {product.catagory}
        </span>
        <h3 className="title text-xl font-medium h-[5.5rem]">{product.name}</h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product)}
            className=" uppercase bg-violet-500 text-violet-50 font-medium py-3 px-10 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
