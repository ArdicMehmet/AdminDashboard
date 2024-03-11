import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { ListItem } from "../listItem/list";

export const NavbarLeft = () => {
  return (
    <nav className="h-screen bg-indigo-600 max-w-1/5 p-4 font-baseFont text-white flex flex-col justify-start items-start">
      <h4 className="text-2xl">Admin Dashboard</h4>
      <ul className="flex flex-col gap-4 pt-5">
        <ListItem text="Deneme1" />
        <ListItem text="Deneme2" />
        <ListItem text="Deneme3" />
        <ListItem text="Deneme4" />
      </ul>
      <p className="mt-auto flex items-center gap-1 cursor-pointer hover:opacity-85">
        <MdOutlineLogout size={16} />
        Logout
      </p>
    </nav>
  );
};
