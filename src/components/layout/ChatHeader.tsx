import React from "react";
import { EllipsisVertical } from "lucide-react";

interface User {
  id: number;
  name: string;
  image: string;
  status: "online" | "offline" | "away";
  iconName: string;
}

interface ChatHeaderProps {
  user: User;  
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  return (
    <div className="flex justify-between items-center p-2 w-full">
      <div className="flex items-center">
        <img src={user.image} className="w-9 h-9 rounded-full mr-3" alt={user.name} />
        <h3 className="text-xl font-semibold">{user.name}</h3>
      </div>
      <div className="flex items-center cursor-pointer">
      <EllipsisVertical className="w-6 h-6" />
      </div>
    </div>
  );
};


