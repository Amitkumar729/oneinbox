import React from "react";
import { Reply } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { ChatData } from "../../../data";

export const ReceiverMessage: React.FC = () => {
  const dispatch = useDispatch();

  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));
    console.log("incoming messageId: ", messageId);
  };

  const incomingMessages = ChatData.filter((chat) => chat.flow === "incoming");
  console.log("incomingMessages: ", incomingMessages);

  return (
    <div>
      {incomingMessages.map((chat) => (
        <div className="hover:bg-gray-100 rounded-lg mb-2"  key={chat.messageID} >
          <div className="flex items-start p-1 max-w-[70%] w-fit   rounded-lg">
            {/* Message Box */}
            <div className="flex flex-col w-full">
              <div className="flex  items-center justify-between">
                <div className="flex items-center">
                  {/* Message Timing */}
                  <h6 className="text-xs text-gray-500">{chat.time}</h6>
                </div>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleReplyClick(chat.messageID)}
                >
                  <Reply className="w-4 h-4  ml-4" />
                </div>
              </div>

              {/* Message Content */}
              <div>
                <h5 className="text-sm">{chat.message}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
