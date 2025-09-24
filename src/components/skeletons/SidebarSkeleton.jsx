import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SidebarSkeleton = () => {
 if (loading) {
    return (
      <div className="space-y-3 p-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton circle width={48} height={48} />
            <div className="flex flex-col w-full">
              <Skeleton width="70%" height={16} />
              <Skeleton width="40%" height={12} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id} onClick={() => onSelectFriend(friend)}>
          {/* actual UI */}
        </div>
      ))}
    </div>
  );
}

export default SidebarSkeleton
