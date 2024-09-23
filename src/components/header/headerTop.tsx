import Image from "next/image";
import "./header.scss";
import { IoIosArrowDown } from "react-icons/io";
import LanguageSwitcher from "./languageSwitcher/languageSwitcher";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <p>Աշխատանք</p>
        <p>Համագործակցություն</p>
        <p>Մեր մասին</p>
      </div>
      <div className="header-top-right">
        <div className="mode">
          <span>
            <img
              src="https://cdn1.iconfinder.com/data/icons/weather-429/64/weather_icons_color-01-512.png"
              alt="sun"
            />
          </span>
          <span>Light</span>
          <IoIosArrowDown />
        </div>
        <div className="language">
          <LanguageSwitcher />
        </div>
        <div className="currency">
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Armenian_dram_sign.svg"
              alt=""
            />
          </span>
          <span>AMD</span>

          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
