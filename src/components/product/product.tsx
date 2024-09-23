import "./product.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";

export default function Product({ product }: any) {
  // console.log(product);

  
  return (
    <div className="product-container">
      <span>
        <div className="product-fon">
            <IoHeartOutline />
          <img src={product.photo} alt="" />
        </div>
        <p>{product.categoryName}</p>
        <p>{product.name}</p>
      </span>

      <span>
        <p>
          <b>{product.price} &#1423;</b>
        </p>
        <span>
          <AiOutlinePlus />
        </span>
      </span>
    </div>
  );
}
