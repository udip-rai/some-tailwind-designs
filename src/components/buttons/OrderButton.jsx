import React from "react";

export const OrderButton = ({ title, color }) => {
  return (
    <button
      className={`${color} p-2 text-white w-[85px] h-[35px] rounded-lg text-xs`}
    >
      {title}
    </button>
  );
};
