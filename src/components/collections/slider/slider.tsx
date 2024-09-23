import React from "react";
import { BsArrowRight } from "react-icons/bs";

import "./slider.scss";

function MultipleItems({ collections, toLeft }: any) {
  return (
    <div
      className="collections-slider-container"
      style={{
        marginLeft: toLeft + "%",
      }}
    >
      {collections?.map((item: any, i: number) => {
        return (
          <div
            className="collections-item"
            key={i}
            style={{
              backgroundImage: `url(${item.listCoverPhoto})`,
            }}
          >
            <div className="collections-content-box">
              <h1>{item.title}</h1>
              <span>{item.description}</span>
              <BsArrowRight />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MultipleItems;
