import { CiMenuBurger } from "react-icons/ci";

export default function HeaderRespComp() {
  {
    return (
      <div className="headerRespComp">
        <span>Մուտք գործել</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Armenian_dram_sign.svg"
          alt=""
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/91-Armenia_ARM_Armenian_Yerevan_country_flag_-512.png"
          alt=""
        />
        <span>
        <CiMenuBurger />
        </span>
      </div>
    );
  }
}
