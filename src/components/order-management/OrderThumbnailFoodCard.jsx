import React from "react";

export const OrderThumbnailFoodCard = ({ img, title, msg }) => {
  return (
    <div className="flex items-center mx-4 p-3 text-sm gap-5">
      <div className="flex w-10 h-10">
        <img src={img} alt="Chicken Momo" className="rounded-lg" />
      </div>

      <div className="flex flex-1 justify-between">
        <p>{title}</p>
        <p className="text-slate-400">{msg}</p>
      </div>
    </div>
  );
};
