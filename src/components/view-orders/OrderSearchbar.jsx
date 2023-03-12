import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const OrderSearchbar = () => {
  return (
    <div className="flex relative">
      <div className="absolute top-2 left-3">
        <AiOutlineSearch color="gray" fontSize="20px" />
      </div>
      <input
        type="text"
        className="w-full pl-9 pr-5 h-[38px] bg-slate-200 rounded-lg text-sm"
        placeholder="Search here.."
      />
    </div>
  );
};
