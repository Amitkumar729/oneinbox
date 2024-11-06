import React from "react";
import { Reply } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { TextReply } from "./TextReply";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { ChatData } from "../../../data";

interface Message {
  id: number;
  content: string;
  type: "message" | "reply";
  replyTo?: string;
}

interface SenderMessageProps {
  messages: Message[];
}

export const SenderMessage: React.FC<SenderMessageProps> = ({ messages }) => {
  const dispatch = useDispatch();

  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));
    console.log("outgoing messageId: ", messageId);
  };

   
  const outgoingMessages = ChatData.filter((chat) => chat.flow === "outgoing");
  console.log("outgoingMessages: ", outgoingMessages);
  return (
    <>
      {outgoingMessages.map((chat) => (
        <div
          className="hover:bg-gray-100 mb-3 rounded-lg flex justify-end"
          key={chat.messageID}
        >
          <div className="flex items-start p-1 max-w-[70%] mr-5 rounded-lg">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h6 className="text-xs text-gray-500">{chat.time}</h6>
                </div>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleReplyClick(chat.messageID)}
                >
                  <Reply className="w-4 h-4 ml-4" />
                </div>
              </div>
              <div>
                <h5 className="items-center text-sm">
                  <ReactMarkdown
                    children={chat.message}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  />
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}

       
      {messages.map((message) => (
        <div
          className="hover:bg-gray-100 mb-3 rounded-lg flex justify-end"
          key={message.id}
        >
          <div className="flex items-start p-1 max-w-[70%] mr-5 rounded-lg">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h6 className="text-xs text-gray-500">9:00 PM</h6>
                </div>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleReplyClick(String(message.id))}
                >
                  <Reply className="w-4 h-4 ml-4" />
                </div>
              </div>
              <div>
                {message.type === "reply" ? (
                  <div className="p-1 rounded-lg">
                    <TextReply  replyToId={message.replyTo?.toString() || ""} />
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
