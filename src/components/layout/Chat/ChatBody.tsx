import React from "react";
import { DateSeparator } from "./DateSeparator";
import { ReceiverMessage } from "../Message/ReceiverMessage";
import { SenderMessage } from "../Message/SenderMessage";
import { ChatData } from "../../../data";
import EditorMessage from "../Message/EditorMessage";

export const ChatBody: React.FC = () => {
  return (
    <>
      <div>
        {ChatData.data.map((chat, idx) => {
          const currentDate = new Date(chat.metadata.timestamp).toDateString();
          const previousDate =
            idx > 0
              ? new Date(
                  ChatData.data[idx - 1].metadata.timestamp
                ).toDateString()
              : null;

          return (
            <React.Fragment key={chat.message_id}>
              {currentDate !== previousDate && (
                <DateSeparator date={chat.metadata.timestamp} />
              )}

              {chat.metadata.flow === "Incoming" ? (
                <ReceiverMessage message={chat} />
              ) : (
                <SenderMessage message={chat} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <EditorMessage />
    </>
  );
};
