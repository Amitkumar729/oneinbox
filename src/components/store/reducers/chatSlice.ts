import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: number;
  content: string;
  type: "message" | "reply";
  replyTo?: number;
}

interface ChatState {
  messages: Message[];
  replyTarget: boolean;
  replyToId?: number;
}

const initialState: ChatState = {
  messages: [],
  replyTarget: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setReplyTarget: (state, action: PayloadAction<number>) => {
      state.replyTarget = true;
      state.replyToId = action.payload;
    },
    clearReplyTarget: (state) => {
      state.replyTarget = false;
      state.replyToId = undefined;
    },
  },
});

export const { addMessage,  setReplyTarget, clearReplyTarget } = chatSlice.actions;
export default chatSlice.reducer;
