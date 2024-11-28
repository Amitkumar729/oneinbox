import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { customMarkdownSerializer } from "./customMarkdownSerializer";
import Image from "@tiptap/extension-image";

const Tiptap = forwardRef(({ onChange, content, placeholder }: any, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleImageUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        editor
          ?.chain()
          .focus()
          .setImage({ src: reader.result.toString() })
          .run();
      }
    };

    reader.readAsDataURL(file);
  };

  const handleChange = () => {
    if (!editor) return;
    const doc = editor?.state.doc;
    const markdownContent = customMarkdownSerializer.serialize(doc);
    // console.log("markDown::", markdownContent);
    const imageNodes = editor
      ?.getJSON()
      ?.content?.filter((node: any) => node.type === "image");
    const imageUrl = imageNodes?.map((node: any) => node.attrs.src) || [];

    const cleanedMarkdownContent = markdownContent.replace(/!\[.*?\]\(data:image.*?\)/g, "").trim();

    onChange({
      text: cleanedMarkdownContent || null,
      imageUrl,
    });
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.extend({
        addAttributes() {
          return {
            src: {},
            alt: {
              default: null,
            },
            title: {
              default: null,
            },
            width: {
              default: "150px",
            },
            height: {
              default: "auto",
            },
          };
        },
        renderHTML({ HTMLAttributes }) {
          return [
            "img",
            {
              ...HTMLAttributes,
              style:
                "border-radius: 8px; margin-bottom: 15px; border: 0.5px solid #0056b3;",
            },
          ];
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-t border-r border-l border-gray-200 rounded-tl-md rounded-tr-md items-start w-full gap-2 text-sm pt-4 outline-none",
      },
    },
    onUpdate: handleChange,
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
    <div className="relative   px-4 w-[97%] ">
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
      <Toolbar
        editor={editor}
        content={content}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
});

export default Tiptap;
