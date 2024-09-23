import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./leftrightbtns.scss";

export default function LeftRightBtns({ slideLeft, slideRight }: any) {
  return (
    <div className="leftrightbtns">
      <span>
        <SlArrowLeft onClick={slideLeft} />
      </span>
      <span>
        <SlArrowRight onClick={slideRight} />
      </span>
    </div>
  );
}
