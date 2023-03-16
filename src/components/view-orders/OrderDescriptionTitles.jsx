import React, { useRef, useState } from "react";
import { OrderTab } from ".";

export const OrderDescriptionTitles = ({ items }) => {
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

      {items?.map((item, i) => (
        <OrderTab key={item + i} title={item} />
      ))}
    </div>
  );
};
