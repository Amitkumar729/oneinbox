import React, { useRef, useState } from "react";
import Tiptap from "../../TextEditor/Tiptap";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/reducers/chatSlice";
import { ReplyMessage } from "./Replymessage";

interface ChatFooterProps {
  placeholder: string;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ placeholder }) => {
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const editorRef = useRef<any>(null);

  const [replyTarget, setReplyTarget] = useState(true);

  const handleClose = () => {
    setReplyTarget(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      
      dispatch(addMessage(content));
      setContent("");
      setReplyTarget(false);

      if (editorRef.current) {
        editorRef.current.clearContent();
      }
    }
    console.log("data: ", content);
  };

  return (
    <div className="flex flex-col mb-4 ">
      {
        replyTarget && <ReplyMessage  onClose={handleClose}/>
      }
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
