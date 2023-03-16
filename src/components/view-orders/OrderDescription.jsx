import React from "react";
import { OrderDescriptionTitles, OrderSearchbar, OrderTableCard } from "./";

export const OrderDescription = () => {
  const items = ["all-orders", "new", "active", "completed", "cancelled"];

  return (
    <div className="flex flex-col w-[69%] p-5 bg-white rounded-lg">
      <OrderSearchbar />
      <OrderDescriptionTitles items={items} />
      <div className="grid grid-cols-3 gap-5 scrollbar overflow-y-scroll">
        {items?.map((item, i) => (
          <OrderTableCard key={Date.now() + item + i} item={item} />
        ))}
      </div>
    </div>
  );
};
