import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../store/store";

export const ChatBody: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <>
      {/* ................Receiver message................ */}
      <div className="hover:bg-gray-200 rounded-lg mb-2">
        <div className="flex items-start p-1 max-w-[70%] bg-gray-200  rounded-lg">
          {/* Message Box */}
          <div className="flex flex-col w-full">
            <div className="flex  items-center justify-between">
              <div className="flex items-center">
                {/* Message Timing */}
                <h6 className="text-xs text-gray-500">9:00 PM</h6>
              </div>
              <div
                className="flex items-center cursor-pointer relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && (
                  <div className="absolute top-0 right-3 bottom-0 h-20 w-15 bg-white border border-gray-300 rounded shadow-md p-2 z-10">
                    <h4 className="text-sm hover:bg-gray-200 p-1 rounded-md ">
                      {" "}
                      Reply
                    </h4>
                  </div>
                )}
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
            {/* Message Content */}
            <div>
              <h5 className="text-sm">
                This is the testing message, hello how are you Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellhello how are you.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Date Separator */}
      <div className="flex items-center  mb-2">
        {/* Left line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 mr-2" />{" "}
        <div>
          {/* Date */}
          <h6 className="text-xs text-gray-500">09-05-2001</h6>
        </div>
        {/* Right line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 ml-2" />{" "}
      </div>

      {/* .............................Sender Message........................*/}
      {messages.map((message, index) => (
        <div className=" hover:bg-gray-200  mb-3 rounded-lg flex justify-end">
          <div className="flex items-start  p-1 max-w-[70%] mr-5  bg-gray-200  rounded-lg">
            {/* message box */}
            <div className="flex flex-col w-full">
              <div className="flex  items-center justify-between">
                <div className="flex items-center">
                  {/* Message Timing */}
                  <h6 className="text-xs text-gray-500">9:00 PM</h6>
                </div>
                <div className="flex items-center cursor-pointer ">
                  <EllipsisVertical className="w-4 h-4" />
                </div>
              </div>
              <div>
                {/* message content */}
                <h5 className="items-center text-sm ">{message}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}

    

     
    </>
  );
};
