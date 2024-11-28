import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { format } from "date-fns";
import { SenderMessageProps } from "../../../types";
import { ReplyMenu } from "./ReplyMenu";
import { MessageContent } from "./MessageContent";

export const SenderMessage: React.FC<SenderMessageProps> = ({ message }) => {
  const dispatch = useDispatch();
  const [openReplyMenu, setOpenReplyMenu] = useState<string | null>(null);
  const replyMenuRef = useRef<HTMLDivElement | null>(null);

  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));

    setOpenReplyMenu(null);
  };

  const toggleReplyMenu = (messageId: string) => {
    setOpenReplyMenu((prev) => (prev === messageId ? null : messageId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        replyMenuRef.current &&
        !replyMenuRef.current.contains(event.target as Node)
      ) {
        setOpenReplyMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formattedTime = format(new Date(message.metadata.timestamp), "hh:mm a");

  return (
    <>
      <div className="mb-3 flex justify-end  p-1 ">
        <div
          className="flex flex-col items-start relative
           p-1 max-w-[70%] mr-5"
        >
          <div
            className="flex flex-col p-1.5 bg-blue-100 
                   rounded-lg  w-full border border-blue-200"
          >
            <div className="flex group relative">
              <MessageContent message={message} />

              <div
                className="flex items-center cursor-pointer opacity-0 
                group-hover:opacity-100 transition-opacity duration-200  h-fit"
                onClick={() => toggleReplyMenu(message.message_id)}
              >
                <ChevronDown className="w-4 h-4 ml-4" />
              </div>
              {/* Reply Menu */}
              {openReplyMenu === message.message_id && (
                <ReplyMenu
                  replyMenuRef={replyMenuRef}
                  messageId={message.message_id}
                  handleReplyClick={handleReplyClick}
                />
              )}
            </div>
            <div
              style={{ fontSize: "11px" }}
              className="absolute  bg-blue-300 left-4 bottom-7  rounded-xl "
            >
              {message.reaction?.emoji}
            </div>
          </div>
          <div
            className={`flex items-center justify-start  p-1 ${
              message.reaction?.emoji ? "mt-2" : "mt-1"
            }`}
          >
            <h6 style={{ fontSize: "10px" }} className="text-gray-500">
              {formattedTime}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
