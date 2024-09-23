import "./getAppBanner.scss";
import React from "react";

export default function GetAppBanner() {
  return (
    <div className="getAppBanner-container">
      <div className="getAppBanner-center">
        <span>
          <h1>Get the app</h1>
          <p>for Android and IOS</p>
          <div className="platforms">
            <img
              src="https://yerevan-city.am/assets/images/android.svg"
              alt=""
            />
            <img src="https://yerevan-city.am/assets/images/ios.svg" alt="" />
            <img
              src="https://yerevan-city.am/assets/images/appgallery-seeklogo.com.svg
"
              alt=""
            />
          </div>
        </span>
        <img src="https://yerevan-city.am/assets/images/qr_scan.svg" alt="" />
      </div>
    </div>
  );
}
