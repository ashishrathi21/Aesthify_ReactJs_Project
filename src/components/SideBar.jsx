import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { RiLayout2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const SideBar = ({logo}) => {
  return (
    <div className="hidden md:flex w-[5%] bg-white h-full border-r-2 border-gray-300 flex-col items-center justify-between py-4">
        <div>
          <img src={logo} alt="logo" className="h-10 w-10 my-5" />
        </div>

        <div className="flex flex-col gap-10 text-2xl text-gray-700">
          <AiFillHome className="cursor-pointer hover:text-black transition" />
          <MdExplore className="cursor-pointer hover:text-black transition" />
          <FaSquarePlus className="cursor-pointer hover:text-black transition" />
          <RiLayout2Fill className="cursor-pointer hover:text-black transition" />
          <IoMdNotifications className="cursor-pointer hover:text-black transition" />
        </div>

        <div className="text-2xl text-gray-700 mb-4">
          <IoSettings className="cursor-pointer hover:text-black transition" />
        </div>
      </div>
  )
}

export default SideBar