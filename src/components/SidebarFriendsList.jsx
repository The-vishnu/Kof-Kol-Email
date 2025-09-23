import React from "react";

function SidebarFriendsList({ friends, onSelectFriend }) {
  return (
    <div className="flex flex-col gap-2">
      {friends.map((friend) => (
        <button key={friend.id} onClick={() => onSelectFriend(friend)}>
          {friend.name}
        </button>
      ))}
    </div>
  );
}

export default SidebarFriendsList;
