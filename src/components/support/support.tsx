"use client";

import "./support.scss";
import { LuMessagesSquare } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { utilsActions } from "@/app/store/utilsSlice";
import { RootState } from "@/app/store/store";

export default function Support() {
  const showSupportBool = useSelector(
    (state: RootState) => state.utils.showSupportBool
  );

  const dispatch = useDispatch();

  function showSupportHandler() {
    dispatch(utilsActions.showSupport());
  }

  return (
    <div className="support-container">
      <div
        className="chat-box"
        style={{
          transform: `rotateX(${showSupportBool ? "0deg" : "90deg"})`,
          height: `${showSupportBool ? "300px" : "0px"}`,
        }}
      >
        <div className="chat-title">
          <span>
            <img
              src="https://yerevan-city.am/assets/images/city_support.jpg"
              alt=""
            />
            <span>Երևան Սիթի աջակցություն</span>
          </span>
          <SlArrowDown onClick={showSupportHandler} />
        </div>
        <div className="chat-messages"></div>
        <div className="chat-input">
          <FaInstagram />
          <span>
            <input type="text" placeholder="ՈՒղարկել հաղորդագրություն" />
            <IoSend />
          </span>
        </div>
      </div>
      <span onClick={showSupportHandler}>
        <LuMessagesSquare />
      </span>
    </div>
  );
}
