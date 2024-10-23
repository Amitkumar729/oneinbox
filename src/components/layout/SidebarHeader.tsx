import React from "react";
import { Moon, Search } from "lucide-react";

export const SidebarHeader: React.FC = () => {
  return (
    <div className="p-2.5 flex items-center">
      <span className="text-xl font-semibold cursor-pointer ">Oneinbox</span>
      <div className="ml-auto flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-300 rounded-md">
          <Search className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-300 rounded-md">
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
