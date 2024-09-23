import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const language = useSelector(
  (state: RootState) => state.translation.language
);
export const pages = [
  {
    id: "1",
    name: 'Զեղչեր',
    path: "/products/discounts",
    img: "https://yerevan-city.am/assets/images/offers-icon.svg",
  },
  {
    id: "2",
    name: "Նորույթ",
    path: "/products/novelty",
    img: "https://yerevan-city.am/assets/images/news-icon.svg",
  },
  {
    id: "3",
    name: "Հավաքածուներ",
    path: "/collections",
    img: "",
  },
  {
    id: "4",
    name: "Բլոգ",
    path: "/blog",
    img: "",
  },
  {
    id: "5",
    name: "Պրոմո",
    path: "/promo",
    img: "",
  },
  {
    id: "6",
    name: "Մասնաճյուղեր",
    path: "/branches",
    img: "",
  },
  {
    id: "7",
    name: "Զեղչեր գործընկերներից",
    path: "/partner-discounts",
    img: "",
  },
];
