import React, { useEffect, useRef, useState } from "react";

export const OrderTab = ({ item, title }) => {
  const [active, setActive] = useState("");
  //   console.log(isSelected);

  const handleTabClick = (item) => {
    // document.classList.remove("active-border");
    // e?.currentTarget?.classList.add("active-border");
    // resetToggle();
    if (item !== active) {
      setActive(item);
    } else {
      setActive("");
    }
  };

  useEffect(() => {
    if (active) {
      document.body.classList.remove("active-border");
    }
  }, [active]);

  return (
    <div
      className={`flex basis-1/5 pb-3 justify-center items-center border-b-4 text-slate-500"
      } ${active === item && "active-border"}`}
      onClick={() => handleTabClick(item)}
    >
      {/* <p className="cursor-pointer">{"title"}</p> */}
      <p className="cursor-pointer">{title}</p>
    </div>
  );
};
