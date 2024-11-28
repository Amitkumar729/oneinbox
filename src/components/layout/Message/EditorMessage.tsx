import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TextReply } from "./TextReply";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setReplyTarget } from "../../store/reducers/chatSlice";

const EditorMessage: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.chat.messages);
  const [openReplyMenu, setOpenReplyMenu] = useState<string | null>(null);
  const handleReplyClick = (messageId: string) => {
    dispatch(setReplyTarget(messageId));
    setOpenReplyMenu(null);
  };
  return (
    <div>
      {message.map((message) => (
        <div className="  mb-3 flex justify-end" key={message.id}>
          <div
            className=" bg-blue-100 border border-blue-200 flex 
          items-start p-1 max-w-[70%] mr-5 rounded-lg"
          >
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
    </div>
  );
};

export default EditorMessage;
