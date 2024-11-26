import React from "react";
import { format, isToday, isYesterday, parseISO } from "date-fns";
import { DateSeparatorProps } from "../../../types";

export const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  const parsedDate = parseISO(date.replace(" ", "T"));
  let formattedDate: string;
  if (isToday(parsedDate)) {
    formattedDate = "Today";
  } else if (isYesterday(parsedDate)) {
    formattedDate = "Yesterday";
  } else {
    formattedDate = format(parsedDate, "dd-MM-yyyy");
  }
  return (
    <div className="flex items-center  mb-2">
      {/* Left line */}
      <div className="flex-grow h-[1px] bg-gray-300 mr-2" />{" "}
      <div>
        {/* Date */}
        <h6 className="text-xs text-gray-500">{formattedDate}</h6>
      </div>
      {/* Right line */}
      <div className="flex-grow h-[1px] bg-gray-300 ml-2" />{" "}
    </div>
  );
};
