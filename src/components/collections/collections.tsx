'use client'
import { useEffect, useState } from "react";
import LeftRightBtns from "../leftrightbtns/leftrightbtns";
import { useGetActiveCollectionsMutation } from "@/app/services/api";
import "./collections.scss";
import MultipleItems from "./slider/slider";

export default function Collections() {
  const [getActiveCollections, { isLoading, isError }] =
    useGetActiveCollectionsMutation();
  const [collections, setCollections] = useState<any>([]);
  const [toLeft, setToLeft] = useState(0);

  async function getActiveCollectionsData() {
    const data = await getActiveCollections(null);
    setCollections(data?.data?.data.promoCollections);
  }

  function slideLeftHandler() {
  }

  function slideRightHandler() {
  }

  useEffect(() => {
    getActiveCollectionsData();
  }, []);

  return (
    <div className="collections-container">
      <div className="collections-center">
        <div className="collections-top">
          <h2>Հավաքածուներ</h2>
          <LeftRightBtns
            slideLeft={slideLeftHandler}
            slideRight={slideRightHandler}
          />
        </div>
        <div className="collections-slider">
          <MultipleItems collections={collections} toLeft={toLeft} />
        </div>
      </div>
    </div>
  );
}
