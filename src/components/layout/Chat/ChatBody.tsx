import React, { lazy, Suspense } from "react";
import { ChatData } from "../../../data";
import { Loader } from "../../loaders/loader";

const DateSeparator = lazy(() =>
  import("./DateSeparator").then((module) => ({
    default: module.DateSeparator,
  }))
);
const ReceiverMessage = lazy(() =>
  import("../Message/ReceiverMessage").then((module) => ({
    default: module.ReceiverMessage,
  }))
);
const SenderMessage = lazy(() =>
  import("../Message/SenderMessage").then((module) => ({
    default: module.SenderMessage,
  }))
);
const EditorMessage = lazy(() =>
  import("../Editor/EditorMessage").then((module) => ({
    default: module.EditorMessage,
  }))
);


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
              <Suspense fallback={<Loader />}>
                {currentDate !== previousDate && (
                  <DateSeparator date={chat.metadata.timestamp} />
                )}

                {chat.metadata.flow === "Incoming" ? (
                  <ReceiverMessage message={chat} />
                ) : (
                  <SenderMessage message={chat} />
                )}
              </Suspense>
            </React.Fragment>
          );
        })}
      </div>

      <Suspense fallback={<div>Loading Editor...</div>}>
        <EditorMessage />
      </Suspense>
    </>
  );
};
