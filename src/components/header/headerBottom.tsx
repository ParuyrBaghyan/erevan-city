"use client";
import "./header.scss";
import { MdOutlineSort } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { utilsActions } from "@/app/store/utilsSlice";
import NavLink from "@/util/NavLink/navlink";
// import { pages } from "@/util/listOfPages";
import { RootState } from "@/app/store/store";

export default function HeaderBottom() {
  const language = useSelector(
    (state: RootState) => state.translation.language
  );

  const pages = [
    {
      id: "1",
      name: language.header[0].name || "Զեղչեր", // Default fallback if language data is not loaded
      path: "/products/discounts",
      img: "https://yerevan-city.am/assets/images/offers-icon.svg",
    },
    {
      id: "2",
      name: language.header[1]?.name || "Նորույթ",
      path: "/products/novelty",
      img: "https://yerevan-city.am/assets/images/news-icon.svg",
    },
    {
      id: "3",
      name: language.header[2]?.name || "Հավաքածուներ",
      path: "/collections",
      img: "",
    },
    {
      id: "4",
      name: language.header[3]?.name || "Բլոգ",
      path: "/blog",
      img: "",
    },
    {
      id: "5",
      name: language.header[4]?.name || "Պրոմո",
      path: "/promo",
      img: "",
    },
    {
      id: "6",
      name: language.header[5]?.name || "Մասնաճյուղեր",
      path: "/branches",
      img: "",
    },
    {
      id: "7",
      name: language.header[6]?.name || "Զեղչեր գործընկերներից",
      path: "/partner-discounts",
      img: "",
    },
  ];

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(utilsActions.showCtg());
  };

  return (
    <div className="header-bottom">
      <div className="categories-btn" onMouseEnter={handleMouseEnter}>
        <MdOutlineSort />
        <span>Կատեգորիաներ</span>
        <IoIosArrowDown />
      </div>
      <div className="pages">
        {pages.map((page) => {
          return (
            <NavLink key={page.id} href={page.path}>
              <img src={page.img} />
              {page.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
