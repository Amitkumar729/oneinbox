import React from "react";
import { EllipsisVertical } from "lucide-react";

export const ChatHeader: React.FC = () => {
  return (
    <div className="flex justify-between  items-center p-2 w-full">
      <div className="flex items-center">
        <img src="/images/naruto.jpeg" className="w-9 h-9 rounded-full mr-3" />
        <h3 className="text-xl font-semibold ">Amit Gupta</h3>
      </div>
      <div className="flex items-center">
        <EllipsisVertical className="w-6 h-6" />
      </div>
    </div>
  );
};
