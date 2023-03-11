import { filter_svg } from "assets/icons";
import React from "react";

export const OrderFilterCard = () => {
  return (
    <div className="flex-1 items-center justify-center h-[80px] flex bg-white rounded-lg">
      <img src={filter_svg} alt="Filter Svg Icon" className="w-6 h-6" />
    </div>
  );
};
