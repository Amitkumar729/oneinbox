import React, { useRef, useState } from "react";
import Tiptap from "../TextEditor/Tiptap";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/reducers/chatSlice";

export const ChatFooter: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const editorRef = useRef<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addMessage(content));
      setContent("");
      if (editorRef.current) {
        editorRef.current.clearContent(); 
      }
    }
    console.log("data: ", content);
  };

  return (
    <div className="flex flex-col mb-4 ">
      <form onSubmit={handleSubmit}>
        <Tiptap
        ref={editorRef}
          content={content}
          onChange={(newContent: string) => setContent(newContent)}
        />
      </form>
    </div>
  );
};
