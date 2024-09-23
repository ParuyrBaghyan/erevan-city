"use client";
import { useGetAllWebQuery } from "../services/allWeb";
import { FaLocationDot } from "react-icons/fa6";

import "./page.scss";

interface Store {
  address: string;
  cityId: number;
  startTime: string;
  endTime: string;
  isBakery: boolean;
  isInMall: boolean;
  name: string;
  photo: string;
}

export default function Page() {
  const { data } = useGetAllWebQuery();

  return (
    <div className="branches-page">
      <div className="addresses-container">
        <div className="">
          <p> Մեր խանութները</p>
          {data?.data.stores.map((store: Store) => {
            if (!store.isInMall) {
              return (
                <div key={store.cityId} className="each-store">
                  <span>
                    <span>
                      <FaLocationDot />
                    </span>
                    <span>
                      <span>{store.name}</span>
                      <span
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {store.address}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {store.startTime === store.endTime
                          ? "24 ժամ"
                          : `${store.startTime} - ${store.endTime}`}
                      </span>
                    </span>
                  </span>
                  <div
                    className="store-image"
                    style={{
                      background: `url(${store.photo})`,
                    }}
                  ></div>
                </div>
              );
            }
          })}
        </div>

        <div className="">
          <p> Առևտրի կենտրոնի հասցեները</p>
          {data?.data.stores.map((store: Store) => {
            if (store.isInMall) {
              return (
                <div key={store.cityId} className="each-store">
                  <span>
                    <span>
                      <FaLocationDot />
                    </span>
                    <span>
                      <span>{store.name}</span>
                      <span
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {store.address}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {store.startTime === store.endTime
                          ? "24 ժամ"
                          : `${store.startTime} - ${store.endTime}`}
                      </span>
                    </span>
                  </span>
                  <div
                    className="store-image"
                    style={{
                      background: `url(${store.photo})`,
                    }}
                  ></div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="map"></div>
    </div>
  );
}
