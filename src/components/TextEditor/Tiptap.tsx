import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

const Tiptap = forwardRef(({ onChange, content, placeholder }: any, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-600 items-start w-full gap-2 text-sm pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    content,
  });

  //  clearContent method via ref for the editor
  useImperativeHandle(ref, () => ({
    clearContent() {
      editor?.commands.clearContent();
    },
  }));

  // Effect to manage focus state
  useEffect(() => {
    if (editor) {
      editor.on("focus", () => setIsFocused(true));
      editor.on("blur", () => setIsFocused(false));
    }
  }, [editor]);

  return (
    <div className="relative w-full px-4 ">
      <Toolbar editor={editor} content={content} />
      <div className="relative ">
        {!isFocused && !content && (
          <div className="absolute left-4 top-3 text-gray-500 pointer-events-none">
           {placeholder}
          </div>
        )}
        <EditorContent
          style={{
            whiteSpace: "pre-line",
            maxWidth: "100%",
            width: "100%",
            wordWrap: "break-word",
          }}
          editor={editor}
        />
      </div>
    </div>
  );
});

export default Tiptap;
