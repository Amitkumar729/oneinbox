import React from "react";

export const TextReply: React.FC = () => {
  return (
    <div className="p-1 border flex gap-2 border-gray-300 text-xs max-w-full  rounded-md  ">
      <div className="h-auto border ml-1 border-gray-300  "></div>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div className="rounded-lg p-1 flex w-fit gap-2 items-center justify-around ">
            <span className="font-semibold text-xs">Amit</span>
            <span className="h-4  border border-gray-300"></span>
            <span className=" text-xs  text-gray-400 ">
              2nd September at 9:06 PM
            </span>
          </div>
        </div>
        <div className="p-1 items-center">
          This is the testing message, hello how are you Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repellhello how are you.
        </div>
      </div>
    </div>
  );
};
