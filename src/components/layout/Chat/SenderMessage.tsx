import React from "react";
import { Reply } from "lucide-react";

interface SenderMessageProps {
  messages: string[];
}

export const SenderMessage: React.FC<SenderMessageProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div
          className=" hover:bg-gray-100  mb-3 rounded-lg flex justify-end"
          key={index}
        >
          <div className="flex items-start  p-1 max-w-[70%] mr-5 rounded-lg">
            {/* message box */}
            <div className="flex flex-col w-full">
              <div className="flex  items-center justify-between">
                <div className="flex items-center">
                  {/* Message Timing */}
                  <h6 className="text-xs text-gray-500">9:00 PM</h6>
                </div>
                <div className="flex items-center cursor-pointer ">
                  <Reply className="w-4 h-4 ml-4" />
                </div>
              </div>
              <div>
                {/* message content */}
                <h5
                  className="items-center text-sm"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
