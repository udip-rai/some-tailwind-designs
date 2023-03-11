import React from "react";
import { github_img } from "assets/images";
import { NavLink } from "react-router-dom";

export const Footer1 = () => {
  return (
    <footer className="flex justify-center items-center h-[60px] gap-2">
      <div className="w-24 h-12 flex items-center">
        <NavLink to="https://github.com/udip-rai">
          <img src={github_img} alt="Github" className="hover:scale-110)" />
        </NavLink>
      </div>
      <p className="font-bold text-blue-600 dark:text-blue-300">
        Copyright &copy; Udip Rai
      </p>
    </footer>
  );
};
