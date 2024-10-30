import React from "react";
import { Reply } from "lucide-react";
import { useDispatch } from "react-redux";
import { setReplyTarget } from "../../store/reducers/chatSlice";

export const ReceiverMessage: React.FC = () => {
  const dispatch = useDispatch();

  const handleReplyClick = () => {
    const testMessageId = 1;
    dispatch(setReplyTarget(testMessageId));
  };

  return (
    <div className="hover:bg-gray-100 rounded-lg mb-2">
      <div className="flex items-start p-1 max-w-[70%]    rounded-lg">
        {/* Message Box */}
        <div className="flex flex-col w-full">
          <div className="flex  items-center justify-between">
            <div className="flex items-center">
              {/* Message Timing */}
              <h6 className="text-xs text-gray-500">9:00 PM</h6>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleReplyClick}
            >
              <Reply className="w-4 h-4  ml-4" />
            </div>
          </div>

          {/* Message Content */}
          <div>
            <h5 className="text-sm">
              This is the testing message, hello how are you Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repellhello how are you.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
