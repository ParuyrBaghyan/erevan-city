'use client'
import { useGetTrendBrandsQuery } from "@/app/services/api";

import "./trendBrands.scss";
import { TrendBrandsResponse } from "@/app/services/interface/trendBrandModel";
import LeftRightBtns from "../leftrightbtns/leftrightbtns";
import MultipleItems from "./slider/trendBrandsSlider";

export default function TrendBrands() {
  const { data, isLoading, isError } = useGetTrendBrandsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  const trendBrands: TrendBrandsResponse = data?.data.brands || [];

  return (
    <div className="trendBrands-continer">
      <div className="trendBrands-center">
        <div className="trendBrands-top">
          <h2>Թրենդային ապրանքանիշեր</h2>
        <LeftRightBtns />
        </div>
        <MultipleItems items={trendBrands} brands={[]} />
      </div>
    </div>
  );
}
