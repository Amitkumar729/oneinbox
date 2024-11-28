import React from "react";

export const ReplyMenu: React.FC<{
  replyMenuRef: React.RefObject<HTMLDivElement>;
  messageId: string;
  handleReplyClick: (messageId: string) => void;
}> = ({ replyMenuRef, messageId, handleReplyClick }) => {
  return (
    <div
      ref={replyMenuRef}
      className="absolute top-0 left-12 bg-[#f7f7f7] shadow-md border rounded-md p-2 w-40 z-10"
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
