import React, { useRef, useState } from "react";
import Tiptap from "../../TextEditor/Tiptap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addMessage, clearReplyTarget } from "../../store/reducers/chatSlice";
import { ReplyMessage } from "../Message/Replymessage";
import { ChatFooterProps, ChatMessage } from "../../../types";

export const ChatFooter: React.FC<ChatFooterProps> = ({ placeholder }) => {
  const [textContent, setTextContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const dispatch = useDispatch();
  const editorRef = useRef<any>(null);

  const { replyTarget, replyToId } = useSelector(
    (state: RootState) => state.chat
  );

  const handleClose = () => {
    dispatch(clearReplyTarget());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!textContent && !imageUrl && !videoUrl) {
      return;
    }

    const newMessage: ChatMessage = {
      id: Date.now(),
      content: {
        text: textContent,
        image: imageUrl,
        video: videoUrl,
        audio: audioUrl,
      },
      type: replyTarget ? "reply" : "message",
      replyTo: replyTarget ? replyToId : undefined,
    };

    dispatch(addMessage(newMessage));
    setTextContent("");
    setImageUrl("");
    setVideoUrl("");
    setAudioUrl("");
    dispatch(clearReplyTarget());

    if (editorRef.current) {
      editorRef.current.clearContent();
    }
  };

  return (
    <div className="flex flex-col mb-4">
      {replyTarget && <ReplyMessage onClose={handleClose} />}
      <form onSubmit={handleSubmit}>
        <Tiptap
          ref={editorRef}
          content={textContent}
          onChange={(newContent: string) => setTextContent(newContent)}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};
