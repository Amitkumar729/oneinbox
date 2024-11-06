export interface ChatMessage {
  id: string;
  from: string;
  to: string;
  flow: string;
  time: string;
  status: string;
  messageType: string;
  messageID: string;
  replyTo: string;
  isReply: number;
  message: string;
}

export const ChatData: ChatMessage[] = [
  {
    id: "8130382090340794-371024009436368--000029",
    from: "8130382090340794",
    to: "371024009436368",
    flow: "incoming",
    time: "9:05 PM",
    status: "",
    messageType: "text",
    messageID: "id1",
    isReply: 0,
    replyTo: "",
    message: "Hey, how's it going?",
  },
  {
    id: "371024009436368-8130382090340794--000028",
    from: "371024009436368",
    to: "8130382090340794",
    flow: "outgoing",
    time: "9:15 PM",
    status: "Read",
    messageType: "text",
    messageID: "id2",
    isReply: 1,
    replyTo: "id1",
    message: "I'm doing well, thanks! How about you?",
  },
  {
    id: "8130382090340794-371024009436368--000030",
    from: "8130382090340794",
    to: "371024009436368",
    flow: "incoming",
    time: "9:20 PM",
    status: "",
    messageType: "text",
    messageID: "id3",
    isReply: 0,
    replyTo: "",
    message: "I'm great! Just finished a project.",
  },
  {
    id: "371024009436368-8130382090340794--000031",
    from: "371024009436368",
    to: "8130382090340794",
    flow: "outgoing",
    time: "9:25 PM",
    status: "Read",
    messageType: "text",
    messageID: "id4",
    isReply: 1,
    replyTo: "id3",
    message: "That's awesome! What was the project about?",
  },
  {
    id: "8130382090340794-371024009436368--000032",
    from: "8130382090340794",
    to: "371024009436368",
    flow: "incoming",
    time: "9:30 PM",
    status: "",
    messageType: "text",
    messageID: "id5",
    isReply: 0,
    replyTo: "",
    message: "It was a web development project for a client.",
  },
  {
    id: "371024009436368-8130382090340794--000033",
    from: "371024009436368",
    to: "8130382090340794",
    flow: "outgoing",
    time: "9:35 PM",
    status: "Read",
    messageType: "text",
    messageID: "id6",
    isReply: 1,
    replyTo: "id5",
    message: "Sounds interesting! Did you face any challenges?",
  },
];
