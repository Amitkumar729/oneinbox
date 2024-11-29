import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { EditorContentProps } from "../../../types";
import { EditorImageMessage } from "./EditorImage";
import { EditorVideoMessage } from "./EditorVideo";
import { TextReply } from "../Message/TextReply";

const EditorMessageContent: React.FC<EditorContentProps> = ({ message }) => {
  const imageUrl = message.content.text.imageUrl[0];

  return (
    <>
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
          {imageUrl && imageUrl.length > 0 && (
            <EditorImageMessage messages={message} />
          )}
        </div>
        <div className="rounded-lg w-[300px] ">
          {message.content.text?.videoUrl &&
            message.content.text.videoUrl.length > 0 && (
              <EditorVideoMessage messages={message} />
            )}
        </div>
      </div>
      )}

      
    </>
  );
};

export default EditorMessageContent;
