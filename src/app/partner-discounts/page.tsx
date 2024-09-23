"use client";
import SpecialDiscounts from "@/components/PARTNERDISCOUNTS/specialDIscounts/specialDiscounts";
import { PartnerDiscounts } from "../services/interface/partnerDiscounts";
import { useGetPartnerDiscountsQuery } from "../services/partnerDiscounts";
import "./page.scss";

export default function Page() {
  const { data } = useGetPartnerDiscountsQuery();

  console.log(data?.data.partnerAdvertisements);

  return (
    <div className="partner-discounts-page">
      <SpecialDiscounts />
      <div className="partners-container">
        {data?.data.partnerAdvertisements.map(
          (item: PartnerDiscounts, i: number) => {
            return (
              <div
                key={item.id}
                className="each-partner"
                style={{
                  backgroundImage: `url(${item.coverPhoto})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <span>
                  <img src={item.logo} alt="" width={i === 2 ? "20%" : "40%"} />
                  <p>{item.name}</p>
                </span>
                <div
                  className="bottom-box"
                  style={{
                    backgroundColor: `${item.colorPicker}`,
                  }}
                >
                  <span></span>
                  <p>{item.discount}</p>
                  <span></span>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
