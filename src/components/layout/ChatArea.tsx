import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";

export const ChatArea = () => {
  return (
    <div className="flex flex-col  w-full">
      {/* Chat Header */}
      <ChatHeader />
      {/* Seprater */}
      <div className="h-[1px] bg-gray-700/50" />
      {/* Chat Body */}
      <ChatBody />
      {/* Chat Footer */}
      <ChatFooter />
    </div>
  );
};
