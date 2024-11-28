import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage, ChatState } from "../../../types";

const initialState: ChatState = {
  messages: [],
  replyTarget: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setReplyTarget: (state, action: PayloadAction<string>) => {
      state.replyTarget = true;
      state.replyToId = action.payload;
    },
    clearReplyTarget: (state) => {
      state.replyTarget = false;
      state.replyToId = undefined;
    },
  },
});

export const { addMessage, setReplyTarget, clearReplyTarget } =
  chatSlice.actions;
export default chatSlice.reducer;
