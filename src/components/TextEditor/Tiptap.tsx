import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { customMarkdownSerializer } from "./customMarkdownSerializer";

const Tiptap = forwardRef(({ onChange, content, placeholder }: any, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (markdownContent: string) => {
    onChange(markdownContent);
  };

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-t border-r border-l border-gray-200 rounded-tl-md rounded-tr-md items-start w-full gap-2 text-sm pt-4 outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      // const htmlContent = editor.getHTML();
      const doc = editor.state.doc;
      // console.log(doc);
      const markdownContent = customMarkdownSerializer.serialize(doc);
      handleChange(markdownContent);
      // console.log(markdownContent);
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
    <div className="relative   px-4 w-[98%] ">
      <div className="relative ">
        {!isFocused && !content && (
          <div className="absolute left-4 top-3 text-gray-700 pointer-events-none">
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
      <Toolbar editor={editor} content={content} />
    </div>
  );
});

export default Tiptap;
