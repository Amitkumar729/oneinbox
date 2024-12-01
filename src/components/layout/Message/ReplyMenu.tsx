import React from "react";
import { ReplyMenuProps } from "../../../types";

export const ReplyMenu: React.FC<ReplyMenuProps> = ({
  replyMenuRef,
  messageId,
  handleReplyClick,
  flow,
}) => {
  return (
    <div
      ref={replyMenuRef}
      className={`absolute  ${
        flow === "incoming" ? "left-12  -top-2" : "right-7 top-0"
      }   bg-gray-100 shadow-md border rounded-md p-2 w-40 z-10`}
    >
      <button
        onClick={() => handleReplyClick(messageId)}
        className="text-sm hover:bg-gray-200 rounded-md p-1 w-full text-left"
      >
        Reply
      </button>
      <button className="text-sm hover:bg-gray-200 rounded-md p-1 w-full text-left">
        React
      </button>
    </div>
  );
};
