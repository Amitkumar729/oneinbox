import React, { useState } from "react";
import Tiptap from "../TextEditor/Tiptap";

export const ChatFooter: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: any) => {
    setContent(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("data: ", content);
  };

  return (
    <div className="flex flex-col mb-4">
      <form onSubmit={handleSubmit}>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleChange(newContent)}
        />
      </form>
    </div>
  );
};
