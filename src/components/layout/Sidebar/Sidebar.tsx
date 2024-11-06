import React from "react";
import { SidebarHeader } from "./SidebarHeader";

type IconName = "instagram" | "telegram" | "whatsapp" | "bot";

const icons: Record<IconName, string> = {
  instagram: "/channelIcons/instagram.png",
  telegram: "/channelIcons/telegram.png",
  whatsapp: "/channelIcons/whatsapp.png",
  bot: "/channelIcons/sad.png",
};

interface User {
  id: number;
  name: string;
  image: string;
  status: "online" | "offline" | "away";
  iconName: IconName;
}

interface UserItemProps {
  user: User;
  onUserSelect: (user: User) => void;
}

const users: User[] = [
  {
    id: 1,
    name: "Amit Gupta",
    image: "/images/naruto.jpeg",
    status: "online",
    iconName: "instagram",
  },
];

export const Sidebar: React.FC<{ onUserSelect: (user: User) => void }> = ({
  onUserSelect,
}) => {
  return (
    <div className="w-64 h-screen bg-[#f7f7fa] text-black-300 flex flex-col">
      <SidebarHeader />
      <div className="h-[1px] bg-gray-700/50" />
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-3">
          <div className="mt-6">
            <div className="mt-3 space-y-1">
              {users.map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  onUserSelect={onUserSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserItem: React.FC<UserItemProps> = ({ user, onUserSelect }) => {
  return (
    <div
      className="flex items-center px-3 py-1 hover:bg-gray-200 rounded-md cursor-pointer"
      onClick={() => onUserSelect(user)}
    >
      <div className="relative">
        <img
          src={user.image}
          alt={user.name}
          className="w-8 h-8 rounded-md object-cover"
        />
        <span
          className={`absolute top-0 left-0 w-2.5 h-2.5 rounded-md border-2 border-white ${
            user.status === "online"
              ? "bg-green-500"
              : user.status === "away"
              ? "bg-yellow-500"
              : "bg-gray-400"
          }`}
        />
        <img
          src={icons[user.iconName]}
          alt={user.iconName}
          className="absolute -bottom-1 -right-1 w-3.5 h-3.5 object-contain"
        />
      </div>
      <span className="ml-3 text-sm text-gray-700">{user.name}</span>
    </div>
  );
};
