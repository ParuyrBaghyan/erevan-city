

import React, { useState, useEffect, useRef } from "react";
import "./salesSlider.scss";
import SalesBrands from "@/app/services/interface/salesBrandsModel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SalesSliderProps {
  items: SalesBrands[];
}

const SalesSlider: React.FC<SalesSliderProps> = ({ items }) => {
  return (
    <div className="sales-slider-container">
      <div className="sales-slider-wrapper">
        {items.map((brand, index) => (
          <div className="sales-slider-item" key={`${brand.id}-${index}`}>
            <img src={brand.logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesSlider;
