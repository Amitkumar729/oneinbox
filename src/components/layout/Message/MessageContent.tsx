import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { TextReply } from "./TextReply";
import { AudioMessage } from "./Audio/AudioMessage";
import { ImageMessage } from "./Image/ImageMessage";
import { VideoMessage } from "./Video/VideoMessage";

export const MessageContent: React.FC<{ message: any }> = ({ message }) => {
  const attachmentUrl = message.content.attachments[0]?.url;

  if (message.reply?.is_reply) {
    return (
      <div className="p-1 rounded-lg ">
        <TextReply replyToId={message.reply.reply_to} />
        <p className="text-sm border">
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
          <VideoMessage videoUrl={attachmentUrl}/>
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    case "audio":
      return (
        <div>
          <AudioMessage audioUrl={attachmentUrl}  />
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    case "image":
      return (
        <div>
          <ImageMessage imageUrl={attachmentUrl} />
          <h5 className="text-sm">{message.content.text}</h5>
        </div>
      );
    default:
      return <h5 className="text-sm">{message.content.text}</h5>;
  }
};
