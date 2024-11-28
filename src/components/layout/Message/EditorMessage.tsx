import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TextReply } from "./TextReply";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setReplyTarget } from "../../store/reducers/chatSlice";
import { format } from "date-fns";

const EditorMessage: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const [openReplyMenu, setOpenReplyMenu] = useState<string | null>(null);

  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));
    setOpenReplyMenu(null);
  };

  const formatTime = () => {
    return format(new Date(), "h:mm a");
  };

  const currentTime = formatTime();

  return (
    <div className="mr-1">
      {messages.map((message) => (
        <div
          className="mb-3 flex flex-col items-end justify-end   "
          key={message.id}
        >
          <div
            className="  border-blue-200 flex flex-col
            items-start p-1 max-w-[55%] mr-5 rounded-md"
          >
            <div className="flex flex-col rounded-md p-2 w-full bg-blue-100 ">
              <div className="flex items-center justify-end"></div>
              <div className="flex   group w-fit  ">
                {message.type === "reply" ? (
                  <div className="p-1 rounded-lg">
                    <TextReply replyToId={message.replyTo?.toString() || ""} />
                    <div className="text-sm">
                      <ReactMarkdown
                        children={message.content.text.text || ""}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col-reverse">
                      <div className="text-sm w-fit  ">
                        {message.content.text && (
                          <ReactMarkdown
                            children={message.content.text.text || ""}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                          />
                        )}
                      </div>
                      <div className="rounded-lg w-[300px] ">
                        {message.content.text?.imageUrl &&
                          message.content.text.imageUrl.length > 0 && (
                            <img
                              className="rounded-md mb-3"
                              src={message.content.text.imageUrl[0]}
                              alt="Attached Image"
                            />
                          )}
                      </div>
                    </div>
                  </>
                )}
                <div
                  className="flex items-center max-h-fit cursor-pointer
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={() => handleReplyClick(String(message.id))}
                >
                  <ChevronDown className="w-4 h-4 ml-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-1 ">
              <h6 style={{ fontSize: "10px" }} className="text-gray-500">
                {currentTime}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditorMessage;
