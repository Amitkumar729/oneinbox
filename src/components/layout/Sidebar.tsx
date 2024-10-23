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
}

const users: User[] = [
  {
    id: 1,
    name: "Amit Gupta",
    image: "/images/logo.avif",
    status: "online",
    iconName: "instagram",
  },
  {
    id: 2,
    name: "Sumit Pandat",
    image: "/images/logo.avif",
    status: "offline",
    iconName: "telegram",
  },
  {
    id: 3,
    name: "Vishal Goswami",
    image: "/images/logo.avif",
    status: "online",
    iconName: "bot",
  },
  {
    id: 4,
    name: "Tarun bhai",
    image: "/images/logo.avif",
    status: "away",
    iconName: "whatsapp",
  },
  {
    id: 5,
    name: "Manoj daila",
    image: "/images/logo.avif",
    status: "online",
    iconName: "bot",
  },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-[#f7f7fa] text-black-300 flex flex-col">
      {/* Header */}
      <SidebarHeader />
      {/* Seprater */}
      <div className="h-[1px] bg-gray-700/50" />

      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-3">
          {/* Members Header */}
          <div className="mt-6">
            <h2 className="px-3 text-xs font-semibold text-black-500 uppercase tracking-wider">
              Members
            </h2>

            {/* Users list */}
            <div className="mt-3 space-y-1">
              {users.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Sidebar;

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="flex items-center px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
      <div className="relative">
        <img
          src={user.image}
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        {/* Online status */}
        <span
          className={`absolute top-0 left-0 w-2.5 h-2.5 rounded-full border-2 border-white
              ${
                user.status === "online"
                  ? "bg-green-500"
                  : user.status === "away"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}
        />
        {/* platform */}
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
