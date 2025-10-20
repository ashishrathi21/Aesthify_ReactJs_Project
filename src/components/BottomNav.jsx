import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSquarePlus } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-300 flex justify-around items-center py-2 text-2xl text-gray-700 md:hidden">
      <AiFillHome className="cursor-pointer hover:text-black transition" />
      <FaSquarePlus className="cursor-pointer hover:text-black transition" />
      <IoMdNotifications className="cursor-pointer hover:text-black transition" />
      <IoSettings className="cursor-pointer hover:text-black transition" />
    </div>
  );
};

export default BottomNav;
