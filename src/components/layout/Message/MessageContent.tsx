import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { TextReply } from "./TextReply";
import { VideoMessage } from "./VideoMessage";
import { AudioMessage } from "./AudioMessage";
import { ImageMessage } from "./ImageMessage";

export const MessageContent: React.FC<{ message: any }> = ({ message }) => {
  if (message.reply?.is_reply) {
    return (
      <div className="p-1 rounded-lg">
        <TextReply replyToId={message.reply.reply_to} />
        <p style={{ fontSize: "11px" }} className="text-sm border">
          <ReactMarkdown
            children={message.content.text}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </p>
      </div>
    );
  }

  switch (message.content.type) {
    case "video":
      return (
        <div>
          <VideoMessage message={message} />
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    case "audio":
      return (
        <div>
          <AudioMessage message={message} />
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    case "image":
      return (
        <div>
          <ImageMessage message={message} />
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    default:
      return <h5 className="text-sm">{message.content.text}</h5>;
  }
};
