import { React, useState, useContext, useEffect, useRef } from "react";
import {
  Search,
  Settings,
  Users,
  Info,
  Cpu,
  Inbox,
  User,
  SunMoon,
  Trash,
  Archive,
} from "lucide-react";
import { ThemeContext } from "../context/ThemContext";
import SidebarIcons from "./SidebarIcons";

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`h-screen w-[60px] bg-gray-200 flex flex-col items-center py-6 gap-6 rounded-r-3xl shadow-lg relative ${
          theme === "light" ? "bg-gray-300" : "bg-gray-700"
        }`}
      >
        {/* Icon Buttons with Tooltip */}
        <div
          className={`flex flex-col gap-6 relative ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          <SidebarIcons />
        </div>
      </div>

      <div
        className={`bg-gray-100  flex flex-col transition-all duration-300 w-120 p-1 m-1 rounded-3xl ${
          theme === "light" ? "bg-gray-100" : "bg-gray-600 text-gray-300"
        }`}
      >
        {/* Search section */}
        <div className="w-90 h-12 bg-gray-200 justify-between items-center p-2 m-2 flex flex-row gap-2 rounded-2xl">
          <input
            type="text"
            placeholder="example@gmail.com"
            className={`w-80 h-8 rounded-full focus:outline-none bg-gray-70 px-4 py-2 focus:ring-2 focus:ring-gray-400 ${
              theme === "light"
                ? "bg-gray-200 text-black"
                : "bg-gray-500 text-white"
            }`}
          />
          <Search className="cursor-pointer" />
        </div>
        {/* friends Profile section */}
        <div className=" w-full min-h-[500px]">
          <div
            className={`flex flex-row justify-between items-center w-full min-h-[50px] border-b-0.1 p-0.5 m-0.5     transition-all  rounded-lg cursor-pointer ${
              theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500"
            }`}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src="https://i.pravatar.cc/50"
                alt="User Profile"
                className="w-12 h-12 rounded-full"
              />
              <span>Sam Altman</span>
            </div>
            <span>10:40 PM</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
