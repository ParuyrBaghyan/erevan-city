"use client";
import React, { useRef } from "react";
import { useGetPromoMutation } from "@/app/services/promo";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Promo {
  id: number;
  photo: string;
}

const SimpleSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const [getPromo] = useGetPromoMutation();
  const [promos, setPromos] = useState([]);

  async function getPromoData() {
    const data = await getPromo({
      count: 25,
      dateFrom: "2024-09-12T07:33:39.510Z",
      page: 1,
    });
    setPromos(data?.data.data.list);
  }

  useEffect(() => {
    getPromoData();
  }, []);
  console.log(promos);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {promos.map((promo: Promo, i) => {
          return <img key={promo.id} src={promo.photo} />;
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
