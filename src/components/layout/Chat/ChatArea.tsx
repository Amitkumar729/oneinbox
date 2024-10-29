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

export const ChatArea: React.FC<ChatAreaProps> = ({ selectedUser }) => (
  <div className="flex flex-col h-full w-full">
    {selectedUser ? (
      <>
        <ChatHeader user={selectedUser} />
        <div className="h-[1px] bg-gray-700/50" />
        <div className="flex-1 overflow-auto p-2">
          <ChatBody user={selectedUser} />
        </div>
        <ChatFooter placeholder={`Message ${selectedUser.name}...`} />
      </>
    ) : (
      <div className="flex-1 flex justify-center items-center">
        Select a user to chat
      </div>
    )}
  </div>
);
