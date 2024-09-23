"use client";
import { SlArrowUp } from "react-icons/sl";
import "./toTop.scss";
import { useEffect, useState } from "react";

export default function ToTop() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  };

  return (
    <>
      <span
        className={`totop ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <SlArrowUp />
      </span>
    </>
  );
}
