import { React, useState } from "react";
import { Search, Settings, Users, Info, Cpu, Inbox } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen w-[60px] bg-gray-200 flex flex-col items-center py-6 gap-6 rounded-r-3xl shadow-lg relative">
        {/* Icon Buttons with Tooltip */}
        <div className="flex flex-col gap-6 relative">
          {/* Home */}
          <div className="relative group">
            <Inbox
              size={35}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-300  text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Inbox
            </span>
          </div>
          {/* Home */}
          <div className="relative group">
            <Cpu
              size={35}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-300 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Ais
            </span>
          </div>

          {/* Friends / Users */}
          <div className="relative group">
            <Users
              size={35}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-300 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Friends
            </span>
          </div>

          {/* Settings */}
          <div className="relative group" onClick={() => setIsOpen((prev) => !prev)}>
            <Settings
              size={35}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-300 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Settings
            </span>
            <span className={`bg-gray-300 w-[300px] h-[500px] absolute left-full top-40 -translate-y-1/2 ml-3 rounded-4xl px-4 py-4 ${isOpen? "block" : "hidden"} `}>
              dark
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100  flex flex-col transition-all duration-300 w-120 p-1 m-1 justify-between rounded-3xl">
        {/* Search section */}
        <div className="w-90 h-12 bg-gray-200 justify-between items-center p-2 m-2 flex flex-row gap-2 rounded-2xl">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-80 h-8 rounded-full focus:outline-none bg-gray-70 px-4 py-2 focus:ring-2 focus:ring-gray-400"
          />
          <Search className="cursor-pointer" />
        </div>
        {/* friends Profile section */}
        <div className=" w-full min-h-[500px]">
          <div className="flex flex-row justify-between items-center w-full min-h-[50px] border-b-0.1 p-0.5 m-0.5    hover:bg-gray-200 transition-all  rounded-lg mb-2 cursor-pointer">
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
        {/* User section */}
        <div className="flex flex-row gap-2 items-center m-1 p-1">
          <img
            src="https://i.pravatar.cc/50"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-[15px] text-sm">Arvind Shrivastav</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
