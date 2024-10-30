import React from "react";
import { Reply } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { TextReply } from "./TextReply";

interface Message {
  id: number;
  content: string;
  type: "message" | "reply";
  replyTo?: number;
}

interface SenderMessageProps {
  messages: Message[];
}

export const SenderMessage: React.FC<SenderMessageProps> = ({ messages }) => {
  const dispatch = useDispatch();

  const handleReplyClick = (messageId: number) => {
    dispatch(setReplyTarget(messageId));
    console.log(messageId);
  };

  return (
    <>
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
                  onClick={() => handleReplyClick(message.id)}
                >
                  <Reply className="w-4 h-4 ml-4" />
                </div>
              </div>
              <div>
                {message.type === "reply" ? (
                  <div className="p-1 rounded-lg  ">
                    <TextReply />
                    <p
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  </div>
                ) : (
                  <h5
                    className="items-center text-sm"
                    dangerouslySetInnerHTML={{ __html: message.content }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
