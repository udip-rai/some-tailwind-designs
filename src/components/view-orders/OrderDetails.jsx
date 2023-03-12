import { chicken_momo_img } from "assets/images";
import { OrderThumbnailFoodCard } from "components/order-management";
import React from "react";

export const OrderDetails = () => {
  return (
    <div className="flex flex-col flex-1 pl-0 gap-5">
      <div className="flex flex-1 flex-col  bg-white text-slate-700 rounded-lg">
        <h2 className="text-xl p-4">Order Details</h2>
        <div className="flex justify-between items-center text-sm bg-slate-100 p-2 mx-4 rounded-lg">
          <p>Dish</p>
          <p>Quantity</p>
        </div>
        <div className="max-h-[380px] scrollbar scrollbar1 overflow-y-scroll">
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
          <OrderThumbnailFoodCard
            img={chicken_momo_img}
            title="Chicken Momo"
            msg="2"
          />
        </div>
      </div>
    </div>
  );
};
