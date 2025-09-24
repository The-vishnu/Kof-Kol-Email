import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemContext";
import ChatSection from "./ChatSection";

function SidebarFriendsList({ friends, onSelectFriend }) {
  const { theme } = useContext(ThemeContext);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Optional effect: whenever selected changes, log or perform side effects
  // useEffect(() => {
  //   if (selectedFriend) {
  //     console.log("Selected friend:", selectedFriend);
  //   }
  // }, [selectedFriend]);

  const handleSelect = (selectedFriend) => {
    setSelectedFriend(selectedFriend);
    onSelectFriend(selectedFriend); // notify parent
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      {friends.map((friend) => (
        <div
          key={friend.id}
          onClick={() => handleSelect(friend)}
          className={`flex justify-between items-center w-full p-2 mb-1 rounded-lg cursor-pointer transition-all
          ${
            selectedFriend === friend.id
              ? theme === "light"
                ? "bg-gray-300"
                : "bg-gray-600"
              : theme === "light"
              ? "hover:bg-gray-200"
              : "hover:bg-gray-500"
          }`}
        >
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-3">
            <img
              src={friend.avatar || "https://i.pravatar.cc/50"}
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[14px]">{friend.name}</span>
              <span className="font-semibold text-gray-500 text-[10px]">{friend.email}</span>
            </div>
          </div>

          {/* Right: Time */}
          <span className="text-xs text-gray-400 whitespace-nowrap">
            {friend.lastActive}
          </span>
        </div>
      ))}
      {/* <ChatSection selectedFriend={selectedFriend} /> */}
    </div>
  );
}

export default SidebarFriendsList;
