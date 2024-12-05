import React, { useState } from "react";
import { ImageMessageProps } from "../../../../types";
import { ImageExpandedView } from "./ImageExpand";

export const ImageMessage: React.FC<ImageMessageProps> = ({ imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded) {
    return (
      <ImageExpandedView imageUrl={imageUrl} toggleExpand={toggleExpand} />
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
