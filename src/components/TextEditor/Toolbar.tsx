import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
//   Heading2,
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

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md
       flex justify-between items-start gap-5 w-full 
       flex-wrap border border-gray-700 bg-gray-200"
    >
      <div
        className="flex justify-start items-center
       gap-5 w-full lg:w-10/12 flex-wrap "
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold items-center border  "
          }
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Underline className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Heading2 className="w-4 h-4" />
        </button> */}

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold"
          }
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold hover:bg-gray-400 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-gray-400 text-white p-1 rounded-lg"
              : "font-semibold hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
      {content && (
        <button type="submit" className="px-1 rounded-md">
          <SendHorizontal  className="text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default Toolbar;
