'use client'

import { useGetSaleBrandsQuery } from "@/app/services/api";
import "./sales.scss";
import SalesBrands from "@/app/services/interface/salesBrandsModel";
import SalesSlider from "./slider/salesSlider";

export default function Sales() {
  const { data, isLoading, isError } = useGetSaleBrandsQuery();

  if (isLoading) return <p>Loading...</p>;

  const salesBrands: SalesBrands[] = data?.data || [];
  
  return (
    <div className="sales-container">
      <div className="sales-center">
        <img
          src="https://yerevan-city.am/assets/images/partner-banner-web-min.png"
          alt=""
        />
        <div className="sale-brands">
          <SalesSlider items={salesBrands}/>
        </div>

      </div>
    </div>
  );
}
