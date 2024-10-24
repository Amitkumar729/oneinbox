import React from "react";
import { EllipsisVertical } from "lucide-react";

export const ChatBody: React.FC = () => {
  return (
    <>
      {/* ................Receiver message................ */}
      <div className="hover:bg-gray-200  mb-2">
        <div className="flex items-start p-1 max-w-[70%] bg-gray-200  rounded-lg">
          {/* Message Box */}
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
      <div className="flex items-center mb-2">
        {/* Left line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 mr-2" />{" "}
        <div>
          {/* Date */}
          <h6 className="text-xs text-gray-500">9:10 PM</h6>
        </div>
        {/* Right line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 ml-2" />{" "}
      </div>

      {/* .............................Sender Message........................*/}
      <div className=" hover:bg-gray-200  mb-3 flex justify-end">
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
              <h5 className="items-center text-sm ">
                This is the testing message, hello how are you Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellhello how are you.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ................Receiver message................ */}
      <div className="hover:bg-gray-200  mb-2">
        <div className="flex items-start p-1 max-w-[70%]  bg-gray-200  rounded-lg">
          {/* Message Box */}
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
      <div className="flex items-center mb-2">
        {/* Left line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 mr-2" />{" "}
        <div>
          {/* Date */}
          <h6 className="text-xs text-gray-500">9:10 PM</h6>
        </div>
        {/* Right line */}
        <div className="flex-grow h-[1px] bg-gray-700/50 ml-2" />{" "}
      </div>
    </>
  );
};
