import React from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";

interface User {
  id: number;
  name: string;
  image: string;
  status: "online" | "offline" | "away";
  iconName: string;
}

interface ChatAreaProps {
  selectedUser: User | null;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ selectedUser }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Chat Header */}
      {selectedUser && <ChatHeader user={selectedUser} />}

      {/* Separator */}
      {selectedUser && <div className="h-[1px] bg-gray-700/50" />}

      {/* Chat Body */}
      <div className="flex-1 overflow-auto p-2">
        {selectedUser ? (
          <ChatBody user={selectedUser} />
        ) : (
          <div className="  h-full max-w-full flex justify-center items-center ">
            Select a user to chat
          </div>
        )}
      </div>

      {/* Chat Footer */}
      {selectedUser && (
        <ChatFooter placeholder={`Message ${selectedUser.name}...`} />
      )}
    </div>
  );
};
