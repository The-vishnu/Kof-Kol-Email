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

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const popRef = useRef(null);
  const iconRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popRef.current && !popRef.current.contains(event.target) &&
        iconRef.current && !iconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popRef, iconRef]);

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
          {/* Home */}
          <div className="relative group">
            <Inbox
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Inbox
            </span>
          </div>
          {/* Trash */}
          <div className="relative group">
            <Trash
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Trash
            </span>
          </div>
          {/* Archive */}
          <div className="relative group">
            <Archive
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Archive
            </span>
          </div>
          {/* Home */}
          <div className="relative group">
            <Cpu
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              AI
            </span>
          </div>

          {/* Friends / Users */}
          <div className="relative group">
            <Users
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Friends
            </span>
          </div>

          {/* Settings */}
          <div className="relative group">
            <Settings
              ref={iconRef}
              size={35}
              className="cursor-pointer p-2 rounded-lg  transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev)
              }}
            />
            <span
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-400 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Settings
            </span>
            <span
              ref={popRef}
              className={`${
                theme === "light" ? "bg-gray-300" : "bg-gray-500"
              } w-[300px] h-[500px] absolute left-full top-10 -translate-y-1/2 ml-3 rounded-4xl px-4 py-4 ${
                isOpen ? "block" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-6">
                <div className={`flex flex-row gap-2 `}>
                  <User
                    size={20}
                    className={`${
                      theme === "light" ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                  <p className="text-sm text-gray-400">example@gmail.com</p>
                </div>
                <div className="flex flex-row gap-2 cursor-pointer items-center">
                  <SunMoon
                    size={25}
                    onClick={toggleTheme}
                    className={`${
                      theme === "light" ? "text-gray-600" : "text-gray-700"
                    }`}
                  />
                  <p
                    className={`text-sm text-gray-600 ${
                      theme === "light" ? "text-gray-400" : "text-gray-300"
                    }`}
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? "Light Mode" : "Dark Mode "}
                  </p>
                </div>
              </div>
            </span>
          </div>
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
