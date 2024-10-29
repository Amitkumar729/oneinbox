import React from "react";

export const DateSeparator: React.FC = () => {
  return (
    <div className="flex items-center  mb-2">
      {/* Left line */}
      <div className="flex-grow h-[1px] bg-gray-700/50 mr-2" />{" "}
      <div>
        {/* Date */}
        <h6 className="text-xs text-gray-500">Yesterday</h6>
      </div>
      {/* Right line */}
      <div className="flex-grow h-[1px] bg-gray-700/50 ml-2" />{" "}
    </div>
  );
};
