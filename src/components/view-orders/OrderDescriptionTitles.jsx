import React, { useRef, useState } from "react";
import { OrderTab } from ".";

export const OrderDescriptionTitles = () => {
  const [active, setActive] = useState("");
  const isSelected = useRef(false);

  const tabProps = { active };

  return (
    <div className="flex pt-6 py-5">
      {/* <OrderTab {...tabProps} />
      <OrderTab {...tabProps} />
      <OrderTab {...tabProps} />
      <OrderTab {...tabProps} />
      <OrderTab {...tabProps} /> */}
      <OrderTab item="item1" title="All Orders" />
      <OrderTab item="item2" title="New" />
      <OrderTab item="item3" title="Active" />
      <OrderTab item="item4" title="Completed" />
      <OrderTab item="item5" title="Cancelled" />
    </div>
  );
};
