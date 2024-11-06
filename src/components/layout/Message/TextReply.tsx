import React from "react";
import { ChatData } from "../../../data";

interface TextReplyProps {
  replyToId: string;  
}


export const TextReply: React.FC<TextReplyProps> = ({ replyToId }) => {
  console.log("replyToId:-", replyToId);

  const replyMessage = ChatData.find((chat) => chat.messageID === replyToId);
  if (!replyMessage) return null;


  return (
    <div className="p-1 border flex gap-2 border-gray-300 text-xs max-w-full  rounded-md  ">
      <div className="h-auto border ml-1 border-gray-300  "></div>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="rounded-lg p-1 flex w-fit gap-2 items-center justify-around ">
            <span className="font-semibold text-xs">Amit</span>
            <span className="h-4  border border-gray-300"></span>
            <span className=" text-xs  text-gray-400 ">
             {replyMessage.time}
            </span>
          </div>
        </div>
        <div className="p-1 items-center">
        {replyMessage.message}
        </div>
      </div>
    </div>
  );
};
