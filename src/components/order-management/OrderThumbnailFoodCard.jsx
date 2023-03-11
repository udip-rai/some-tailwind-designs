import { chicken_momo_img } from "assets/images";
import React from "react";

export const OrderThumbnailFoodCard = () => {
  return (
    <div className="flex items-center mx-4 p-3 text-sm gap-5">
      <div className="flex w-10 h-10">
        <img src={chicken_momo_img} alt="Chicken Momo" className="rounded-lg" />
      </div>

      <div className="flex flex-1 justify-between">
        <p>Chicken Momo</p>
        <p>188 times</p>
      </div>
    </div>
  );
};
