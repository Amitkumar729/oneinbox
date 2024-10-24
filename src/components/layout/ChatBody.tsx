import React from "react";
import { EllipsisVertical } from "lucide-react";

export const ChatBody: React.FC = () => {
  return (
    <>
      {/* ................Receiver message................ */}
      <div className="hover:bg-gray-200  mb-2">
        <div className="flex items-start p-1 max-w-[70%]">
          {/* User Profile Logo */}
          <div className="flex-shrink-0 mr-3  ">
            <img src="/images/naruto.jpeg" className="w-9 h-9 rounded-full" />
          </div>
          {/* Message Box */}
          <div className="flex flex-col w-full">
            <div className="flex  items-center justify-between" >
              <div className="flex items-center">
                {/* User Name */}
                <h5 className="text-sm font-semibold mr-3">Naruto</h5>
                {/* Message Timing */}
                <h6 className="text-xs text-gray-500">9:00 PM</h6>
              </div>
              <div className="flex items-center cursor-pointer ">
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

      {/* Time Separator */}
      <div className="flex items-center mb-2">
        {/* Left line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 mr-2" />{" "}
        <div>
          {/* Time */}
          <h6 className="text-xs text-gray-500">9:10 PM</h6>
        </div>
        {/* Right line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 ml-2" />{" "}
      </div>

      {/* .............................Sender Message........................*/}
      <div className=" hover:bg-gray-200  mb-1 flex justify-end">
        <div className="flex items-start  p-1 max-w-[70%] mr-5 ">
          {/* user profile logo */}
          <div className="flex-shrink-0 mr-1">
            <img
              src="/images/luffy.jpg"
              className="w-9 h-9 rounded-full mr-3"
            />
          </div>
          {/* message box */}
          <div className="flex flex-col w-full">
          <div className="flex  items-center justify-between" >
              <div className="flex items-center">
                {/* User Name */}
                <h5 className="text-sm font-semibold mr-3">Naruto</h5>
                {/* Message Timing */}
                <h6 className="text-xs text-gray-500">9:00 PM</h6>
              </div>
              <div className="flex items-center cursor-pointer ">
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
            <div>
              {/* message content */}
              <h5 className="items-center text-sm ">
                This is the testing message, hello how are you Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellhello how are you.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
