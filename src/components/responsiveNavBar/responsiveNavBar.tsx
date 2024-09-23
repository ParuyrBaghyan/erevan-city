'use client'
import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import "./responsiveNavBar.scss";

export default function ResponsiveNavBar() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  if (!isMobileView) return null; // Return null instead of an empty string

  return (
    <div className="responsiveNavBar-container">
      <div>
        <IoHomeOutline />
      </div>
      <div>
        <MdManageSearch />
      </div>
      <div>
        <IoCartOutline />
      </div>
      <div>
        <IoHeartOutline />
      </div>
      <div>
        <CiMenuBurger />
      </div>
    </div>
  );
}
