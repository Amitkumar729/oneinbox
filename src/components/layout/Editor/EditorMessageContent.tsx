import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { EditorContentProps } from "../../../types";
import { EditorImageMessage } from "./EditorImage";
import { EditorVideoMessage } from "./EditorVideo";
import { TextReply } from "../Message/TextReply";
import { EditorAudioMessage } from "./EditorAudio";

const EditorMessageContent: React.FC<EditorContentProps> = ({ message }) => {
  const imageUrl = message.content.text?.imageUrl || [];
  const videoUrl = message.content.text?.videoUrl || [];
  const audioUrl = message.content.text?.audioUrl || [];
  const text = message.content.text.text || "";

  return (
    <>
      {message.type === "reply" ? (
        <div className="p-1 rounded-lg">
          <TextReply replyToId={message.replyTo?.toString() || ""} />
          <div className="text-sm">
            <ReactMarkdown
              children={text}
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
                children={text}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              />
            )}
          </div>
          <div className="rounded-lg w-[300px] ">
            {imageUrl && imageUrl.length > 0 && (
              <EditorImageMessage message={message} />
            )}
          </div>
          <div className="rounded-lg w-[300px] ">
            {videoUrl && videoUrl.length > 0 && (
              <EditorVideoMessage message={message} />
            )}
          </div>
          <div className="rounded-lg w-[300px] ">
            {audioUrl && audioUrl.length > 0 && (
              <EditorAudioMessage message={message} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EditorMessageContent;
