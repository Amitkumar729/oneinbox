import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { TextReply } from "./TextReply";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { VideoMessage } from "./VideoMessage";
import { AudioMessage } from "./AudioMessage";
import { ImageMessage } from "./ImageMessage";
import { SenderMessageProps } from "../../../types";

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
      <div className="mb-3 flex justify-end  p-1">
        <div
          className=" bg-[#f7f7f7] flex items-start relative
           p-1 max-w-[70%] mr-5 rounded-lg"
        >
          <div className="flex flex-col w-full">
            <div className="flex group relative">
              {message.reply?.is_reply ? (
                <div className="p-1 rounded-lg">
                  <TextReply replyToId={message.reply.reply_to} />
                  <p className="text-sm">
                    <ReactMarkdown
                      children={message.content.text}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    />
                  </p>
                </div>
              ) : (
                // <h5 className="items-center text-sm">
                //   <ReactMarkdown
                //     children={
                //       message.content.text || "Unsupported message type"
                //     }
                //     remarkPlugins={[remarkGfm]}
                //     rehypePlugins={[rehypeRaw]}
                //   />
                // </h5>
                <>
                  {message.content.type === "text" && (
                    <h5 className="text-sm">{message.content.text}</h5>
                  )}
                  {message.content.type === "video" && (
                    <>
                      <div>
                        <VideoMessage message={message} />
                        <h5 className="text-sm">{message.content.text}</h5>
                      </div>
                    </>
                  )}
                  {message.content.type === "audio" && (
                    <>
                      <div>
                        <AudioMessage message={message} />
                        <h5 className="text-sm">{message.content.text}</h5>
                      </div>
                    </>
                  )}

                  {message.content.type === "image" && (
                    <>
                      <div>
                        <ImageMessage message={message} />
                        <h5 className="text-sm">{message.content.text}</h5>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Message Content */}

              <div
                className="flex items-center cursor-pointer opacity-0 
                group-hover:opacity-100 transition-opacity duration-200  h-fit"
                onClick={() => toggleReplyMenu(message.message_id)}
              >
                <ChevronDown className="w-4 h-4 ml-4" />
              </div>
              {/* Reply Menu */}
              {openReplyMenu === message.message_id && (
                <div
                  ref={replyMenuRef}
                  className="absolute top-0 right-7 bg-[#f7f7f7]
                      shadow-md border rounded-md p-2 w-40 z-10"
                >
                  <button
                    onClick={() => handleReplyClick(message.message_id)}
                    className="text-sm  hover:bg-gray-200 rounded-md 
                      p-1 w-full text-left"
                  >
                    Reply
                  </button>
                  <button
                    className="text-sm  hover:bg-gray-200 rounded-md 
                      p-1 w-full text-left"
                  >
                    React
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end ">
              <h6 style={{ fontSize: "10px" }} className="text-gray-500">
                {formattedTime}
              </h6>
            </div>
          </div>
          <div className="absolute  bg-gray-400 left-3 -bottom-2 rounded-xl ">
            {message.reaction?.emoji}
          </div>
        </div>
      </div>
    </>
  );
};
