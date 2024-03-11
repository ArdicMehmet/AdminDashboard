import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const ListItem = ({text}) => {
  return (
    <li className="hover:ps-1 flex items-center cursor-pointer">
      <MdOutlineKeyboardArrowRight size={16} className="me-2" />
     {text}
    </li>
  );
};
