"use client";
import { useDispatch, useSelector } from "react-redux";
import Authentication from "../auth/auth";
import Categories from "../categories/categories";
import "./header.scss";
import HeaderBottom from "./headerBottom";
import HeaderCenter from "./headerCenter";
import HeaderTop from "./headerTop";
import { RootState } from "@/app/store/store";
import Search from "../search/search";
import { useEffect } from "react";
import { changeLanguage } from "@/app/store/translation";

export default function Header() {
  const showAuthBool = useSelector(
    (state: RootState) => state.utils.showAuthBool
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("langId")) {
      dispatch(changeLanguage(1))
    }
    else{
      dispatch(changeLanguage(localStorage.getItem('langId')));

    }
  }, []);

  return (
    <header>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
      <Categories />
      {showAuthBool && <Authentication />}
      <Search />
    </header>
  );
}
