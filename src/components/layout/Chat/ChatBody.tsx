import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { DateSeparator } from "./DateSeparator";
import { ReceiverMessage } from "../Message/ReceiverMessage";
import { SenderMessage } from "../Message/SenderMessage";
import { ChatBodyProps } from "../../../types";
import { ChatData } from "../../../data";
import { ChevronDown } from "lucide-react";
import { TextReply } from "../Message/TextReply";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { setReplyTarget } from "../../store/reducers/chatSlice";


export const ChatBody: React.FC<ChatBodyProps> = ({ user }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const [openReplyMenu, setOpenReplyMenu] = useState<string | null>(null);
  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));
 
    setOpenReplyMenu(null);
  };

  return (
    <>
      <div>
        {ChatData.data.map((chat, idx) => {
          const currentDate = new Date(chat.metadata.timestamp).toDateString();
          const previousDate =
            idx > 0
              ? new Date(
                  ChatData.data[idx - 1].metadata.timestamp
                ).toDateString()
              : null;

          return (
            <React.Fragment key={chat.message_id}>
              {currentDate !== previousDate && (
                <DateSeparator date={chat.metadata.timestamp} />
              )}

              {chat.metadata.flow === "Incoming" ? (
                <ReceiverMessage message={chat} />
              ) : (
                <SenderMessage message={chat} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {messages.map((message) => (
        <div className="  mb-3   flex justify-end" key={message.id}>
          <div className=" bg-blue-100 border border-blue-200 flex items-start p-1 max-w-[70%] mr-5 rounded-lg">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-end"></div>
              <div className="flex group">
                {message.type === "reply" ? (
                  <div className="p-1 rounded-lg">
                    <TextReply replyToId={message.replyTo?.toString() || ""} />
                    <p className="text-sm">
                      <ReactMarkdown
                        children={message.content}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                      />
                    </p>
                  </div>
                ) : (
                  <h5 className="items-center text-sm">
                    <ReactMarkdown
                      children={message.content}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    />
                  </h5>
                )}
                <div
                  className="flex items-center max-h-fit cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={() => handleReplyClick(String(message.id))}
                >
                  <ChevronDown className="w-4 h-4 ml-4" />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <h6 style={{ fontSize: "10px" }} className=" text-gray-500">
                  9:00 PM
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
