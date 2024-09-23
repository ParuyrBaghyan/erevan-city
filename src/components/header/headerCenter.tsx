"use client";
import "./header.scss";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import HeaderRespComp from "./respComps";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { utilsActions } from "@/app/store/utilsSlice";
import { searchActions } from "@/app/store/searchSlice";
import { RootState } from "@/app/store/store";
import { TfiClose } from "react-icons/tfi";
import { useGetSearchResultMutation } from "@/app/services/search";
import Link from "next/link";

export default function HeaderCenter() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [getSearchResult, { isLoading, isError }] =
    useGetSearchResultMutation();

  const showSearchContBool = useSelector(
    (state: RootState) => state.search.showSearchContBool
  );

  const dispatch = useDispatch();

  function openAuthHandler() {
    dispatch(utilsActions.showAuthentiaction());
  }

  function showSearchContainerHandler() {
    dispatch(searchActions.showSearchCont());
  }

  function closeSearchContHandler() {
    dispatch(searchActions.closeSearchCont());
  }

  async function searchValueHandler(value: string) {
    const data = await getSearchResult(value);
    dispatch(searchActions.getSearchResult(data?.data.data.products));
  }

  useEffect(() => {
    const win = window.innerWidth <= 768
    const handleResize = () => {
      setIsMobileView(win);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-center">
      <div className="header-center-left">
        {isMobileView ? (
          <div>
            <Link href="/">
              <img
                src="https://yerevan-city.am/assets/images/logo.svg"
                width="60px"
                height="60px"
                alt=""
              />
            </Link>
            <HeaderRespComp />
          </div>
        ) : (
          <Link href="/">
            <img
              src="https://yerevan-city.am/assets/images/logo.svg"
              width="60px"
              height="50px"
              alt=""
            />
          </Link>
        )}
        <input
          type="text"
          placeholder="Որոնում"
          onClick={showSearchContainerHandler}
          onChange={(e) => searchValueHandler(e.target.value)}
        />
        {showSearchContBool && <TfiClose onClick={closeSearchContHandler} />}
      </div>
      <div className="header-center-right">
        <span>
          <IoHeartOutline />
        </span>
        <span>
          <IoCartOutline />
        </span>
        <span onClick={openAuthHandler}>Մուտք գործել</span>
      </div>
    </div>
  );
}
