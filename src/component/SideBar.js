import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { LuCalendarClock, LuSettings } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="hidden  lg:flex lg:flex-col bg-[#4285F4] py-15 px-18  rounded-xl text-white h-[90%] justify-between min-w-[15%] fixed  overflow-y-auto">
      {/* left navBar */}
      <div className=" flex flex-col  justify-center">
        <h1 className=" mt-5 text-4xl ml-5 font-bold ">Board.</h1>
        <div className="mt-12 ml-5 font-Montserrat">
          <ul className="flex items-center my-2 ">
            <AiOutlinePieChart className="w-6 h-6 mr-4 " />
            <h1>Dashboard</h1>
          </ul>
          <ul className="flex items-center my-2">
            <ImPriceTags className="w-6 h-6 mr-4" />
            <h1>Transaction</h1>
          </ul>
          <ul className="flex items-center my-2 ">
            <LuCalendarClock className="w-6 h-6 mr-4" />
            <h1 className="">Schedules</h1>
          </ul>
          <ul className="flex items-center my-2">
            <BiUserCircle className="w-6 h-6 mr-4" />
            <h1>Users</h1>
          </ul>
          <ul className="flex items-center my-2">
            <LuSettings className="w-6 h-6 mr-4" />
            <h1>Settings</h1>
          </ul>
        </div>
      </div>
      <div className="dash-nav my-2 mr-8">
        <ul>Help</ul>
        <ul>Contact Us</ul>
      </div>
    </div>
  );
};

export default SideBar;
