import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  SendHorizontal,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

type ButtonConfig = {
  type: string;
  command: () => void;
  icon: JSX.Element;
  activeType?: string;
  customClass?: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) return null;

  const buttonConfigs: ButtonConfig[] = [
    {
      type: "bold",
      command: () => editor.chain().focus().toggleBold().run(),
      icon: <Bold className="w-4 h-4" />,
      activeType: "bold",
    },
    {
      type: "italic",
      command: () => editor.chain().focus().toggleItalic().run(),
      icon: <Italic className="w-4 h-4" />,
      activeType: "italic",
    },
    {
      type: "underline",
      command: () => editor.chain().focus().toggleUnderline().run(),
      icon: <Underline className="w-4 h-4" />,
      activeType: "underline",
    },
    {
      type: "strike",
      command: () => editor.chain().focus().toggleStrike().run(),
      icon: <Strikethrough className="w-4 h-4" />,
      activeType: "strike",
    },
    {
      type: "bulletList",
      command: () => editor.chain().focus().toggleBulletList().run(),
      icon: <List className="w-4 h-4" />,
      activeType: "bulletList",
    },
    {
      type: "orderedList",
      command: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <ListOrdered className="w-4 h-4" />,
      activeType: "orderedList",
    },
    {
      type: "blockquote",
      command: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <Quote className="w-4 h-4" />,
      activeType: "blockquote",
    },
    {
      type: "code",
      command: () => editor.chain().focus().toggleCode().run(),
      icon: <Code className="w-4 h-4" />,
      activeType: "code",
    },
    {
      type: "undo",
      command: () => editor.chain().focus().undo().run(),
      icon: <Undo className="w-4 h-4" />,
      customClass: "hover:bg-gray-400 hover:text-white p-1 hover:rounded-lg",
    },
    {
      type: "redo",
      command: () => editor.chain().focus().redo().run(),
      icon: <Redo className="w-4 h-4" />,
      customClass: "hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg",
    },
  ];

  return (
    <div className="px-4 py-3 rounded-br-md rounded-bl-md flex justify-between items-start
     gap-5 w-full flex-wrap border border-gray-200 bg-gray-100 ">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        {buttonConfigs.map(
          ({ type, command, icon, activeType, customClass }) => (
            <button
              key={type}
              onClick={(e) => {
                e.preventDefault();
                command();
              }}
              className={
                activeType && editor.isActive(activeType)
                  ? "bg-gray-400 text-white p-1 rounded-lg"
                  : `font-semibold ${customClass ?? ""}`
              }
            >
              {icon}
            </button>
          )
        )}
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
