"use client";
import "./slider.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState } from "react";
import BannerModule from "@/app/services/interface/bannerModule";
import { useGetBannersMutation } from "@/app/services/banner";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [getBanners, { isLoading, isError }] = useGetBannersMutation();
  const [banners, setBanners] = useState<BannerModule[]>([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  async function getBannersData() {
    const data = await getBanners(null);
    setBanners([...data?.data?.data?.banners, ...data?.data?.data?.banners]);
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        goToNextSlide();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  useEffect(() => {
    getBannersData();
  }, []);

  // Move the logic to handle thumbnail slider updates within useEffect
  useEffect(() => {
    const thumbnailSlider = document.querySelector(
      ".thumbnail-slider"
    ) as HTMLElement;

    if (thumbnailSlider && !isMobileView) {
      // Apply only if not in mobile view
      const maxTranslateX = ((banners.length - 6) * 100) / 5;
      const translateX = Math.min((currentIndex * 100) / 5, maxTranslateX);
      thumbnailSlider.style.transform = `translateX(-${translateX}%)`;
    }
  }, [currentIndex, banners, isMobileView]);

  return (
    <div className="slider-container">
      <div className="main-box">
        <div
          className="slider-top"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span onClick={goToPreviousSlide}>
            <IoIosArrowBack />
          </span>
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {banners.map((banner: BannerModule, i: number) => (
              <img key={i} src={banner.path} alt={`Slide ${i + 1}`} />
            ))}
          </div>
          <span onClick={goToNextSlide}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="slider-bottom">
          <div className="thumbnail-slider">
            {!isMobileView &&
              banners.map((banner: BannerModule, index: number) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className={` ${index === currentIndex ? "fon" : ""}`}
                  ></div>
                  <img src={banner.path} alt={`Thumbnail ${index}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
