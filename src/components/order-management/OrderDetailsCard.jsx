import { green_arrow_img, red_arrow_img } from "assets/images";
import React from "react";

export const OrderDetailsCard = ({ title, value, percent }) => {
  const indicator =
    percent < 10
      ? ["text-red-600", red_arrow_img]
      : percent > 10 && percent <= 100
      ? ["text-green-600", green_arrow_img]
      : "Bad data!";
  return (
    <div className="w-[248px] h-[80px] flex flex-col bg-white px-4 p-3 justify-between rounded-lg text-sm">
      <div className="flex justify-between">
        <span className="font-medium">{title}</span>
        <span>
          <img src={indicator[1]} alt="Arrow Icon" className="w-4 h-4" />
        </span>
      </div>
      <div className="flex justify-between">
        <span>{value}</span>
        <span className={indicator[0]}>{percent}%</span>
      </div>
    </div>
  );
};
