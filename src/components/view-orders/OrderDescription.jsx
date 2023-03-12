import React from "react";
import { OrderDescriptionTitles, OrderSearchbar, OrderTableCard } from "./";

export const OrderDescription = () => {
  return (
    <div className="flex flex-col w-[69%] p-5 bg-white rounded-lg">
      <OrderSearchbar />
      <OrderDescriptionTitles />
      <div className="grid grid-cols-3 gap-5 scrollbar overflow-y-scroll">
        <OrderTableCard />
        <OrderTableCard />
        <OrderTableCard />
        <OrderTableCard />
        <OrderTableCard />
        <OrderTableCard />
      </div>
    </div>
  );
};
