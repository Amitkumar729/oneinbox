import React, { useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { users } from "../../../data";
import { User } from "../../../types";
import { UserItem } from "./UserItem";

export const Sidebar: React.FC<{ onUserSelect: (user: User) => void }> = ({
  onUserSelect,
}) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserSelect = (user: User) => {
    setSelectedUserId(user.user_id);
    onUserSelect(user);
  };

  return (
    <div>
      <div
        className="w-64 h-screen bg-gray-100 border border-gray-100
     text-black-300 flex flex-col"
      >
        <SidebarHeader />
        <div className="flex items-center justify-center">
          <div className="h-[1px] bg-gray-300 w-[95%] " />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="px-2 py-3">
            <div className="mt-6">
              <div className="mt-3 space-y-1">
                {users.data.map((user) => (
                  <UserItem
                    key={user.user_id}
                    user={user}
                    onUserSelect={handleUserSelect}
                    isSelected={user.user_id === selectedUserId}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
