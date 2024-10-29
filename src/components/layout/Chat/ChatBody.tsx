import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { DateSeparator } from "./DateSeparator";
import { ReceiverMessage } from "./ReceiverMessage";
import { SenderMessage } from "./SenderMessage";

interface User {
  id: number;
  name: string;
  image: string;
  status: "online" | "offline" | "away";
  iconName: string;
}

interface ChatBodyProps {
  user: User;
}

export const ChatBody: React.FC<ChatBodyProps> = ({ user }) => {
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <>
      <ReceiverMessage />

      <DateSeparator />

      <SenderMessage messages={messages} />
    </>
  );
};
