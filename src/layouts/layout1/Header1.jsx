import React from "react";
import { tailwind_svg } from "assets/icons";
import { NavLink } from "react-router-dom";

export const Header1 = () => {
  return (
    <header className="relative dark:bg-slate-900 text-slate-800 dark:text-slate-300 p-4 flex justify-center h-[80px]">
      <div className="w-16 h-16 flex absolute left-5">
        <NavLink to="/">
          <img src={tailwind_svg} alt="Tailwind CSS Svg" />
          <p className="italic font-bold font-mono text-lg">Home</p>
        </NavLink>
      </div>
      <h1 className="font-bold text-4xl">Tailwind Designs</h1>
    </header>
  );
};
