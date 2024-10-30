import React, { useRef, useState } from "react";
import Tiptap from "../../TextEditor/Tiptap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addMessage, clearReplyTarget } from "../../store/reducers/chatSlice";
import { ReplyMessage } from "../Message/Replymessage";

interface ChatFooterProps {
  placeholder: string;
}

interface Message {
  id: number;
  content: string;
  type: "message" | "reply";
  replyTo?: number;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ placeholder }) => {
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const editorRef = useRef<any>(null);

 
  const { replyTarget, replyToId } = useSelector((state: RootState) => state.chat);

  const handleClose = () => {
    dispatch(clearReplyTarget());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        content,
        type: replyTarget ? "reply" : "message",
        replyTo: replyTarget ? replyToId : undefined,
      };

      dispatch(addMessage(newMessage));
      setContent("");
      dispatch(clearReplyTarget());

      if (editorRef.current) {
        editorRef.current.clearContent();
      }
    }
  };

  return (
    <div className="flex flex-col mb-4">
      {replyTarget && <ReplyMessage onClose={handleClose} />}
      <form onSubmit={handleSubmit}>
        <Tiptap
          ref={editorRef}
          content={content}
          onChange={(newContent: string) => setContent(newContent)}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};
