import React from "react";
import {
  OrderChart,
  OrderDetailsCard,
  OrderFilterCard,
  OrderThumbnailFoodCard,
} from "components/order-management";

export const OrderManagementPage = () => {
  return (
    <div className="w-full h-full flex flex-row bg-slate-300">
      <div className="flex w-[220px] bg-red-400 justify-center items-center">
        Static Sidebar
      </div>
      <div className="flex flex-1 w-full">
        <div className="flex flex-col w-[69%] p-5 ">
          <div className="flex gap-5">
            <OrderDetailsCard title="Customers" value={450} percent={17} />
            <OrderDetailsCard title="Total Orders" value={130} percent={20} />
            <OrderDetailsCard title="Cancelled Orders" value={8} percent={-6} />
          </div>
          <div className="flex-1 mt-5">
            <OrderChart
              customersWeekly={[5, 28, 17, 25, 40, 22, 50]}
              ordersWeekly={[7, 98, 70, 55, 45, 33, 72]}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 pl-0 p-5 gap-5">
          <div className="flex justify-between gap-5">
            <OrderDetailsCard
              title="Total Revenue"
              value={94000}
              percent={-2}
            />
            <OrderFilterCard />
          </div>
          <div className="flex flex-1 flex-col bg-white rounded-md">
            <div className="mx-4 px-3 my-5 border-b-2 border-slate-400 flex h-[40px] text-sm">
              Frequently Ordered Dish
            </div>
            <div className="flex w-full max-h-[300px] flex-1 flex-col overflow-y-scroll scrollbar">
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
              <OrderThumbnailFoodCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
