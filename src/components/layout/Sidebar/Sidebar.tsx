import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { users } from "../../../data";
import { platformIcons, User, UserItemProps } from "../../../types";
import { format, isToday, isYesterday } from "date-fns";

export const Sidebar: React.FC<{ onUserSelect: (user: User) => void }> = ({
  onUserSelect,
}) => {
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
                    onUserSelect={onUserSelect}
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

const UserItem: React.FC<UserItemProps> = ({ user, onUserSelect }) => {
  const lastInteraction = new Date(user.last_interaction_timestamp);
  let formattedTime: string;

  if (isToday(lastInteraction)) {
    formattedTime = format(lastInteraction, "hh:mm a");
  } else if (isYesterday(lastInteraction)) {
    formattedTime = "Yesterday";
  } else {
    formattedTime = format(lastInteraction, "dd-MM-yyyy");
  }

  return (
    <div
      className="flex p-2 items-center hover:bg-gray-200 
         rounded-md cursor-pointer mb-1"
      onClick={() => onUserSelect(user)}
    >
      <div className="relative">
        <img
          src={user.profile_picture_url}
          alt={user.name}
          className="w-11 h-10 rounded-md object-cover"
        />
        {/* <span
          className={`absolute top-0 left-0 w-2.5 h-2.5 rounded-md border-2 border-white ${
            user.status === "online"
              ? "bg-green-500"
              : user.status === "away"
              ? "bg-yellow-500"
              : "bg-gray-400"
          }`}
        /> */}

        <img
          src={platformIcons[user.platform]}
          alt={user.platform}
          className="absolute -bottom-1 -right-1 w-3.5 h-3.5 object-contain"
        />
      </div>
      <div className="flex items-center justify-between w-full ml-3  ">
        <span className="ml-1 text-sm text-gray-700 ">{user.name}</span>
        <span  style={{fontSize: "11px"}} className=" text-gray-400">{formattedTime}</span>
      </div>
    </div>
  );
};
