'use client'
import { useGetSpecialItemsQuery } from "@/app/services/api";
import "./lineOfProducts.scss";
import LeftRightBtns from "../leftrightbtns/leftrightbtns";
import Product from "../product/product";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

type SpecialItem = {
  id: number;
  title: string;
  products: ProductType[];
};

type ProductType = {
  id: number;
  name: string;
  // other product properties
};

// SliderComponent to manage each slider individually
function SliderComponent({ item }: { item: SpecialItem }) {
  const sliderRef = useRef<Slider>(null);
  const [itemsToShow, setItemsToShow] = useState(12);

  const slideLeftHandler = () => {
    sliderRef.current?.slickPrev();
  };

  const slideRightHandler = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 444) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 677) {
        setItemsToShow(4);
      } else if (window.innerWidth <= 768) {
        setItemsToShow(5);
      } else if (window.innerWidth <= 848) {
        setItemsToShow(6);
      } else if (window.innerWidth <= 1180) {
        setItemsToShow(8);
      } else {
        setItemsToShow(12);
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: itemsToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="lineOfProducts-wrapper">
      <div className="lineOfProducts-top">
        <h2>{item.title}</h2>
        <LeftRightBtns
          slideLeft={slideLeftHandler}
          slideRight={slideRightHandler}
        />
      </div>
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {item.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default function LineOfProducts() {
  const { data, isLoading, isError } = useGetSpecialItemsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  const specialItems: SpecialItem[] = data?.data?.specialItems || [];

  return (
    <div className="lineOfProducts-container">
      <div className="lineOfProducts-center">
        {specialItems.map(
          (item) =>
            item.products.length > 0 && (
              <SliderComponent key={item.id} item={item} />
            )
        )}
      </div>
    </div>
  );
}
