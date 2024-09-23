"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useGetAllCountriesMutation } from "@/app/services/countries";
import "./auth.scss";
import CountriesModule from "@/app/services/interface/countries";
import { TfiClose } from "react-icons/tfi";
import { utilsActions } from "@/app/store/utilsSlice";
import { useDispatch } from "react-redux";
import ClickOutside from "@/util/clickOutSide";

export default function Authentication() {
  const [getCountries, { isLoading, isError }] = useGetAllCountriesMutation();
  const [countries, setCountries] = useState<CountriesModule[]>([]);
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  function openAuthHandler() {
    dispatch(utilsActions.showAuthentiaction());
  }

  async function getCountriesData() {
    try {
      const data = await getCountries(null).unwrap(); // Using `.unwrap()` to handle errors correctly
      setCountries(data?.data?.list || []); // Ensure correct data handling
    } catch (error) {
      console.error("Failed to fetch countries:", error); // Error handling
    }
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  // Handle clicking outside the authentication modal
  const handleClickOutside = () => {
    openAuthHandler(); 
  };

  return (
    <div className="auth-container">
      <ClickOutside onClickOutside={handleClickOutside}>
        <div className="auth-main">
          <div className="auth-needs">
            <img
              src="https://yerevan-city.am/assets/images/logo.svg"
              width="60px"
              height="60px"
              alt="Logo"
            />
            <span>
              <h2>Մուտք գործել</h2>
              <p>Մուտքագրեք ձեր բջջային հեռախոսահամարը</p>
            </span>
            <span>
              <span>
                <PhoneInput
                  country={"am"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
                <input type="text" />
              </span>
              <button>Հաջորդ</button>
            </span>
          </div>
          <div className="auth-img">
            <TfiClose onClick={openAuthHandler} />
          </div>
        </div>
      </ClickOutside>
    </div>
  );
}
