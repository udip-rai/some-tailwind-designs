import {
  burger_img,
  chicken_momo_img,
  pizza_img,
  sandwich_img,
} from "assets/images";
import { OrderButton } from "components/buttons";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const OrderTableCard = () => {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-lg flex flex-col gap-4 shadow-xl">
      <div className="flex h-[130px]">
        <div className="grid grid-cols-2 p-2">
          <img
            className="min-h-[65px] rounded-tl-lg"
            src={chicken_momo_img}
            alt="Chicken momo"
          />
          <img
            className="min-h-[65px] rounded-tr-lg"
            src={burger_img}
            alt="Burger"
          />
          <img
            className="min-h-[65px] rounded-bl-lg"
            src={sandwich_img}
            alt="Sandwich"
          />
          <img
            className="min-h-[65px] rounded-br-lg"
            src={pizza_img}
            alt="Pizza"
          />
        </div>
      </div>
      <div className="flex flex-1 w-full justify-between p-2 pb-4">
        <div className="flex flex-col text-xs">
          <p>Table No. 2</p>
          <div className="flex text-xs text-blue-400 font-extrabold items-center gap-1">
            <AiOutlineClockCircle />
            <span className="text-[0.55rem]">12 minutes ago</span>
          </div>
        </div>
        <div className="flex">
          <OrderButton color="bg-blue-500" title="New Order" />
        </div>
      </div>
    </div>
  );
};
