import React, { useState } from "react";
import {   X } from "lucide-react";
import { EditorContentProps } from "@tiptap/react";

export const EditorImageMessage: React.FC<EditorContentProps> = ({
  messages,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const imageUrl = messages.content.text.imageUrl[0];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 
        z-50 flex flex-col items-center justify-center"
        onClick={(e) => {
          // Prevent closing
          if ((e.target as HTMLElement).tagName !== "IMG") {
            toggleExpand();
          }
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleExpand}
          className="absolute top-4 right-4 text-white
           bg-blue-200 bg-opacity-50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Expanded Image Container */}
        <div className="relative w-full max-w-4xl">
          <img
            src={imageUrl}
            alt="Expanded Image"
            className="w-full max-h-[80vh] rounded-lg object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2">
        <div className="bg-[#f7f7f7] flex-col items-start p-1 max-w-[70%] w-fit rounded-lg relative">
          {/* Image Content */}
          <div className="flex flex-col w-full">
            <div className="flex group relative">
              {/* Image Container */}
              <div className="relative w-[300px] cursor-pointer">
                <img
                  onClick={toggleExpand}
                  src={imageUrl}
                  alt="Shared Image"
                  className="max-w-[300px] max-h-[400px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
