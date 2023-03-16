import React from "react";
import { OrderDetails } from "components/view-orders";
import { OrderDescription } from "components/view-orders/OrderDescription";
import { useDispatch, useSelector } from "react-redux";

export const ViewOrdersPage = () => {
  const orderDetails = useSelector((state) => state.viewOrders);
  const items = orderDetails.items;

  const allOrders = Object.values(items);

  // const dispatch = useDispatch();

  return (
    <div className="w-full h-[calc(100vh-140px)] flex flex-row bg-slate-300">
      <div className="flex min-w-[180px] bg-red-400 justify-center items-center">
        Static Sidebar
      </div>
      <div className="flex flex-1 w-full bg-green p-5 gap-5">
        <OrderDescription />
        <OrderDetails />
      </div>
    </div>
  );
};
