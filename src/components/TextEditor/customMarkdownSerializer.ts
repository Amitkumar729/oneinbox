import { MarkdownSerializer, defaultMarkdownSerializer } from "prosemirror-markdown";

 
export const customMarkdownSerializer = new MarkdownSerializer(
  {
    ...defaultMarkdownSerializer.nodes,  
  },
  {
   
    bold: {
      open: "**",
      close: "**",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    italic: {
      open: "_",
      close: "_",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    underline: {
      open: "<u>",  
      close: "</u>",
      mixable: true,
    },
    strike: {
      open: "~~",
      close: "~~",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    code: {
      open: "`",
      close: "`",
      mixable: true,
      expelEnclosingWhitespace: true,
    },
  }
);
