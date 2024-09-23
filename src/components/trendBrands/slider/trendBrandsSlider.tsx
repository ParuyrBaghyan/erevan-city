'use client'

import React, { useState, useEffect } from "react";
import TrendBrandsModel from "@/app/services/interface/trendBrandModel";
import "./trendBrandsSlider.scss";

interface SliderProps {
  items: TrendBrandsModel[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setItemsToShow(2);
      } else if (window.innerWidth <= 768) {
        setItemsToShow(3);
      } else if (window.innerWidth <= 992) {
        setItemsToShow(4);
      } else if (window.innerWidth <= 1200) {
        setItemsToShow(5);
      } else {
        setItemsToShow(6);
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="trendBrands-slider-container">
      <div
        className="trendBrands-slider-wrapper"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {items.map((brand) => (
          <div className="trendBrands-slider-item" key={brand.id}>
            <img src={brand.photo} alt={brand.name} />
            <span>
              <span>{brand.itemCount}</span> Ապրանքներ
            </span>
            <img src={brand.coverPhoto} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
