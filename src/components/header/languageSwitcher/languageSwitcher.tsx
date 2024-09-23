import { useDispatch } from "react-redux";
import { changeLanguage } from "@/app/store/translation";
import { useEffect, useState } from "react";
import { useGetTokenMutation } from "@/app/services/api";
import { getRegisterGuestModel } from "@/util/registerGuest";
import { IoIosArrowDown } from "react-icons/io";
import "./languageSwitcher.scss";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();

  const [selectedLang, setSelectedLang] = useState<number>(1); // Default value

  useEffect(() => {
    const langId = localStorage.getItem("langId");
    if (langId) {
      setSelectedLang(parseInt(langId));
    }
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languageCodes = [
    {
      id: 1,
      name: "English",
      img: "https://yerevan-city.am/assets/images/en-flag.png",
    },
    {
      id: 2,
      name: "Русский",
      img: "https://yerevan-city.am/assets/images/ru-flag.svg",
    },
    {
      id: 3,
      name: "Հայերեն",
      img: "https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/91-Armenia_ARM_Armenian_Yerevan_country_flag_-512.png",
    },
  ];

  const [getToken, { isLoading, isError }] = useGetTokenMutation();

  function changeLangHandler(langId: number) {
    setSelectedLang(langId);
    dispatch(changeLanguage(langId));
    setIsDropdownOpen(false);
    localStorage.setItem("langId", langId.toString());
    window.location.reload();
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      getToken(getRegisterGuestModel())
        .unwrap()
        .then((response) => {
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.error("Error fetching token:", error);
        });
    }
  }, [getToken]);

  return (
    <div className="custom-select">
      <div className="selected-lang" onClick={toggleDropdown}>
        <img src={languageCodes[selectedLang - 1].img} alt="flag" />
        <span>{languageCodes[selectedLang - 1].name}</span>
        <IoIosArrowDown />
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          {languageCodes.map((lang) => (
            <div
              key={lang.id}
              className="dropdown-item"
              onClick={() => changeLangHandler(lang.id)}
            >
              <img src={lang.img} alt={`${lang.name} flag`} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
