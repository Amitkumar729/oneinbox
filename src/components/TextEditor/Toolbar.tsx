import { type Editor } from "@tiptap/react";
import { SendHorizontal, Link } from "lucide-react";

import { buttonConfigs } from "./ButtonConfig";

type ToolbarProps = {
  editor: Editor | null;
  content: string;
  handleImageUpload: (file: File) => void;
};

const Toolbar: React.FC<ToolbarProps> = ({
  editor,
  content,
  handleImageUpload,
}) => {
  if (!editor) return null;

  const handleImageUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageUpload(file);
      }
    };
    input.click();
  };

  return (
    <div
      className="px-4 py-3 rounded-br-md rounded-bl-md flex justify-between items-start
     gap-5 w-full flex-wrap border border-gray-200 bg-gray-100 "
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        {buttonConfigs.map(
          ({ type, command, icon, activeType, customClass, ariaLabel }) => (
            <button
              key={type}
              onClick={(e) => {
                e.preventDefault();
                command(editor);
              }}
              className={
                activeType && editor.isActive(activeType)
                  ? "bg-gray-400 text-white p-1 rounded-lg"
                  : `font-semibold ${customClass ?? ""}`
              }
              aria-label={ariaLabel}
            >
              {icon}
            </button>
          )
        )}
        <button onClick={handleImageUploadClick} aria-label="Insert Image">
          <Link size={17} />
        </button>
      </div>
      {content && (
        <button type="submit" className="px-1 rounded-md">
          <SendHorizontal className="text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default Toolbar;
